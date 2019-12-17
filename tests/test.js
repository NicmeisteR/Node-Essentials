let node = require("../src/app");

let data = {
    "value": "nico"
};
    
node.writeToFile("tests", "writeToFile", "json", JSON.stringify(data));
