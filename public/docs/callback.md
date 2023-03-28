# Callback Functions in JavaScript

A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. Callback functions are commonly used in JavaScript for asynchronous programming.

### Creating a Callback Function

Here's an example of how to create a callback function:

```javascript
function myCallbackFunction() {
  console.log('Callback function has been called.');
}
```

### Passing a Callback Function as an Argument

Here's an example of how to pass a callback function as an argument:

```javascript
function myFunction(callback) {
  // Some code here...
  callback();
}

myFunction(myCallbackFunction);
```

In this example, `myCallbackFunction` is passed as an argument to `myFunction`. `myFunction` then executes the `callback` function.

### Using a Callback Function with Asynchronous Code

Callback functions are often used with asynchronous code to execute code after an asynchronous operation has completed. Here's an example: 

```javascript
function doSomethingAsync(callback) {
  setTimeout(function() {
    console.log('Async operation has completed.');
    callback();
  }, 2000);
}

function myCallbackFunction() {
  console.log('Callback function has been called.');
}

doSomethingAsync(myCallbackFunction);
```

In this example, `doSomethingAsync` simulates an asynchronous operation using `setTimeout`. When the operation has completed, it executes the `callback` function.
