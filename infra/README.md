# Astral prototype in Azure

| App | URL | Deploys from | Who it is for |
|---|---|---|---|
| prod | https://imserv-astral-prototype-prod.azurewebsites.net | every push to `main` | developers |
| sandbox | https://imserv-astral-prototype-sandbox.azurewebsites.net | a pushed `sandbox-*` tag, then left alone | stakeholders |

Both run on one Linux B1 plan in `rg-astral-prototype-uks` (UK South), about $13 a month in total. Both require Microsoft Entra sign-in. Nothing stores a secret.

The apps serve the repo with `python -m http.server`, not `server.py`. `server.py` exits on a public port unless `SHARE_PASSWORD` is set, and then asks for that password behind Microsoft sign-in. The deploy package leaves out `archive/`, `inbox/`, `.cursor/`, `.github/` and `infra/`.

The Work Desk still ships, because the app needs `data/board.json`. Anyone who can sign in to an app can open the desk.

## First-time setup

Do these in order. Steps 1 and 3 need someone who can manage app registrations in Entra. Step 2 needs Owner on the resource group, or Contributor plus Role Based Access Control Administrator, because it gives each deploy identity a role.

### 1. Create the two sign-in app registrations (Entra)

```sh
for env in prod sandbox; do
  app=imserv-astral-prototype-$env
  id=$(az ad app create --display-name "Astral prototype $env" --sign-in-audience AzureADMyOrg \
    --web-redirect-uris "https://$app.azurewebsites.net/.auth/login/aad/callback" \
    --enable-id-token-issuance true --query appId -o tsv)
  sleep 15  # Entra takes a few seconds to see the new app
  az ad sp create --id "$id" >/dev/null
  az ad sp update --id "$id" --set appRoleAssignmentRequired=true
  # Sign-in only: openid, profile, email and User.Read, consented once for everyone.
  az ad app permission add --id "$id" --api 00000003-0000-0000-c000-000000000000 --api-permissions \
    37f7f235-527c-4136-accd-4a02d197296e=Scope 14dad69e-099b-42c9-810b-d002981feec1=Scope \
    64a6cdd6-aab1-4aaf-94b8-3cc8405e90d0=Scope e1fe6dd8-ba31-4d61-89e7-88639da4683d=Scope
  # admin-consent fails in Cloud Shell, so grant the consent through Microsoft Graph instead.
  az ad app permission grant --id "$id" --api 00000003-0000-0000-c000-000000000000 \
    --scope "openid profile email User.Read" --consent-type AllPrincipals >/dev/null
  echo "$env $id"
done
```

`appRoleAssignmentRequired` means only assigned people get in. Assign them in Entra under Enterprise applications, Astral prototype prod or sandbox, Users and groups:

- **prod:** the prototype team.
- **sandbox:** the team and the stakeholders. Invite external stakeholders as guest users first.

### 2. Deploy the infrastructure

Put the two client IDs from step 1 into `infra/main.bicepparam`. Then, from the `infra` folder (or Cloud Shell with the four files uploaded):

```sh
az group create --name rg-astral-prototype-uks --location uksouth
az deployment group what-if --resource-group rg-astral-prototype-uks \
  --template-file main.bicep --parameters main.bicepparam
az deployment group create --resource-group rg-astral-prototype-uks \
  --template-file main.bicep --parameters main.bicepparam \
  --query properties.outputs.environments.value
```

Keep the output. Steps 3 and 4 use it.

After the first deploy, restart both apps. Sign-in doesn't take effect until they restart, and until then they're open to anyone:

```sh
for env in prod sandbox; do az webapp restart -g rg-astral-prototype-uks -n imserv-astral-prototype-$env; done
```

Check that `https://imserv-astral-prototype-prod.azurewebsites.net/.auth/login/aad` redirects to `login.microsoftonline.com`, not 404.

If it fails with `roleAssignments/write`, you can create resources but not grant access. Either activate Owner or Role Based Access Control Administrator and run it again, or deploy without the grants by putting `GRANT_DEPLOY_ACCESS=false` in front of `az deployment group create`. Then someone with Owner runs:

```sh
for env in prod sandbox; do
  app=imserv-astral-prototype-$env
  az role assignment create --role "Website Contributor" --assignee-principal-type ServicePrincipal \
    --assignee-object-id "$(az identity show -g rg-astral-prototype-uks -n id-$app-deploy --query principalId -o tsv)" \
    --scope "$(az webapp show -g rg-astral-prototype-uks -n $app --query id -o tsv)" -o none
done
```

GitHub can't deploy until this is done. Everything else works without it.

### 3. Let each app sign in without a secret (Entra)

For each environment, trust the app's sign-in identity. Use `signInIdentityPrincipalId` from step 2:

```sh
az ad app federated-credential create --id <client id from step 1> --parameters '{
  "name": "app-service",
  "issuer": "https://login.microsoftonline.com/<tenant id>/v2.0",
  "subject": "<signInIdentityPrincipalId>",
  "audiences": ["api://AzureADTokenExchange"]
}'
```

Sign-in fails until this is done. The apps stay closed while it fails.

### 4. Set up GitHub (imserv.ghe.com, repo settings)

Repository variables:

- `AZURE_TENANT_ID`
- `AZURE_SUBSCRIPTION_ID`
- `AZURE_RESOURCE_GROUP` = `rg-astral-prototype-uks`

Environments:

| Environment | Deployment branches and tags | Variables |
|---|---|---|
| `prod` | branch `main` | `AZURE_APP_NAME` = `imserv-astral-prototype-prod`, `AZURE_CLIENT_ID` = prod `deployClientId` |
| `sandbox` | tags `sandbox-*` | `AZURE_APP_NAME` = `imserv-astral-prototype-sandbox`, `AZURE_CLIENT_ID` = sandbox `deployClientId` |

Each deploy identity can only deploy to its own app, and only from its own GitHub environment.

### 5. Deploy

- **prod:** push to `main`, or run **Deploy prod** by hand.
- **sandbox:** `git tag -a sandbox-2026-10-20 -m "Steerco walk" && git push origin sandbox-2026-10-20`.
- **Roll back sandbox:** run **Deploy sandbox** by hand and pick the older tag under "Use workflow from".
