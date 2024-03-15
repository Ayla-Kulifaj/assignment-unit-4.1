console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Test - should say "Hello, Jo!"', helloName('Jo'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber,secondNumber) {
  return firstNumber + secondNumber;
}
console.log('adding addNumbers with 7 & 7:', addNumbers(7, 7));
console.log('adding addNumbers with 3 & 7:', addNumbers(3, 7));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1,num2,num3) { 
  return num1 * num2 * num3;
}
console.log('multiplying the three numbers 2,3,7:  ', multiplyThree(2,3,7 ));
console.log('multiplying the three numbers 3,4,7:  ', multiplyThree(3,4,7 ));
///PSUEDO CODE  -- could also go about it in this manner
//function multiplyThree(num1,num2,num3) { 
 // console.log('In multiplyThree;', num1*num2*num3);
  //let answer=num1 * num2 * num3;
  //return answer
//}
//This is similar to the prime video


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('running to see if it is a postive number starting with 2:  ', isPositive(2));
console.log('running again with the number -7:  ',isPositive(-7));
console.log('running again with the number 0:  ', isPositive(0));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length>0){
    return array[array.length -1];
  }
  return undefined;
}
console.log(getLast([1,2,3]));
console.log('this empty list should return undefined: ', getLast([]));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value,array) {
  for(let i=0; i< array.length; i++){
    if (array[i]===value) {
      return true;
    }
  }
  return false;
}
console.log('is five in this array? ', find(5,[1,2,3,4,5,]));
console.log('is six in this array?', find(6,[1,2,3,4,5]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return string.startsWith(letter);
}
const letter= 'A';
const string= 'Alpha';
console.log('This is the string we are testing: ', string);
console.log('is the first letter B: ', isFirstLetter('B','Alpha'));
console.log('is the first letter A: ', isFirstLetter('A','Alpha'));
if (string[0]==='A'){           //an additonal way to check!
  console.log('It`s a match!');
}

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  for(let i=0; i<array.length; i++) {
    sum+=array[i];
  }
  return sum;
}
const testArray=[7,7,7];
console.log('7+7+7 equals: ', sumAll(testArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(numbers) {
 let positives=[];
 for(let i=0; i < numbers.length; i++) {
  if(numbers[i]>0) {
    positives.push(numbers[i]);
    }
  }
  return positives;
}
const numbers=[-7,-2,-3,0,3,2];
console.log('This how many elements are in the array & the elements in the array: ', (numbers));
console.log('These should list how many elements are postive in the array & return all the positives numbers in the array: ', allPositive(numbers));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

//Create a function that takes an array of numbers and return "Boom!" 
//if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

console.log("We are checking arrays for the number 7!") //writing a statement explaing the test being run.

function boomTest(list){  // creating a fuction named boomTest with the parameter/argument list
for (let element of list){ //making a for.. of loop go thru every element of the list
  if (String(element).includes('7')){ //turning the elements into strings so that it checks every index point so it will still "boom" even with a number like 27
    return "Boom!!"; // states that if it is true that there is a 7 detected and it will stop iterating/executing the array & return: "boom"
  }
 }
return "there is no 7 in the array!!"; //if it is false that there is no 7 present in the list it will return:  "there is no 7 in the array!!"
}

let number0=[2,4,5,7]; //first test with the variable number0s array 
console.log(number0); //showing array elements before testing it
console.log(boomTest(number0)); //calling the function with number0 array

let number1=[2,4,5,27]; // making sure the function is properly running and checking  every array string index point
console.log(number1); //showing array elements for number 1 before testing it
console.log(boomTest(number1)); //this should state/return:  "boom!!" if running properly

let number2=[2,4,5,23]; //an array named number2 with no 7 to make sure the test isnt faulty
console.log(number2); //showing number2 array elements before testing it.
console.log(boomTest(number2)); // calling function w/ variable number2 & if wrote properly it should state/return:  "there is no 7 in the array!!"
// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
