# Express (Node.js Web Framework)

Express is a popular web framework for Node.js. It provides a range of features for building web applications and APIs, including routing, middleware, and templating.

### Installation

To install Express, you can use the following command:

```bash
npm install express
```

### Basic Usage

Here's an example of how to use Express:

```javascript
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(8080, function() {
  console.log('Example app listening on port 8080!');
});
```

In this example, we create a new Express application using `express()`. We then define a route for the root path using `app.get('/', ...)`. When a request is made to this route, we send the response 'Hello World!' using `res.send()`. Finally, we start the server listening on port 8080 using `app.listen()`.

### Routing

Express provides a flexible routing system that allows you to handle HTTP requests with different methods (e.g. GET, POST) and URL patterns. Here's an example:

```javascript
app.get('/users', function(req, res) {
  // Handle GET request for /users
});

app.post('/users', function(req, res) {
  // Handle POST request for /users
});

app.put('/users/:id', function(req, res) {
  // Handle PUT request for /users/:id
});

app.delete('/users/:id', function(req, res) {
  // Handle DELETE request for /users/:id
});
```

In this example, we define routes for handling HTTP requests with different methods (GET, POST, PUT, DELETE) and URL patterns. Each route corresponds to a function that is executed when the corresponding request is received.
