const fs = require('fs');
const path = require('path');

const directoryPath = './gravadas';
const FILE_NAME = 'nomes.txt';

function writeToFile(names) {
    names.sort();

    fs.writeFile(FILE_NAME, names.join('\n'), function (err) {
        if (err) return console.log(`Erro ao escrever no arquivo: ${FILE_NAME}, error: ${err}`);
    });

    console.log(`Nomes gravados com sucesso no arquivo: ${FILE_NAME}`);
}

function readFilesFromFolder() {
    fs.readdir(directoryPath, function (err, files) {
        if (err) return console.log('Erro ao listar arquivos da pasta: ' + err);

        const names = [];

        files.forEach(function (file) {
            if (file.endsWith('.DEC')) {
                fs.readFile(path.join(directoryPath, file), 'utf8', function (err, data) {
                    if (err) return console.log(`Erro ao ler arquivo: ${file}, error: ${err}`);

                    const lines = data.split('\n');
                    const fullName = lines[0].substring(39, 88).trim();

                    names.push(fullName); 
                    writeToFile(names); 
                });
            }
        });
    });
}

readFilesFromFolder();