@echo off
rem  The Last of EE2028 - starts a tiny local web server and opens the game.
rem  Web Serial (USB link to the STM32) needs Chrome or Edge and a page served
rem  from http://localhost (or opened as a file).
cd /d "%~dp0"
set PORT=8028
set URL=http://localhost:%PORT%/index.html

where python >nul 2>nul
if %errorlevel%==0 (
  start "EE2028 game server (close to stop)" /min python -m http.server %PORT%
  goto open
)
where py >nul 2>nul
if %errorlevel%==0 (
  start "EE2028 game server (close to stop)" /min py -m http.server %PORT%
  goto open
)
echo Python not found: opening index.html directly instead.
start "" "%~dp0index.html"
goto :eof

:open
timeout /t 2 /nobreak >nul
rem  open in Chrome if it is installed, otherwise Edge, otherwise the default browser
start "" chrome "%URL%" 2>nul || start "" msedge "%URL%" 2>nul || start "" "%URL%"
