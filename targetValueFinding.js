/*
Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.


sample input and output:  
🎈🎈Input: ([1, 3, 6, 8, 11, 15], 9) 
🎈🎈Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
*/

const numbers = [1, 3, 6, 8, 11, 15];

function targetValueFinder(sortedArray, target) {
    let result = '';
    sortedArray.reduce((pre, current) => {
      if (pre + current === target) {

        result = `[${sortedArray.indexOf(pre)}, ${sortedArray.indexOf(
          current
        )}] (numbers at indices ${sortedArray.indexOf(
          pre
        )} and ${sortedArray.indexOf(
          current
        )}: ${pre} + ${current} = ${target})`;
      }
      return current;
    });
    return result;
}

console.log(targetValueFinder(numbers, 9));