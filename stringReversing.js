/*
 Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
*/

let str1 = "I am a student of the programming hero online learning platform!";
let str2 = "hello world";


function stringReverser(stringValue) {
    let reverseString = "";

    for (let i = stringValue.length - 1; i >= 0; i--) {
      reverseString += stringValue[i];
    }
    return reverseString;
}

console.log("Given string: ", str1);
console.log("Reverse format string: ", stringReverser(str1));

console.log("Given string: ", str2);
console.log("Reverse format string: ", stringReverser(str2));