let node = require("../src/app");

let data = {
    "value": "This is a Test Message. use 'git tag', then 'git push origin {tagnum}"
};
    
node.writeToFile("tests", "writeToFile", "json", JSON.stringify(data));

node.express(3000, __dirname);