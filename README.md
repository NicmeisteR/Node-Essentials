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

## Setup
Run:
> npm install node-essentials

And include it in your app:
```javascript
const node = require('node-essentials');
```
<br/>

# Current Tools

<details>
<summary><b>writeToFile</b> - Writes anything passed through to storage as any file.</summary>
<br/>
<p>The below sample is used to print out json data from an API call. </p>
<p>

```javascript 
node.writeToFile("tests", "writeToFile", "json", JSON.stringify(data;
```

</p>

</details>

<br/>

<details>
<summary><b>readAllFiles</b> - Read all the files from the specified directory.</summary>
<br/>
<p>The below sample is used to print out json data from an API call. </p>
<p>

```javascript 
node.readAllFiles("folder");
```

</p>

</details>

<br/>

<details>
<summary><b>express</b> - Set-up a express-js server on the specified port and directory.</summary>
<br/>
<p>The "__dirname" is the relative path for the directory used by node.
This would serve the current root directory.</p>
<p>

```javascript
node.express(3000, __dirname);
```

</p>

</details>

<br/>

<details>
<summary><b>get</b> - Simple REST "get" request.</summary>
<br/>
<p>The "__dirname" is the relative path for the directory used by node.
This would serve the current root directory.</p>
<p>

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

</p>

</details>

<br/>

## Author

Node Essentials is Developed and Maintained by **[Nicolaas Nel](https://github.com/NicmeisteR)**

[![Facebook](https://img.shields.io/badge/facebook-%231877F2.svg?&style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/nicmstr) [![Twitter](https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/NicmeistaR) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/Nicolaas-Nel) [![YouTube](https://img.shields.io/badge/youtube-%23FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/c/NicmeisteR) [![DEV](https://img.shields.io/badge/DEV-%23000000.svg?&style=for-the-badge&logo=dev.to&logoColor=white)](https://dev.to/NicmeisteR)

---

Made with 💙 and ☕ by Nicolaas Nel.