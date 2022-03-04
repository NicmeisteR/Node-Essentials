// let node = require("../src/index.mjs");
import * as node from '../src/index.mjs';

// let data = {
//     "value": "This is a Test Message. use 'git tag', then 'git push origin {tagnum}"
// };
    
// node.writeToFile("tests", "writeToFile", "json", JSON.stringify(data));

// node.express(3000, __dirname);

async function getData() {
    const data = await node.http.executeGet("https://my-json-server.typicode.com/typicode/demo/db").then();
    console.log(data);
}

async function postData() {
    const data = await node.http.executePost("https://my-json-server.typicode.com/typicode/demo/posts", {
        body: {
            "id": 4,
            "title": "Post 4"
        }
    }).then();
    console.log(data); 
}

function getDistinct(){
    const nonDistinct = [1,1,1,2,3];
    const distinct = node.helpers.distinct(nonDistinct);
    console.log(distinct);
}

// async function writeToFile(){
//      const data = await getData();
//      node.fileManager.writeToFile("tests", "writeToFile", "json", JSON.stringify(data));
// }

// getData()
getDistinct()
// node.server.start(3000, './');
node.fileManager.readAllFiles('./tests');