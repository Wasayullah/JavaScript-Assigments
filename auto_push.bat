@echo off
cd /d "C:\Users\DELL\Documents\GitHub\JavaScript-Assigments"

:loop
git add .
git commit -m "completed latest assignments"
git push

timeout /t 1
goto loop
