import fs from 'fs';

function writeToFile(folder, fileName, extension, data) {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
    fs.writeFile(`${folder}/${fileName}.${extension}`, data, (err) => {
        // Throw Error in Case of issues.
        if (err) throw err;
    });
};


/**
 * Read all the files from the specified folder.
 *
 * @param {string} folder
 */
 function readAllFiles(folder){
    // Read from any file name in the specified folder.
    fs.readdir(folder, (err, files) => {
        files.forEach(file => {
            // Read the file from the specified folder into memory
            eval(fs.readFileSync(`${folder}/${file}`)+'');
        });
    })
}

export { writeToFile, readAllFiles };