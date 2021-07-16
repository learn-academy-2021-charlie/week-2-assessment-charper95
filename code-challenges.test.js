// ASSESSMENT 2: Coding practical questions with Jest

const { expect } = require("@jest/globals")
const { describe } = require("yargs")

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// Create a function called divThree
// That takes a number as an argument for the input
const divThree = (number) => {
// On the condition if the number is evenly divisble by three
    if (number % 3 === 0){
// Return an interpolated string "number is divisible by three"
        return `${number} is divisible by three`
    } else {
// or not
        return `${number} is not divisible by three`
    }
}

// a) Create a test with expect statements for each of the variables provided.

// Describe the name of the function - divThree
describe("divThree", () => {
// Test what the function does - decides if a given number is evenly divisble by three or not
    it("decides if a given number is evenly divisble by three or not", () => {
// Expect the output of the function to be equal to the correct output - output of divThree to equal `${number} is divisible by three` or `${number} is not divisible by three`
        expect(divThree(true)).toEqual(`${number} is divisible by three`)
        expect(divThree(false)).toEqual(`${number} is not divisible by three`)
    }
}


var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"



// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]



// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2



// b) Create the function that makes the test pass.
