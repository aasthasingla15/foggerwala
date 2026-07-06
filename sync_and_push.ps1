# Sync changes from template and push to GitHub
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "  Foggerwala Git Sync & Push Script          " -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan

# 1. Run setup.ps1 to sync changes into the website subdirectory
Write-Host "`n[1/3] Syncing latest website edits to workspace..." -ForegroundColor Yellow
if (Test-Path ".\setup.ps1") {
    & .\setup.ps1
} else {
    Write-Warning "setup.ps1 not found in current directory. Skipping template copy step."
}

# 2. Add and commit all changed files
Write-Host "`n[2/3] Staging and committing files to Git..." -ForegroundColor Yellow
git add .
git commit -m "Update service details, process steps, local images, warranty terms, and contact page helpline dashboard"

# 3. Push to GitHub main branch
Write-Host "`n[3/3] Pushing to GitHub (origin main)..." -ForegroundColor Yellow
git push origin main

Write-Host "`n=============================================" -ForegroundColor Green
Write-Host "  Success! Changes have been pushed to GitHub!" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green
