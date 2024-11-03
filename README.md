# All About JavaScript

JavaScript is a dynamic, weakly-typed, and single-threaded language, compiled at runtime. Widely used for both client-side and server-side development, it is known for its flexibility and powerful ecosystem.

## 🧠 How JavaScript Works

JavaScript code is processed by a JavaScript Engine which operates in three main steps:

Parsing - Reads and understands the code.
Compilation - Converts the code into machine code.
Execution - Runs the machine code to produce output.

**_ 📝 Including JavaScript in HTML _**
There are several ways to include JavaScript within an HTML file:

1. Inline JavaScript
   Write JavaScript code directly inside <script> tags in the <head> section:

<head>
  <script>
    alert("This Works!");
  </script>
</head>

2. External JavaScript
   Use the src attribute of the <script> tag to link to an external JavaScript file:

<script src="assets/scripts/app.js"></script>

Note: Placing this script in the <head> section can block the rendering of the page until the script finishes executing.

3. Deferred Loading (Recommended)
   To avoid blocking page load, place the <script> tag just before the closing </body> tag. This allows the script to load after all HTML content has been rendered:

<body>
  <!-- HTML content -->
  <script src="assets/scripts/app.js"></script>
</body>

### 📦 Variables in JavaScript

Variables are containers used to store data values. JavaScript supports multiple ways to define variables:

- let
  The let keyword declares a variable whose value can be changed.

let username = "Shashi";
username = "Shashidhar"; // Reassignment is allowed
const
The const keyword declares a variable with a fixed value that cannot be changed.

const age = 24;
// age = 25; // This would throw an error since `age` is a constant

- Naming Conventions
  Use meaningful names for variables.
  Follow camelCase for readability (e.g., userName, totalScore).
  Avoid starting variable names with numbers or special characters.

### 🔧 Operators in JavaScript

Operators are symbols or keywords that perform operations on values. JavaScript includes several types of operators:

Arithmetic Operators
Perform mathematical operations.

Operator Example Description

- 5 + 3 Addition

- 5 - 3 Subtraction

- 5 \* 3 Multiplication

- / 5 / 3 Division

- % 5 % 3 Modulus (remainder)
- ** 5 ** 3 Exponentiation (power)

**_ Assignment Operators _**
Assign values to variables.

let count = 10;
count += 5; // Equivalent to count = count + 5
Comparison Operators
Compare two values and return a Boolean (true or false).

Operator Example Description

- == 5 == '5' Equality (loose comparison)
- === 5 === '5' Strict equality (value & type)
- != 5 != '5' Inequality
- !== 5 !== '5' Strict inequality
- < 5 < 3 Less than

>     5 > 3	Greater than
>
> <= 5 <= 3 Less than or equal to
> = 5 >= 3 Greater than or equal to
> Logical Operators
> Combine or negate Boolean expressions.

Operator Description Example
&& Logical AND (age >= 18 && age < 65)
`		`
! Logical NOT !(isLoggedIn)
⚡️ Additional Notes
Weak Typing: JavaScript is weakly typed, meaning variable types are determined at runtime. It allows implicit type conversions, which can sometimes lead to unexpected behavior.
Dynamic Nature: JavaScript is dynamic, so variables can be reassigned to values of different types without explicit declarations.

### 📊 Data Types in JavaScript

JavaScript provides several fundamental data types that you can use to store and manipulate different kinds of data. Here are some of the primary ones:

1. Numbers
   The Number data type is used for both integer and floating-point values.

let age = 25; // Integer
let price = 19.99; // Floating-point number

2. Strings
   The String data type is used to represent text. Strings can be defined using single quotes ('...'), double quotes ("..."), or backticks (`...`).

> let greeting = 'Hello';
> let name = "Shashi";
> let message = `Welcome, ${name}!`; // Template literals (using backticks)
> Tip: Use backticks (`...`) for template literals when you need to include variables or expressions >directly within the string using ${...} syntax.

3. Booleans
   The Boolean data type has two possible values: true or false. Booleans are commonly used for conditional statements.

> let isAvailable = true;
> let hasAccess = false;

4. Objects
   An Object is a complex data type that allows you to store collections of properties, where each property has a key-value pair. Objects are useful for representing real-world entities with multiple attributes.

> let person = {
> name: "Shashi",
> age: 25,
> isStudent: true
> };
> console.log(person.name); // Output: Shashi

5. Arrays
   An Array is a special type of object that allows you to store multiple values in a single variable. Each value (or "element") in an array has an index, starting from 0.

> let colors = ["red", "green", "blue"];
> console.log(colors[0]); // Output: red

6. undefined
   The undefined data type represents a variable that has been declared but not assigned a value. Any uninitialized variable has the value undefined by default.

> let score;
> console.log(score); // Output: undefined

7. null
   The null data type represents an intentional absence of any value. Unlike undefined, null is assigned by the programmer to indicate "no value."

> let response = null;
> console.log(response); // Output: null

8. NaN (Not-a-Number)
   NaN is a special value that represents an invalid number or an operation that doesn’t result in a valid number, like dividing a string by a number.

> let invalidOperation = "hello" / 2;
> console.log(invalidOperation); // Output: NaN
>
> > Note: NaN is of type number, even though it signifies an invalid numeric result.

### 🔧 Functions in JavaScript

- Functions are reusable blocks of code designed to perform specific tasks. They allow for modular, organized, and interactive code. Here’s an overview of how to define and use functions in JavaScript.

#### Defining and Calling Functions

- To use a function, you first define it, then call it to execute its code. Functions can accept parameters, but this is optional. Here’s an example:

> function addNumbers(num1, num2) {
> const result = num1 + num2;
> console.log(result);
> }

// Calling the function
addNumbers(2, 3); // Output: 5

**_Return Values in Functions_**
Some functions are designed to return a value, which can then be stored in a variable or used elsewhere in the program.

> function addNumbers(num1, num2) {
> return num1 + num2;
> }

> const value = addNumbers(2, 3); // Output: 5
> console.log(value); // Output: 5

**_Arrow Functions_**
Arrow functions provide a shorter syntax for writing functions, introduced in ES6. They’re particularly useful for anonymous functions and are often used in callbacks.

> const addNumbers = (num1, num2) => {
> return num1 + num2;
> };

// Simplified version when the function contains a single expression

> const addNumbers = (num1, num2) => num1 + num2;
> console.log(addNumbers(2, 3)); // Output: 5
> Note: Arrow functions inherit the this value from their surrounding context, which can be beneficial for handling scope in certain situations.

**_Latest Way: Function Expressions_**
Function expressions allow functions to be assigned to variables, enabling more flexibility when managing and passing functions as values.

> const greet = function(name) {
> return `Hello, ${name}!`;
> };
> console.log(greet("Shashi")); // Output: Hello, Shashi!

#### Scope in JavaScript Functions

- JavaScript uses scope to control variable accessibility. There are two main types of scope:

1. Global Scope: Variables defined outside of functions are accessible from anywhere in the code.
2. Local Scope (or Block Scope): Variables defined within a function or block { } are only accessible within that block.

> let globalVar = "I am global!";
>
> function myFunction() {
> let localVar = "I am local!";
> console.log(globalVar); // Accessible
> console.log(localVar); // Accessible
> }

> myFunction();
> console.log(globalVar); // Accessible
> console.log(localVar); // Error: localVar is not defined

- Imagine you’re putting items together:

- If you have a 3 and a "3" and try to add them with a + sign, JavaScript thinks, “Oh, you want to combine these like words!” So, you get "33"—a combined string, not a real sum.

- But if you use - or \* or /, JavaScript thinks, “This must be math!” So, it treats "3" like a number:

- 3 - "3" gives 0
- 3 \* "3" gives 9
- 3 / "3" gives 1
- Only + tries to combine instead of adding, making it a string.

## **_🔍 Built-in Methods in JavaScript_**

- JavaScript provides several built-in methods that help with common tasks like type conversion and data manipulation. Here are a few essential ones:

1. parseInt()
   Converts a string to an integer. If the string contains non-numeric characters after the number, it ignores them.

> const integer = parseInt("42"); // Output: 42
> const withText = parseInt("42px"); // Output: 42

2. parseFloat()

- Converts a string to a decimal (floating-point number). Useful when you need to parse numbers with decimal points.

> const decimal = parseFloat("3.14"); // Output: 3.14
> const withText = parseFloat("3.14px"); // Output: 3.14

3. toString()

- Converts numbers, arrays, or other data types into a string.

> const num = 42;
> const numString = num.toString(); // Output: "42"
>
> const arr = [1, 2, 3];
> const arrString = arr.toString(); // Output: "1,2,3"
>
> > Tip: These methods are particularly useful for handling type conversion when dealing with user input or data transformations.
