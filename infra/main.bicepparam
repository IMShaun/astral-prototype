using 'main.bicep'

// Client IDs of the two Entra app registrations from step 1 of infra/README.md (IMSERV tenant b41ef76a-cc8d-49db-a4fe-8f2a7173a460).
param prodSignInClientId = 'd7fb7bd0-8d46-4670-a0ea-d9e1e2e5324e'
param sandboxSignInClientId = '5f8ad79c-ab3d-4d0f-b92f-7494ce75bfa3'

// GRANT_DEPLOY_ACCESS=false deploys without the deploy identities' access, for someone without Owner.
param grantDeployAccess = bool(readEnvironmentVariable('GRANT_DEPLOY_ACCESS', 'true'))
