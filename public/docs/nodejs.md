# Node.js and Running Files with It

Node.js is a JavaScript runtime built on the Chrome V8 JavaScript engine. It allows developers to run JavaScript code outside of a web browser, making it useful for server-side development, command-line tools, and more.

### Installing Node.js

To install Node.js, go to the official website at `https://nodejs.org` and download the appropriate version for your operating system.

### Running a File with Node.js

To run a JavaScript file with Node.js, navigate to the directory where the file is located using the command line, and then type the following command:

```bash
node <filename.js>
```

For example, if you have a file named `index.js`, you would run it with the following command:

```bash
node index.js
```

### Using Node.js Packages

Node.js also has a vast ecosystem of packages that can be installed and used in your projects. You can install packages using the `npm` (Node Package Manager) command-line tool. To install a package, navigate to your project directory in the command line, and then type the following command:

```bash
npm install <package-name>
```

For example, to install the popular `lodash` package, you would run the following command:

```bash
npm install lodash
```

You can then use the package in your project by requiring it at the top of your JavaScript file:

```javascript
const _ = require('lodash');
```

If you have `"type": "module"` in your `package.json` file, you can also import the package using the following syntax:

```javascript
import _ from "lodash";
```

These are the basics of using Node.js and running files with it, and using Node.js packages. With these skills, you can start building your own command-line tools and server-side applications.
