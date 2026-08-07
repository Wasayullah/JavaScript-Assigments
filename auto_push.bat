@echo off
cd /d "C:\Users\DELL\Documents\GitHub\JavaScript-Assigments"

:loop
git add app.js index.html
git commit -m "Auto update"
git push

timeout /t 60
goto loop
