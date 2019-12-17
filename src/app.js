const fs = require('fs');
const express = require('express');
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

exports.express = function (port, directory){
    port = port || 3000;
    express()
      .use(express.static(directory + '/'))
      .listen(port, () => console.log(`Listening on ${ port }`));
};