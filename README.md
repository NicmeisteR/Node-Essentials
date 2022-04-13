# Node-Essentials
A node toolkit for doing async api calls, writing to file system, starting up express-js servers and more coming soon.

![Issues](https://img.shields.io/github/issues/NicmeisteR/Node-Essentials?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/NicmeisteR/Node-Essentials?style=for-the-badge)
![Stars](https://img.shields.io/github/stars/NicmeisteR/Node-Essentials?style=for-the-badge)
![Size](https://img.shields.io/github/repo-size/NicmeisteR/Node-Essentials?color=green&style=for-the-badge) 
![NPM](https://img.shields.io/npm/dm/node-essentials?color=red&style=for-the-badge)
![Tweet](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2FNicmeisteR%2FNode-Essentials?style=for-the-badge)

## Community 
[![Community](https://discordapp.com/api/guilds/514169903196930050/widget.png?style=banner2)](https://discord.gg/zdqWsRB)

## Donate, Support or Fund

If you love this project please consider donating or support the development by means of coffee. You may also fund this project to maintain active and close more issues. Just a cup of coffee is enough to appreciate our hardwork.

[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=for-the-badge)](https://paypal.me/NicolaasDev)
[![Support](https://img.shields.io/badge/Support-Buy%20Me%20A%20Coffee-orange.svg?style=for-the-badge)](https://Ko-fi.com/nicmeister)

------------------

## Setup
Run:
```cmd
npm install node-essentials
```

And include it in your app:
```javascript
const node = require('node-essentials');
```

or

```javascript
import * as node from 'node-essentials';
```
<br/>

------------------

# Methods
* [http](#http) - REST Requests.
    * [get](#get) - Simple REST "GET" request.
    * [post](#post) - Simple REST "POST" request.
    * [put](#put) - Simple REST "PUT" request.
    * [delete](#delete) - Simple REST "DELETE" request.

* [helpers](#helpers) - Helper functions.
    * [distinct](#distinct) - Return a Distinct array.
    <!-- * [groupBy](#groupBy) -->

* [server](#server) - Express server.
    * [start](#start) - Set-up a express-js server on the specified port and directory.

* [fileManager](#fileManager) - Manage files.
    * [writeToFile](#writeToFile) - Writes anything passed through to storage as any file.
    <!-- * [readAllFiles](#readAllFiles) - Read all the files from the specified directory. -->


## <a id="http">http</a>

### <a id="get">Simple Get</a>
```typescript
executeGet(url: string, options?: any): Promise<any>
 ```
 Implementation:
```javascript
import http from 'node-essentials';

async function getData() {
    const data = await http.executeGet("https://my-json-server.typicode.com/typicode/demo/db").then();
    console.log(data); 
}
```
Response:
```json
{
  posts: [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' }
  ],
  comments: [
    { id: 1, body: 'some comment', postId: 1 },
    { id: 2, body: 'some comment', postId: 1 }
  ],
  profile: { name: 'typicode' }
}
```
### <a id="post">Simple Post</a>
 ```typescript
executePost(url: string, options?: any): Promise<any>
 ```
  Implementation:
```javascript
import http from 'node-essentials';

async function postData() {
    const data = await http.executePost("https://my-json-server.typicode.com/typicode/demo/posts", {
        body: {
            "id": 4,
            "title": "Post 4"
        }
    }).then();
    console.log(data); 
}
```
Response:
```json
{
    id: 4
}
```
### <a id="put">Simple Put</a>

 ```typescript
executePut(url: string, options?: any): Promise<any>
 ```
   Implementation:
```javascript
import http from 'node-essentials';

async function putData() {
    const data = await http.executePut("https://my-json-server.typicode.com/typicode/demo/posts", {
        body: {
            "id": 4,
            "title": "Post 4"
        }
    }).then();
    console.log(data); 
}
```
Response:
```json
{
    id: 4
}
```
### <a id="delete">Simple Delete</a>

 ```typescript
executePut(url: string, options?: any): Promise<any>
 ```
   Implementation:
```javascript
import http from 'node-essentials';

async function deleteData() {
    const data = await http.executeDelete("https://my-json-server.typicode.com/typicode/demo/posts", {
        body: {
            "id": 4,
            "title": "Post 4"
        }
    }).then();
    console.log(data); 
}
```
Response:
```json
{
    id: null
}
```



## <a id="helpers">helpers</a>

### <a id="distinct">Distinct</a>
```typescript
distinct(array: Array[any]);
 ```
 Implementation:
```typescript
import * as node from 'node-essentials';

const nonDistinct = [1,1,1,2,3];

function getDistinct(){
    const distinct = node.helpers.distinct(nonDistinct);
    console.log(distinct);
}
 ```
Response:
```javascript
[1,2,3]
```

## <a id="server">server</a>

### <a id="start">Start</a>
```typescript
start(port: number, directory: string);
 ```
  Implementation:
```typescript
import server from 'node-essentials';

server.start(3000, __dirname) // The "__dirname" is the relative path for the directory used by node. This would serve the current root directory.
```
Response:
```cmd
Listening on 3000
```


## <a id="fileManager">fileManager</a>

### <a id="writeToFile">Write To File</a>
```typescript
writeToFile(folder: string, fileName: string, extension: string, data: any);
 ```
  Implementation:
```typescript
import fileManager from 'node-essentials';

const data = {
    sample: "Sample Data"
}

fileManager.writeToFile("./", "fileName", "json", JSON.stringify(data));
```

<!-- ### <a id="readAllFiles">Read All Files</a>
```typescript
readAllFiles(folder: string);
 ```
  Implementation:
```typescript
import fileManager from 'node-essentials';

const data = {
    sample: "Sample Data"
}

fileManager.readAllFiles("./");
```
Response:
```

``` -->

## Author

Node Essentials is Developed and Maintained by **[Nicolaas Nel](https://github.com/NicmeisteR)**

[![Facebook](https://img.shields.io/badge/facebook-%231877F2.svg?&style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/nicmstr) [![Twitter](https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/NicmeistaR) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/Nicolaas-Nel) [![YouTube](https://img.shields.io/badge/youtube-%23FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/c/NicmeisteR) [![DEV](https://img.shields.io/badge/DEV-%23000000.svg?&style=for-the-badge&logo=dev.to&logoColor=white)](https://dev.to/NicmeisteR)

---

Made with 💙 and ☕ by Nicolaas Nel.