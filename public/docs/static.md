# Serving HTML in Express

Let's cover how to serve static files in Express and the security considerations you need to keep in mind.

### Serving Static Files in Express

To serve static files, such as HTML, CSS, and JavaScript files, in Express, you can use the built-in middleware function called `express.static`. Here's an example of how to use it:

```javascript
const express = require('express');
const app = express();

app.use(express.static('public'));
```

The `express.static` middleware function will automatically serve any file in the specified directory when a matching request is made. This makes it easy to serve static files like HTML pages.

### Security reasons for serving static files

We use static files because we only want files in a specific directory to be able to be accessed by the client making a request.