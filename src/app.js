const fs = require('fs');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

exports.writeToFile = function (folder, fileName, extension, data) {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
    fs.writeFile(`${folder}/${fileName}.${extension}`, data, (err) => {
        // Throw Error in Case of issues.
        if (err) throw err;
    });
};

exports.get = function (url, setRequestHeader) {

    var data = null;
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            return this.responseText;
        }
    });

    xhr.open("GET", url);
    xhr.setRequestHeader(setRequestHeader[0], setRequestHeader[1]);
    xhr.send(data);
};