/*
 Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
*/


let numbers1 = [2, -3, 4, 5, 4, -7, 1, 9, 10];
let numbers2 = [2, -5, 10, -3, 7]; 


function SumOfArrayPositiveElement(numbersArray) {
  let sum = numbersArray.filter((item) => item > 0).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  
  return sum;
}
console.log(
  "The sum of all positive numbers of the array: ",
  SumOfArrayPositiveElement(numbers1)
);
console.log(
  "The sum of all positive numbers of the array: ",
  SumOfArrayPositiveElement(numbers2)
);
