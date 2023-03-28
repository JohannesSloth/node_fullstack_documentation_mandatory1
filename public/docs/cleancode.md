# Clean Code and Why Following Code Conventions is a Good Idea

Writing clean code is important for several reasons. Clean code is easy to read, maintain, and understand, which makes it easier for others to work on your code. Following code conventions is a key aspect of writing clean code.

## Code Conventions

Code conventions are a set of guidelines for writing code in a consistent and readable way. By following code conventions, you make it easier for others to understand and work on your code.

Here are some common code conventions:

- Use meaningful variable and function names.

```javascript
// Bad
let x = 5;
function y(a, b) {
  return a + b;
}

// Good
let numberOfItems = 5;
function calculateSum(a, b) {
  return a + b;
}
```

- Use consistent indentation and spacing.

```javascript
// Bad
function test() {
let x=5;
console.log(x) ;
}

// Good
function test() {
  let x = 5;
  console.log(x);
}
```

- Limit line length.

```javascript
// Bad
function test() { let x = 1; let y = 2; let z = 3; console.log(x + y + z); }

// Good
function test() {
  let x = 1;
  let y = 2;
  let z = 3;
  console.log(x + y + z);
}
```

By following these code conventions, you can make your code more readable and maintainable. When your code is easy to read and understand, it's easier to find and fix bugs, add new features, and work with others.
