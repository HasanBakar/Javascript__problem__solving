/*
Write a JavaScript program to find the most frequent element in an array and return it. 
*/

const numArray = [3, 5, 2, 5, 3, 3, 1, 4, 5,5, 5, 5];

function mostFreElementFinder(numbers) {
    let mostFreElement;
    let maxCount = 0;
for (let i=0; i < numbers.length-1; i++ ) {
    
    let count = 0;
  for (let m of numbers) {
    if (numbers[i] === m) {
      count++;
    }
  }
  if (count > maxCount) {
    maxCount = count;
    mostFreElement = numbers[i];
    
  }
  
}
return mostFreElement;
}

console.log(mostFreElementFinder(numArray));

