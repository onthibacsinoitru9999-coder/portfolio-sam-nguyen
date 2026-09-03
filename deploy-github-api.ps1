param(
    [Parameter(Mandatory=$true)]
    [string]$Token,
    [string]$RepoName = "portfolio-sam-nguyen"
)

$headers = @{
    "Authorization" = "Bearer $Token"
    "Accept"        = "application/vnd.github.v3+json"
    "User-Agent"    = "Antigravity-Portfolio-Deployer"
}

Write-Host "1. Kiem tra tai khoan GitHub..." -ForegroundColor Cyan
try {
    $user = Invoke-RestMethod -Uri "https://api.github.com/user" -Headers $headers -Method Get
    $username = $user.login
    Write-Host "-> Xin chao @$username" -ForegroundColor Green
} catch {
    Write-Error "Token khong hop le hoac het han. Vui long kiem tra lai token."
    exit 1
}

Write-Host "2. Tao Repository '$RepoName' tren GitHub..." -ForegroundColor Cyan
$repoBody = @{
    name        = $RepoName
    description = "Website Portfolio Phau Thuat ThS.BS. Nguyen Huu Sam - BV Bach Mai"
    homepage    = "https://$username.github.io/$RepoName"
    private     = $false
    auto_init   = $true
} | ConvertTo-Json

try {
    $repo = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Headers $headers -Method Post -Body $repoBody -ContentType "application/json"
    Write-Host "-> Da tao repo thanh cong tai: $($repo.html_url)" -ForegroundColor Green
} catch {
    Write-Host "-> Repo da ton tai hoac duoc tao truoc do, tiep tuc deploy..." -ForegroundColor Yellow
}

Start-Sleep -Seconds 2

Write-Host "3. Dang tai cac file len GitHub..." -ForegroundColor Cyan
$files = Get-ChildItem -Path "d:\myportfilio" -Recurse -File -Force | Where-Object {
    $_.FullName -notmatch '\\\.git' -and $_.Name -ne 'deploy-github-api.ps1' -and $_.Name -ne 'deploy.bat'
}

foreach ($file in $files) {
    $relPath = $file.FullName.Substring("d:\myportfilio\".Length).Replace('\', '/')
    Write-Host "   + Dang upload: $relPath..." -NoNewline
    
    $bytes = [System.IO.File]::ReadAllBytes($file.FullName)
    $base64 = [Convert]::ToBase64String($bytes)

    $sha = $null
    try {
        $existing = Invoke-RestMethod -Uri "https://api.github.com/repos/$username/$RepoName/contents/$relPath" -Headers $headers -Method Get
        $sha = $existing.sha
    } catch {}

    $uploadBody = @{
        message = "Upload $relPath"
        content = $base64
    }
    if ($sha) { $uploadBody.sha = $sha }

    $jsonBody = $uploadBody | ConvertTo-Json

    try {
        Invoke-RestMethod -Uri "https://api.github.com/repos/$username/$RepoName/contents/$relPath" -Headers $headers -Method Put -Body $jsonBody -ContentType "application/json" | Out-Null
        Write-Host " [OK]" -ForegroundColor Green
    } catch {
        Write-Host " [Loi]" -ForegroundColor Red
    }
}

Write-Host "4. Kich hoat va trigger GitHub Pages build..." -ForegroundColor Cyan
$pagesBody = @{
    source = @{
        branch = "main"
        path   = "/"
    }
} | ConvertTo-Json

try {
    Invoke-RestMethod -Uri "https://api.github.com/repos/$username/$RepoName/pages" -Headers $headers -Method Post -Body $pagesBody -ContentType "application/json" | Out-Null
} catch {}

try {
    Invoke-RestMethod -Uri "https://api.github.com/repos/$username/$RepoName/pages/builds" -Headers $headers -Method Post | Out-Null
    Write-Host "-> Da trigger build GitHub Pages thanh cong!" -ForegroundColor Green
} catch {
    Write-Host "-> GitHub Pages dang xu ly..." -ForegroundColor Yellow
}

$siteUrl = "https://$username.github.io/$RepoName/"
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host " HOAN TAT DEPLOY WEBSITE!" -ForegroundColor Green
Write-Host " Website cua Bac Si se hoat dong tai:" -ForegroundColor White
Write-Host " $siteUrl" -ForegroundColor Yellow
Write-Host " (Luu y: GitHub Pages mat khoang 1-2 phut de build lan dau)" -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Cyan
