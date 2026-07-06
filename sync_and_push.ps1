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

# 1b. Clean up old website subfolder from Git and disk
if (Test-Path ".\website") {
    Write-Host "Removing old website subdirectory..." -ForegroundColor Yellow
    git rm -r website -f --ignore-unmatch | Out-Null
    Remove-Item -Recurse -Force website -ErrorAction SilentlyContinue
}

# 1c. Copy images to public/images folder
Write-Host "Copying service and technology images to public/images..." -ForegroundColor Yellow
if (-not (Test-Path ".\public\images")) {
    New-Item -ItemType Directory -Path ".\public\images" -Force | Out-Null
}
Copy-Item -Path ".\*.png" -Destination ".\public\images\" -Force
Copy-Item -Path ".\*.jpg" -Destination ".\public\images\" -Force
Copy-Item -Path ".\*.jpeg" -Destination ".\public\images\" -Force


# 2. Add and commit all changed files
Write-Host "`n[2/3] Staging and committing files to Git..." -ForegroundColor Yellow
git add .
git commit -m "Update service details, process steps, local images, warranty terms, and contact page helpline dashboard"

# 3. Push to GitHub main branch (force pushing to update root structure for Vercel)
Write-Host "`n[3/3] Pushing changes to GitHub (origin main)..." -ForegroundColor Yellow
git push origin HEAD:main --force

Write-Host "`n=============================================" -ForegroundColor Green
Write-Host "  Success! Changes have been pushed to GitHub!" -ForegroundColor Green
Write-Host "=============================================" -ForegroundColor Green
