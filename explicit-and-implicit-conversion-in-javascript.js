/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

//I converted the string to a number 
let result = Number("5") - 2;
console.log("The result is: " + result);

//added a condition to isValid
let isValid = Boolean("false");
if (isValid ="false") {
    console.log("This is valid!");
}

//Utilizing the same as above I converted age to number to make equasion work
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);


//Implicit type example:
let amount = 35;
console.log(`Timmy has ${amount} apples.`);
// Side note for me later: remember ` instead of ' for the conversion here. 


//Explicit type example
console.log(String(0914))