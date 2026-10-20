// The Astral prototype in Azure: one Linux App Service plan and two web apps, in an existing resource group.
//   prod     latest main, for the developers
//   sandbox  the newest sandbox-* tag, for stakeholders. It only changes when a tag is pushed.
// Both apps sit behind Microsoft Entra sign-in. Neither stores a secret.
//
//   az group create --name rg-astral-prototype-uks --location uksouth
//   az deployment group create --resource-group rg-astral-prototype-uks --template-file main.bicep --parameters main.bicepparam
targetScope = 'resourceGroup'

param location string = resourceGroup().location

@description('Prefix for resource names. Web app names must be unique across Azure.')
param name string = 'imserv-astral-prototype'

@description('B1 is the cheapest plan that stays up. F1 is free but stops an app after 165 MB of traffic a day.')
@allowed([
  'B1'
  'F1'
])
param sku string = 'B1'

@description('OIDC issuer for GitHub Actions on imserv.ghe.com.')
param githubIssuer string = 'https://token.actions.imserv.ghe.com'

@description('Owner and repo exactly as they appear in the GitHub token subject. imserv.ghe.com adds their IDs: owner@id/repo@id.')
param githubRepo string = 'imserv@4031237/astral-prototype@10734012' 

@description('Application (client) ID of the Entra app registration that signs people in to prod.')
@minLength(36)
@maxLength(36)
param prodSignInClientId string

@description('Application (client) ID of the Entra app registration that signs people in to sandbox.')
@minLength(36)
@maxLength(36)
param sandboxSignInClientId string

@description('Let each GitHub deploy identity deploy to its app. Needs Owner or Role Based Access Control Administrator. Without it, run the grant in infra/README.md step 2 later.')
param grantDeployAccess bool = true

var environments = [
  {
    key: 'prod'
    signInClientId: prodSignInClientId
  }
  {
    key: 'sandbox'
    signInClientId: sandboxSignInClientId
  }
]

module plan 'plan.bicep' = {
  name: 'astral-plan'
  params: {
    location: location
    name: 'asp-${name}'
    sku: sku
  }
}

module env 'environment.bicep' = [
  for e in environments: {
    name: 'astral-${e.key}'
    params: {
      location: location
      appName: '${name}-${e.key}'
      planId: plan.outputs.id
      alwaysOn: sku != 'F1'
      signInClientId: e.signInClientId
      githubIssuer: githubIssuer
      githubSubject: 'repo:${githubRepo}:environment:${e.key}'
      grantDeployAccess: grantDeployAccess
    }
  }
]

// What IT and the GitHub settings need next. See infra/README.md.
output environments array = [
  for (e, i) in environments: {
    environment: e.key
    appName: env[i].outputs.appName
    url: env[i].outputs.url
    deployClientId: env[i].outputs.deployClientId
    signInIdentityPrincipalId: env[i].outputs.signInIdentityPrincipalId
  }
]
