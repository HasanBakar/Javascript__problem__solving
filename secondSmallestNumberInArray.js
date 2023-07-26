/*
Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

*/

const numbers = [1, 2, 3, 3, 3, 4, 5, 5, 5];
function secondSmallestNumberFinder(numbersArray) {
   let smallestNumber = Math.min(...numbersArray); 
   let exceptSmallestNumber = numbersArray.filter(
     (item) => smallestNumber < item
   );
   let secondSmallestNumber = Math.min(...exceptSmallestNumber);
   return secondSmallestNumber;
}

console.log("Second smallest Number of array: ",secondSmallestNumberFinder(numbers));