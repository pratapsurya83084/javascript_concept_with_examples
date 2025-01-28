
/*Lexical scope (also known as static scope) is the
 concept in JavaScript (and many other programming languages)
 where the scope of a variable is determined by its position
 in the source code, and nested functions have access
 to variables declared in their parent functions.*/

function outerFunction() {
    const outerVariable = "I am from the outer function";
  
    function innerFunction() {
      console.log(outerVariable); // Accesses outerVariable from its lexical scope
    }
  innerFunction(); // This will work because innerFunction can access outerVariable
  
}
outerFunction(); // Output: "I am from the outer function"
  