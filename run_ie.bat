@echo off
Start cmd /c /q python -m SimpleHTTPServer 1234
Start cmd /c "C:\Program Files\Internet Explorer\iexplore.exe" -extoff http://127.0.0.1:1234/index.html