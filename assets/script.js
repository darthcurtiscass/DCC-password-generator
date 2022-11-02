// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var passLength = prompt('how many characters?');
  var genPassword = ''
  console.log(passLength);
  return genPassword
}

function writePassword() {
  var password = generatePassword(); // =password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

console.log(password);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
