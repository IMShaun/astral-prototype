# Save the Astral site password on this computer so publish.ps1 can use it.
# It is encrypted for your Windows account only and never goes into the repository.
#   powershell -ExecutionPolicy Bypass -File scripts\publish\save-password.ps1
param([string]$PasswordFile = "$env:LOCALAPPDATA\astral-publish-tools\site-password.txt")
$ErrorActionPreference = "Stop"
Write-Host "Type the Astral site password, then press Enter."
Write-Host "Nothing appears as you type. That is normal."
$sec = Read-Host -AsSecureString "Password"
if ($sec.Length -eq 0) {
  Write-Host "No password was typed, so nothing was saved."
} else {
  New-Item -ItemType Directory (Split-Path $PasswordFile) -Force | Out-Null
  $sec | ConvertFrom-SecureString | Set-Content $PasswordFile
  Write-Host "Saved. Close this window and go back to Copilot."
}
Read-Host "Press Enter to close"
