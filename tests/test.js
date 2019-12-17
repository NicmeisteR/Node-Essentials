let node = require("../src/app");

let data = {
    "value": "This is a Test Message. Release"
};
    
node.writeToFile("tests", "writeToFile", "json", JSON.stringify(data));
