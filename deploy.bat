@echo off
chcp 65001 > nul
echo ========================================================
echo       DONG BO & XUAT BAN PORTFOLIO LEN GITHUB PAGES
echo ========================================================
echo.

:: Kiem tra git da cai dat chua
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [LOI] May tinh chua cai dat Git. Vui long cai dat Git tai https://git-scm.com/
    pause
    exit /b
)

:: Kiem tra da khoi tao git repo chua
if not exist ".git" (
    echo [*] Dang khoi tao Git repository...
    git init
    git branch -M main
)

:: Thuc hien commit
echo [*] Dang chuan bi tep tin...
git add .

set /p commit_msg="Nhap noi dung cap nhat (hoac Enter de mac dinh): "
if "%commit_msg%"=="" set commit_msg="Cap nhat Portfolio ca mo va bai viet y khoa"

git commit -m "%commit_msg%"

:: Kiem tra remote origin
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo [CHUA CO LIEN KET GITHUB]
    echo Vui long tao 1 repository moi tren GitHub (Public), sau do dan URL vao day:
    set /p repo_url="Nhap GitHub Repository URL (vi du: https://github.com/username/myportfolio.git): "
    git remote add origin %repo_url%
)

echo.
echo [*] Dang day ma nguon len GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   [THANH CONG] Website da duoc day len GitHub!
    echo   GitHub Pages se tu dong cap nhat trong 30-60 giay.
    echo ========================================================
) else (
    echo.
    echo [CHU Y] Neu gap loi xac thuc, vui long kiem tra quyen truy cap GitHub hoac Personal Access Token.
)

echo.
pause
