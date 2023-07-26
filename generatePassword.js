/*
Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
*/

function passwordGenerator(passwordLength) {
  if(passwordLength < 8){
    return "🎈🎈🎈Password length must be at least 8 characters🎀."
  }
  else{
    let password = "";
    let alphabetUpperCase =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alphabetLowerCase = "abcdefghijklmnopqrstuvwxyz";
    let digits = "0123456789";
    let specialCharacter = `!@#$%^&*()_-+=<>?/[]{}|'".`;
    let characters =
      alphabetUpperCase + alphabetLowerCase + digits + specialCharacter;
    let temp =
      alphabetUpperCase[Math.floor(Math.random() * alphabetUpperCase.length)] +
      alphabetLowerCase[Math.floor(Math.random() * alphabetLowerCase.length)] +
      digits[Math.floor(Math.random() * digits.length)] +
      specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
      password = temp;

    for (let i = 0; i < characters.length; i++) {
      if (password.length === passwordLength) {
        return password;
      }
      password += characters[Math.floor(Math.random() * characters.length)];
    }

    return password;
  }
}




console.log(passwordGenerator(2));
console.log(passwordGenerator(9));
console.log(passwordGenerator(12));