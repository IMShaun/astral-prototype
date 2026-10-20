# Publish the committed prototype and Library to the IMSERV site.
# main gets the source. gh-pages gets the two password-protected pages that the site serves.
#   powershell -ExecutionPolicy Bypass -File scripts\publish\publish.ps1
# Save the site password once first with save-password.ps1. See README.md in this folder.
param(
  [string]$Repo = (Resolve-Path "$PSScriptRoot\..\..").Path,
  [string]$PasswordFile = "$env:LOCALAPPDATA\astral-publish-tools\site-password.txt",
  [string]$GhConfigDir = "",
  [string]$Remote = "https://imserv.ghe.com/imserv/astral-prototype.git",
  # Build and encrypt, but push nothing.
  [switch]$Check
)
$ErrorActionPreference = "Stop"
$Here = $PSScriptRoot
$Tools = "$env:LOCALAPPDATA\astral-publish-tools"
$T = "$env:TEMP\astral-publish"
$Pages = "https://imserv-astral-prototype.pages.imserv.ghe.com/"

# Optional: sign in with a dedicated gh config instead of the normal Git sign-in.
$helper = ""
if ($GhConfigDir) {
  Remove-Item Env:GH_TOKEN, Env:GH_ENTERPRISE_TOKEN -ErrorAction SilentlyContinue
  $env:GH_CONFIG_DIR = $GhConfigDir
  $env:GIT_TERMINAL_PROMPT = "0"
  $helper = "!'" + ((Get-Command gh).Source -replace '\\', '/') + "' auth git-credential"
}
function G {
  if ($helper) { & git -c credential.helper= -c "credential.https://imserv.ghe.com.helper=$helper" @args }
  else { & git @args }
  if ($LASTEXITCODE) { throw "git $args failed" }
}
function Step($m) { Write-Host "== $m" }

if (-not (Test-Path $PasswordFile)) { throw "No site password is saved on this computer. Run scripts\publish\save-password.ps1 in its own window first." }
$sec = Get-Content $PasswordFile | ConvertTo-SecureString
$pw = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($sec))

Set-Location $Repo
if (git status --porcelain) { throw "There are unsaved changes. Commit them, or put them aside, before publishing." }
foreach ($js in "prototype.js", "astral-ui.js", "app.js") { node --check $js; if ($LASTEXITCODE) { throw "$js has a syntax error" } }

Step "Fetch the live site"
G fetch -q $Remote "+refs/heads/main:refs/remotes/imserv/main" "+refs/heads/gh-pages:refs/remotes/imserv/gh-pages"
git merge-base --is-ancestor imserv/main HEAD
if ($LASTEXITCODE) { throw "Someone has published since you last updated. Bring in the latest main from $Remote, then publish again." }

Step "Prepare tools"
if (-not (Test-Path "$Tools\node_modules\staticrypt") -or -not (Test-Path "$Tools\node_modules\sharp")) {
  Write-Host "Installing the publishing tools. This only happens once."
  New-Item -ItemType Directory $Tools -Force | Out-Null
  if (-not (Test-Path "$Tools\package.json")) { Set-Content "$Tools\package.json" '{ "name": "astral-publish-tools", "private": true }' }
  & npm install --prefix $Tools staticrypt@3.5.4 sharp@0.33.5 --no-fund --no-audit --loglevel=error
  if ($LASTEXITCODE) { throw "Could not install the publishing tools" }
}
$staticrypt = "$Tools\node_modules\.bin\staticrypt.cmd"
git worktree prune
if (Test-Path "$T\ghp") { git worktree remove --force "$T\ghp" }
if (Test-Path $T) { Remove-Item $T -Recurse -Force }
New-Item -ItemType Directory "$T\enc", "$T\out\library-site" -Force | Out-Null
Push-Location $T

Step "Check the password against the live pages"
& $env:ComSpec /c "git -C `"$Repo`" show imserv/gh-pages:index.html > enc\index.html"
& $env:ComSpec /c "git -C `"$Repo`" show imserv/gh-pages:library-site/index.html > enc\lib.html"
$salt = [regex]::Match([IO.File]::ReadAllText("$T\enc\index.html"), '"staticryptSaltUniqueVariableName":"([0-9a-f]+)"').Groups[1].Value
$libSalt = [regex]::Match([IO.File]::ReadAllText("$T\enc\lib.html"), '"staticryptSaltUniqueVariableName":"([0-9a-f]+)"').Groups[1].Value
& $staticrypt enc\index.html --decrypt -p $pw --salt $salt -d dec | Out-Null
& $staticrypt enc\lib.html --decrypt -p $pw --salt $libSalt -d dec | Out-Null
if (-not (Test-Path dec\index.html) -or -not (Test-Path dec\lib.html)) { throw "The saved site password is wrong. Run save-password.ps1 again with the right one." }

Step "Build"
node "$Here\bundle-desk.js" $Repo "$T\out\index.html"
if ($LASTEXITCODE) { throw "Prototype page build failed" }
node "$Here\bundle-library.js" $Repo "$T\out\library-site\index.html"
if ($LASTEXITCODE) { throw "Library page build failed" }

Step "Encrypt with the same password"
$common = @('-p', $pw, '--short', '--remember', '14', '--template-instructions', 'IMSERV Astral. Ask Shaun for the password.', '--template-color-primary', '#000000', '--template-color-secondary', '#ffffff', '--template-button', 'Open')
& $staticrypt out\index.html @common --template-title 'Astral prototype' --salt $salt -d site | Out-Null
& $staticrypt out\library-site\index.html @common --template-title 'Astral library' --salt $libSalt -d site\library-site | Out-Null
if (-not (Test-Path site\index.html) -or -not (Test-Path site\library-site\index.html)) { throw "Encryption failed" }
Pop-Location
if ($Check) { Write-Host "CHECKED: the pages built and the password works. Nothing was published."; return }

Step "Commit gh-pages"
git worktree add -q --detach "$T\ghp" imserv/gh-pages
Copy-Item "$T\site\index.html" "$T\ghp\index.html" -Force
Copy-Item "$T\site\library-site\index.html" "$T\ghp\library-site\index.html" -Force
$head = (git rev-parse --short HEAD)
# Git's line-ending warnings go to stderr, which Windows PowerShell would otherwise treat as errors.
& { $ErrorActionPreference = "Continue"; git -C "$T\ghp" add -A 2>&1 | Out-Null }
if ($LASTEXITCODE) { throw "git add in gh-pages failed" }
git -C "$T\ghp" diff --cached --quiet
if ($LASTEXITCODE) { git -C "$T\ghp" commit -q -m "Publish the password-gated Astral walk from $head.`n`nCo-authored-by: Copilot App <223556219+Copilot@users.noreply.github.com>" }

Step "Push main and gh-pages"
G push -q $Remote HEAD:refs/heads/main
G -C "$T\ghp" push -q $Remote HEAD:refs/heads/gh-pages
$pagesSha = (git -C "$T\ghp" rev-parse HEAD)

Step "Wait for the site to update"
$b = ""
if (Get-Command gh -ErrorAction SilentlyContinue) {
  for ($i = 0; $i -lt 30; $i++) {
    $b = & { $ErrorActionPreference = "Continue"; gh api repos/imserv/astral-prototype/pages/builds/latest --hostname imserv.ghe.com --jq '[.status,.commit] | @tsv' 2>$null }
    if (-not $b) { break }
    if ("$b" -match "^built\s+$pagesSha") { break }
    if ("$b" -match '^errored') { throw "The site build failed: $b" }
    Start-Sleep 10
  }
}
if (-not ("$b" -match "^built\s+$pagesSha")) { Write-Host "Could not confirm the site has finished updating. It usually takes a few minutes. Open the link to check." }

git worktree remove --force "$T\ghp"
Write-Host "DONE main=$head pages=$($pagesSha.Substring(0,7)) build=$b"
Write-Host "Repo:     https://imserv.ghe.com/imserv/astral-prototype"
Write-Host "Site:     $Pages"
Write-Host "Library:  ${Pages}library-site/"
