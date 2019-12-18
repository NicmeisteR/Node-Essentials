# Node-Essentials
A node toolkit for doing async api calls, writing to file system, starting up express-js servers and more coming soon.

## Setup
Run:
> npm install node-essentials

And include it in your app:
```javascript
let node = require('node-essentials');
```
<br/>

# Current Tools
### <b>writeToFile</b> - Writes anything passed through to storage as any file.  
The below sample is used to print out json data from an API call.
```javascript
    node.writeToFile("tests", "writeToFile", "json", JSON.stringify(data));
```
<br/>

### <b>express</b> - Set-up a express-js server on the specified port and directory.
The "__dirname" is the relative path for the directory used by node.
This would serve the current root directory.
```javascript
    node.express(3000, __dirname);
```
<br/>

### <b>get</b> - Simple REST "get" request.
```javascript
    async function get() {
    try {
        test = await node.get(
            "https://apiurlhere.com/",["api key desc", "api key value"])
            .then(console.log("done"));
    }
    finally {
        console.log(test);
    }
};
```