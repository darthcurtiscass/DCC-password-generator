// Assignment code here
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

const random = Math.floor(Math.random() * 3);

const getRandomPass = () => {
  if (random === 0) {
    return 'a';
  } else if (random === 1) {
    return 'b';
  } else if (random === 2) {
    return 'c'
  }
}

// variable
function generatePassword() {
  var passwordLength = prompt('how many characters?');
 
    if (passwordLength >= 8 && passwordLength <= 120) {
    prompt('Would you like your password to contain letters and numbers? yes or no?');
      if ('yes') {
        console.log("I'm lost");
      } else if ('no') {
        prompt("I guess you don't like security");
      }
    }
};

function writePassword() {
  var password = generatePassword(); // =password
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

console.log(password);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
