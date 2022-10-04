// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "~!@#$%^&*()_+=<>,.?/";
var passNumber = "1234567890";
var lengthPrompt = prompt("How long would you like your password to be?");
var upperCasePrompt = confirm("Would you like upper case letters?");
var lowerCasePrompt = confirm("Would you like lower case letters?");
var specialPrompt = confirm("Would you like special characters?");
var numberPrompt = confirm("Would you like numbers?");
var result = "";
console.log(lowerCase + upperCase + specialChar + passNumber);

function generatePassword() {
  console.info("Generating Password...");
  if (lowerCasePrompt) {
    console.log(lowerCasePrompt);
    result = result.concat(lowerCase, upperCase, specialChar, passNumber);
    console.log(result);
    // result = result + lowerCase[Math.round(Math.random() * Number.parseInt(lengthPrompt))]
    // result = result + upperCase[Math.round(Math.random() * Number.parseInt(lengthPrompt))]
    // result = result + specialChar[Math.round(Math.random() * Number.parseInt(lengthPrompt))]
    // result = result + passNumber[Math.round(Math.random() * Number.parseInt(lengthPrompt))]
  }

  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
