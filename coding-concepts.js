// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.split(""))

// a) Your answer: This will log an array with elements of each character of the string "Charlie 2021"
// b) Verify and explain: My initial answer was correct. The .split() method was applied to the string "Charlie 2021" assigned to the variable called "cohort". The .split() method takes an input of a string and outputs an array with a determined substring of the string inputed. To output an array with each character as a single element of the new array, you pass an empty string as an argument of .split().


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: This will log a string that says "Hello, LEARN Student".
// b) Verify and explain: My initial answer was incorrect. The console logged an output of undefined. The reason that the ouput was undefined was becasue the expression interpolation was not returned. In order for a specific value to be returned to the called function, you need a return statement before the expression with the value.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
console.log(multBy2)

// a) Your answer: This will log a new array with the values of the multBy2 array multiplied by 2.
// b) Verify and explain: My initial answer was correct. The .map() method takes in an array, iterates through the entire length of the array, and returns a new array with the same length. The .map() method is a higher order function, which means it takes another function as it's argument. In this example the .map() method takes an arrow function with parameter of value. The logic of the arrow function multiplies the value of each element of the array multBy2 by 2, and then the .map() method returns a new array with the values that were multiplied by 2. Here the .map() function is being applied to a specific array called multBy2. .map() is a method and can be applied to an array with dot notation because an array is an object. 


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer: This will log a new array with only the even values of the oddsOnly array.
// b) Verify and explain: My initial answer was correct. Despite the name of the array being called oddsOnly, the logic of the arrow function passed into the argument of the .filter() method will make the .filter method output only the even values. The .filter() method takes in an array, iterates through the entire length of the array, and returns a new array with only the values of the array that meet a certain condition. If an evaluation meets a certain condition it is truthy, thus the .filter() method returns the values that are truthy. The .filter() method is a higher order function, which means it takes another function as it's argument. In this example the .filter() method takes an arrow function with parameter of value. The logic of the arrow function evaluates if the value of the array oddsOnly is even using the modulo operator, and then the .filter() method returns a new array with only the even values. Here the .filter() function is being applied to a specific array called oddsOnly. .filter() is a method and can be applied to an array with dot notation because an array is an object. 


// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
console.log(learnStudent)

// a) Your answer: This will log an object literal, which is a list of property name and value pairs. This will specifically log a Learn object literal with a list of student, cohort, and year properties and their associated values from the Learn class constructor.
// b) Verify and explain: My initial answer was correct. The console logged the content of the variable "learnStudent". The variable "learnStudent" was assigned the value of a new instance of the Learn class. The new instance of of the Learn class is an object. The console specifically logs the object literal of the Learn class, listing the properties and property values assigned inside the Learn class constructor function.
