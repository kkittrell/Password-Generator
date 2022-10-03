// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
// var upperCase = ["A", "B", "C","D", "E", "F", "G", "H", "I"]
var lengthPrompt = prompt("How long would you like your password to be?")
var lowerCasePrompt = confirm("Would you like lower case letters?")
var result = ""; 

function generatePassword () {
  console.info("Generating Password...")
  if (lowerCasePrompt ) {
    console.log(lowerCasePrompt)
    result = result + lowerCase[Math.round(Math.random() * Number.parseInt(lengthPrompt))] 
  }
console.log(result)
  return result
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
