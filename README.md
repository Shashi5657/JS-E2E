All About JavaScript
JavaScript is a dynamic, weakly-typed, and single-threaded language, compiled at runtime. Widely used for both client-side and server-side development, it is known for its flexibility and powerful ecosystem.

🧠 How JavaScript Works
JavaScript code is processed by a JavaScript Engine which operates in three main steps:

Parsing - Reads and understands the code.
Compilation - Converts the code into machine code.
Execution - Runs the machine code to produce output.
📝 Including JavaScript in HTML
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

📦 Variables in JavaScript
Variables are containers used to store data values. JavaScript supports multiple ways to define variables:

let
The let keyword declares a variable whose value can be changed.

let username = "Shashi";
username = "Shashidhar"; // Reassignment is allowed
const
The const keyword declares a variable with a fixed value that cannot be changed.

const age = 24;
// age = 25; // This would throw an error since `age` is a constant
Naming Conventions
Use meaningful names for variables.
Follow camelCase for readability (e.g., userName, totalScore).
Avoid starting variable names with numbers or special characters.

🔧 Operators in JavaScript
Operators are symbols or keywords that perform operations on values. JavaScript includes several types of operators:

Arithmetic Operators
Perform mathematical operations.

Operator	Example	Description
+	5 + 3	Addition
-	5 - 3	Subtraction
*	5 * 3	Multiplication
/	5 / 3	Division
%	5 % 3	Modulus (remainder)
**	5 ** 3	Exponentiation (power)
Assignment Operators
Assign values to variables.

let count = 10;
count += 5; // Equivalent to count = count + 5
Comparison Operators
Compare two values and return a Boolean (true or false).

Operator	Example	Description
==	5 == '5'	Equality (loose comparison)
===	5 === '5'	Strict equality (value & type)
!=	5 != '5'	Inequality
!==	5 !== '5'	Strict inequality
<	5 < 3	Less than
>	5 > 3	Greater than
<=	5 <= 3	Less than or equal to
>=	5 >= 3	Greater than or equal to
Logical Operators
Combine or negate Boolean expressions.

Operator	Description	Example
&&	Logical AND	(age >= 18 && age < 65)
`		`
!	Logical NOT	!(isLoggedIn)
⚡️ Additional Notes
Weak Typing: JavaScript is weakly typed, meaning variable types are determined at runtime. It allows implicit type conversions, which can sometimes lead to unexpected behavior.
Dynamic Nature: JavaScript is dynamic, so variables can be reassigned to values of different types without explicit declarations.
