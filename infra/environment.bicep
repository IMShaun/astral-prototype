// One environment: the web app, Microsoft sign-in in front of it, and the identity
// GitHub Actions uses to deploy to this app and no other.
param location string
param appName string
param planId string
param alwaysOn bool

@description('Application (client) ID of the Entra app registration that signs people in to this app.')
param signInClientId string

param githubIssuer string

@description('The subject GitHub puts in the token for jobs that run in this environment.')
param githubSubject string

param grantDeployAccess bool

// Website Contributor: enough to deploy, scoped to this one app.
var websiteContributor = subscriptionResourceId(
  'Microsoft.Authorization/roleDefinitions',
  'de139f84-1756-47ae-9be6-808fbbe84772'
)

// App Service proves itself to the sign-in app registration with this identity instead of a client secret.
resource signIn 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = {
  name: 'id-${appName}-signin'
  location: location
}

resource deployer 'Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31' = {
  name: 'id-${appName}-deploy'
  location: location
}

resource github 'Microsoft.ManagedIdentity/userAssignedIdentities/federatedIdentityCredentials@2023-01-31' = {
  parent: deployer
  name: 'github'
  properties: {
    issuer: githubIssuer
    subject: githubSubject
    audiences: [
      'api://AzureADTokenExchange'
    ]
  }
}

resource site 'Microsoft.Web/sites@2024-04-01' = {
  name: appName
  location: location
  kind: 'app,linux'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '${signIn.id}': {}
    }
  }
  properties: {
    serverFarmId: planId
    httpsOnly: true
    siteConfig: {
      linuxFxVersion: 'PYTHON|3.12'
      // server.py exits on a public port unless SHARE_PASSWORD is set, and then asks for that password
      // behind Microsoft sign-in. Python's own file server serves the same files with one sign-in.
      // The workflow leaves archive/, inbox/ and .cursor/ out of the package, as server.py would.
      appCommandLine: 'python -m http.server 8000 --bind 0.0.0.0 --directory /home/site/wwwroot'
      alwaysOn: alwaysOn
      ftpsState: 'Disabled'
      minTlsVersion: '1.2'
      scmMinTlsVersion: '1.2'
      http20Enabled: true
      appSettings: [
        {
          name: 'WEBSITES_PORT'
          value: '8000'
        }
        {
          name: 'SCM_DO_BUILD_DURING_DEPLOYMENT'
          value: 'false'
        }
        {
          name: 'OVERRIDE_USE_MI_FIC_ASSERTION_CLIENTID'
          value: signIn.properties.clientId
        }
      ]
    }
  }
}

// No FTP and no deployment passwords. GitHub deploys with its own Entra identity.
resource noFtp 'Microsoft.Web/sites/basicPublishingCredentialsPolicies@2024-04-01' = {
  parent: site
  name: 'ftp'
  properties: {
    allow: false
  }
}

resource noScmPassword 'Microsoft.Web/sites/basicPublishingCredentialsPolicies@2024-04-01' = {
  parent: site
  name: 'scm'
  properties: {
    allow: false
  }
}

resource auth 'Microsoft.Web/sites/config@2024-04-01' = {
  parent: site
  name: 'authsettingsV2'
  properties: {
    platform: {
      enabled: true
    }
    globalValidation: {
      requireAuthentication: true
      unauthenticatedClientAction: 'RedirectToLoginPage'
      redirectToProvider: 'azureactivedirectory'
    }
    identityProviders: {
      azureActiveDirectory: {
        enabled: true
        registration: {
          clientId: signInClientId
          clientSecretSettingName: 'OVERRIDE_USE_MI_FIC_ASSERTION_CLIENTID'
          openIdIssuer: '${environment().authentication.loginEndpoint}${tenant().tenantId}/v2.0'
        }
      }
    }
    login: {
      tokenStore: {
        enabled: true
      }
    }
    httpSettings: {
      requireHttps: true
    }
  }
}

resource canDeploy 'Microsoft.Authorization/roleAssignments@2022-04-01' = if (grantDeployAccess) {
  name: guid(site.id, deployer.id, websiteContributor)
  scope: site
  properties: {
    roleDefinitionId: websiteContributor
    principalId: deployer.properties.principalId
    principalType: 'ServicePrincipal'
  }
}

output appName string = site.name
output url string = 'https://${site.properties.defaultHostName}'
output deployClientId string = deployer.properties.clientId
output signInIdentityPrincipalId string = signIn.properties.principalId
