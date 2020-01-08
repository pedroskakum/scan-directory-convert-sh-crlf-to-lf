## Convert CRLF to LF

### Requisites

`sudo apt install dos2unix`

This repository scans a specific directory, finds all the .sh files, and converts from CRLF to LF.  

It is a project designed to run projects with many .sh files, be installed on a windows system and running a WSL.  

I accept suggestions for improvement and contribution

## Run 

1. Change variable path in script to directory to scan
2. Change the extension in script to find others files extensions

`node index.js`