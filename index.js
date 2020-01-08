const { readdirSync } = require('fs');
const shell = require('shelljs');
const path = '/mnt/c/Projetos/git.paytvlabs.com.br/STV/stv-iptv';

function getDirectories(path) {
  readdirSync(path, { withFileTypes: true }).map(dirent => {
    if (dirent.isDirectory() && dirent.name !== 'node_modules') {
      console.log(`directory -> ${dirent.name}`);
      getDirectories(`${path}/${dirent.name}`);
    } else if (dirent.isFile() && dirent.name.split('.').pop() === 'sh') {
      console.log(`file -> ${dirent.name}`);
      shell.exec(`dos2unix ${path}/${dirent.name}`);
    }
  })
}

getDirectories(path);