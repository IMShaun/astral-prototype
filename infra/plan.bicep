// One Linux plan shared by both apps. Deployment slots need Standard, so prod and sandbox are separate apps.
param location string
param name string
param sku string

resource plan 'Microsoft.Web/serverfarms@2024-04-01' = {
  name: name
  location: location
  kind: 'linux'
  sku: {
    name: sku
  }
  properties: {
    reserved: true
  }
}

output id string = plan.id
