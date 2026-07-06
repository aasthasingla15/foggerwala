# Foggerwala Project Setup and Automation Script
# Run this in PowerShell to copy assets, set up the website folder, and launch the dev environment.

$ErrorActionPreference = "Stop"

# 1. Define Paths
$brainDir = "C:\Users\AASTHA\.gemini\antigravity-ide\brain\2d4e0534-c985-4f17-be5e-cbf4efafd3a1"
$templateDir = "C:\Users\AASTHA\Downloads\termaweb\website"
$workspaceDir = "C:\Users\AASTHA\Downloads\ezgif-8c64fca99cec9d96-jpg"
$websiteDir = $workspaceDir

Write-Host "=============================================" -ForegroundColor Cyan
Write-Host "  Foggerwala Private Limited Setup Script    " -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan

# 2. Copy Generated Images to Workspace Root (for video_generator.html)
Write-Host "`n[1/5] Copying generated images to workspace root..." -ForegroundColor Yellow
$imageMapping = @{
    "technician_1783244117305.png" = "technician.png"
    "products_1783244133930.png"   = "products.png"
    "treatment_1783244151507.png"  = "treatment.png"
    "van_1783244168266.png"        = "van.png"
    "before_after_1783244190088.png" = "before_after.png"
    "fallback_poster_1783244412486.png" = "fallback_poster.png"
    "before_termite_1783247441705.png" = "before_termite.png"
    "after_termite_1783247543843.png" = "after_termite.png"
}

foreach ($src in $imageMapping.Keys) {
    $srcPath = Join-Path $brainDir $src
    $destPath = Join-Path $workspaceDir $imageMapping[$src]
    if (Test-Path $srcPath) {
        Copy-Item -Path $srcPath -Destination $destPath -Force
        Write-Host "  Copied $src -> $imageMapping[$src]" -ForegroundColor Green
    } else {
        Write-Warning "  Source image not found: $src"
    }
}

# 3. Create website directory in workspace and copy Vite React project template
Write-Host "`n[2/5] Copying website template to workspace (excluding node_modules)..." -ForegroundColor Yellow
if (Test-Path $templateDir) {
    if (-not (Test-Path $websiteDir)) {
        New-Item -ItemType Directory -Path $websiteDir -Force | Out-Null
    }

    # Copy files recursively excluding node_modules and dist
    Get-ChildItem -Path $templateDir | Where-Object { $_.Name -ne "node_modules" -and $_.Name -ne "dist" } | ForEach-Object {
        Copy-Item -Path $_.FullName -Destination $websiteDir -Recurse -Force
    }
    Write-Host "  Vite React project copied successfully to $websiteDir!" -ForegroundColor Green
} else {
    Write-Error "Template directory not found at $templateDir"
}

# 4. Copy fallback poster and slider assets to public directory
Write-Host "`n[3/5] Copying assets to public directory..." -ForegroundColor Yellow
$publicImages = @("fallback_poster.png", "before_termite.png", "after_termite.png", "before_after.png")
foreach ($img in $publicImages) {
    $imgSrc = Join-Path $workspaceDir $img
    $imgDest = Join-Path $websiteDir "public\$img"
    if (Test-Path $imgSrc) {
        Copy-Item -Path $imgSrc -Destination $imgDest -Force
        Write-Host "  Copied $img to website public directory!" -ForegroundColor Green
    }
}

# 5. Check and Copy Generated Videos and Logo if available
Write-Host "`n[4/5] Checking for generated videos and company logo in Downloads..." -ForegroundColor Yellow
$downloadsFolder = "C:\Users\AASTHA\Downloads"
$desktopVideo = Join-Path $downloadsFolder "desktop_hero.mp4"
$mobileVideo = Join-Path $downloadsFolder "mobile_hero.mp4"
$logoFile = Join-Path $downloadsFolder "LOGO 1.jpg.jpeg"
$publicFolder = Join-Path $websiteDir "public"

# Copy logo if present
if (Test-Path $logoFile) {
    Copy-Item -Path $logoFile -Destination (Join-Path $publicFolder "logo.png") -Force
    # Also copy to the active template directory so it is preserved
    if (Test-Path $templateDir) {
        Copy-Item -Path $logoFile -Destination (Join-Path $templateDir "public\logo.png") -Force
    }
    Write-Host "  Successfully copied company logo (logo.png) to website public directories!" -ForegroundColor Green
}

$copiedVideos = $false
if (Test-Path $desktopVideo) {
    Copy-Item -Path $desktopVideo -Destination (Join-Path $publicFolder "desktop_hero.mp4") -Force
    Write-Host "  Successfully copied desktop_hero.mp4 to website public directory!" -ForegroundColor Green
    $copiedVideos = $true
} else {
    Write-Host "  Note: desktop_hero.mp4 not found in Downloads yet. You will need to render it using video_generator.html." -ForegroundColor Cyan
}

if (Test-Path $mobileVideo) {
    Copy-Item -Path $mobileVideo -Destination (Join-Path $publicFolder "mobile_hero.mp4") -Force
    Write-Host "  Successfully copied mobile_hero.mp4 to website public directory!" -ForegroundColor Green
} else {
    Write-Host "  Note: mobile_hero.mp4 not found in Downloads yet. You will need to render it using video_generator.html." -ForegroundColor Cyan
}

# 6. Install Dependencies and Run
Write-Host "`n[5/5] Preparing Vite environment..." -ForegroundColor Yellow
Write-Host "  To install dependencies and start the development server:" -ForegroundColor Green
Write-Host "  1. CD into the website folder: cd .\website" -ForegroundColor Green
Write-Host "  2. Install packages: npm install" -ForegroundColor Green
Write-Host "  3. Launch local dev server: npm run dev" -ForegroundColor Green

if ($copiedVideos) {
    Write-Host "`nAll assets copied! Please proceed to launch the site." -ForegroundColor Cyan
} else {
    Write-Host "`nSetup complete! Please open 'video_generator.html' in Chrome to generate the video assets, then rerun this script or copy them to website/public/." -ForegroundColor Cyan
}
Write-Host "=============================================" -ForegroundColor Cyan
