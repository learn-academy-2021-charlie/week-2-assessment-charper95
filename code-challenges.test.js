// ASSESSMENT 2: Coding practical questions with Jest

// const { expect } = require("@jest/globals")
// const { describe } = require("yargs")

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

// a) Create a test with expect statements for each of the variables provided.

// Describe the name of the function - divThree
describe("divThree", () => {
// Test what the function does - decides if a given number is evenly divisble by three or not
    it("decides if a given number is evenly divisble by three or not", () => {
// Expect the output of the function to be equal to the correct output - output of divThree to equal `${number} is divisible by three` or `${number} is not divisible by three`
        expect(divThree(num1)).toEqual("15 is divisible by three")
        expect(divThree(num2)).toEqual("0 is divisible by three")
        expect(divThree(num3)).toEqual("-7 is not divisible by three")
    })
})

// b) Create the function that makes the test pass.

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

var num1 = 15
console.log(divThree(num1))
// Expected output: "15 is divisible by three"

var num2 = 0
console.log(divThree(num2))
// Expected output: "0 is divisible by three"

var num3 = -7
console.log(divThree(num3))
// Expected output: "-7 is not divisible by three"

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// Describe the name of the function - capitalArray
describe("capitalArray", () => {
// Test what the function does - returns an array with all the words capitalized
    it("returns an array with all the words capitalized", () => {
// Expect the output of the function to be equal to the correct output - output of capitalArray to equal an array with all strings capitalized
        expect(capitalArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// b) Create the function that makes the test pass.

// Create a function called capitalArray
// That takes an array as an argument for the input
const capitalArray = (array) => {
// That iterates through the array and returns a new array of the same length using .map() method
    return array.map(value =>{
// Each element of the new array contains the index 0 of each value capitalized concatenated with the substring that starts at index 1 of each value.
        return value[0].toUpperCase() + value.substring(1)
    })
}

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
console.log(capitalArray(randomNouns1))
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
console.log(capitalArray(randomNouns2))
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// Describe the name of the function - firstVowelIndex
describe("firstVowelIndex", () => {
// Test what the function does - logs the index of the first vowel in a given string
        it("logs the index of the first vowel in a given string", () => {
// Expect the output of the function to be equal to the correct output - output of firstVowelIndex to equal the index of the first vowel of the string
            expect(firstVowelIndex(vowelTester1)).toEqual(1)
            expect(firstVowelIndex(vowelTester2)).toEqual(0)
            expect(firstVowelIndex(vowelTester3)).toEqual(2)
        })
    })

// b) Create the function that makes the test pass.

// Create a function called firstVowelIndex
// That takes a string as an argument for the input
const firstVowelIndex = (string) => {
// That iterates throught the string
    for (let i = 0; i < string.length; i++) {
// If the character at the index is a vowel
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
// Return the index of the first found vowel and stop
        return i
        }
    }
}

var vowelTester1 = "learn"
console.log(firstVowelIndex(vowelTester1))
// Expected output: 1
var vowelTester2 = "academy"
console.log(firstVowelIndex(vowelTester2))
// Expected output: 0
var vowelTester3 = "challenge"
console.log(firstVowelIndex(vowelTester3))
// Expected output: 2