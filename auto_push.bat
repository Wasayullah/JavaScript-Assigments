@echo off
cd /d "C:\Users\DELL\Documents\GitHub\JavaScript-Assigments"

:loop
git add app.js index.html
git commit -m "completed latest assignments"
git push

timeout /t 30
goto loop
