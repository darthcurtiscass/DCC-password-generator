// Assignment code here
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//const random = Math.floor(Math.random() * 3);

var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!&|';
var genPassword = ''   


// variable
function generatePassword() {
  var passwordLength = prompt('how many characters?');
 
    if (passwordLength >= 8 && passwordLength <= 120) {
    prompt('Would you like your password to contain letters and numbers? yes or no?');
      if ('yes') {
        for (let i = 1; i <= passwordLength; i++) {
          var char = Math.floor(Math.random()
            * charset.length);
          genPassword += charset.charAt(char);
      };
      return genPassword;
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
