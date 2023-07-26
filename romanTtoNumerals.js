/*
Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

*/


function romanToInteger(romanNumber) {
    const romanNumeralValues = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let total = 0;

    for (let i = 0; i < romanNumber.length; i++) {
      const currentValue = romanNumeralValues[romanNumber[i]];
      const nextValue = romanNumeralValues[romanNumber[i + 1]] || 0;
      
      if (currentValue < nextValue) {
        total -= currentValue;
      } else {
        total += currentValue;
      }
    }
    return total;
}

console.log(romanToInteger("XXI")); 
console.log(romanToInteger("IX"));

