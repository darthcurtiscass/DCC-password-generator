// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

//const random = Math.floor(Math.random() * 3);

var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!&|';
var genPassword = ''   
var securePassword = ''
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var numbers = '0123456789'
var spec = '@#$!&|%^*(){}/?`~<>'
// variable
function generatePassword() {
  var passwordLength = prompt('how many characters? (Must be between 8 & 120 characters)');
 
    if (passwordLength >= 8 && passwordLength <= 128) {
    var promptAnswer = prompt('Would you like your password to contain letters and numbers? yes or no?');
      if (promptAnswer === 'yes') {
        for (let i = 0; i <= passwordLength; i++) {
          var pass = Math.floor(Math.random()
            * charset.length);
          genPassword += charset.charAt(pass);
      }
      return genPassword;
          } else if (promptAnswer === 'no') {
            alert("I guess you don't like secure passwords. Password must contain Uppercase, lowercase, and special characters.");
          }
    } else {
      alert("I guess you don't like secure passwords.");
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


// return genPassword;
//       } else if (promptAnswer === 'no') {
//         var upQ = prompt("Include Uppercase?");
//         if (upQ === '') {
//           var lowQ = prompt('Include lowercase?');
//           if (lowQ === ''){
//             var spQ = prompt('Include special characters?');
//             if (spQ === ''){
//               for (let i = 0; i <=passwordLength; i++) {
//                 var secPass = Math.floor(Math.random() * charset.length);
//                 securePassword === charset.charAt(secPass);
//               }