# Working with Time in JavaScript

In JavaScript, you can work with time by using the built-in `Date` object and the `setTimeout` function. In this document, we'll cover how to work with time in JavaScript, including examples of using both of these tools.

## Using the Date Object

The `Date` object in JavaScript represents a specific moment in time. You can create a new `Date` object by calling the constructor with no arguments, which will create a `Date` object representing the current time:

```javascript
const now = new Date();
console.log(now); // Output: [current date and time]
```

You can also create a new `Date` object by passing in a specific date and time as a string:

```javascript
const specificDate = new Date('2022-12-31T23:59:59');
console.log(specificDate); // Output: Sun Jan 01 2023 00:59:59 GMT+0100 (Central European Standard Time)
```

Once you have a `Date` object, you can get various properties such as the year, month, day, hour, minute, second, and millisecond:

```javascript
const now = new Date();
console.log(now.getFullYear()); // Output: [current year]
console.log(now.getMonth()); // Output: [current month]
console.log(now.getDate()); // Output: [current day]
console.log(now.getHours()); // Output: [current hour]
console.log(now.getMinutes()); // Output: [current minute]
console.log(now.getSeconds()); // Output: [current second]
console.log(now.getMilliseconds()); // Output: [current millisecond]
```

You can also perform various operations on `Date` objects, such as comparing them or adding and subtracting time:

```javascript
const now = new Date();
const futureDate = new Date('2022-12-31T23:59:59');
console.log(now < futureDate); // Output: true

const newDate = new Date();
newDate.setFullYear(newDate.getFullYear() + 1);
console.log(newDate); // Output: [current date and time, but one year in the future]
```

## Using setTimeout

The `setTimeout` function in JavaScript allows you to execute a function after a specified amount of time has passed. Here's an example:

```javascript
function sayHello() {
  console.log('Hello!');
}

setTimeout(sayHello, 1000); // Output: 'Hello!' after 1 second
```

In this example, we define a function called `sayHello` that logs the message `'Hello!'` to the console. We then call the `setTimeout` function with a reference to the `sayHello` function as the first argument, and the amount of time to wait in milliseconds as the second argument. After 1 second has passed, the `sayHello` function will be executed and the message `'Hello!'` will be logged to the console.

The `setTimeout` function can also be used to execute an anonymous function:

```javascript
setTimeout(() => {
  console.log('Hello!');
}, 1000); // Output: 'Hello!' after 1 second
```

In this example, we define an anonymous function that logs the message `'Hello!'` to the console. We then pass this anonymous function as the first argument to the `setTimeout` function, along with the amount of time to wait in milliseconds.
