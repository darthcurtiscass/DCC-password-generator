// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

var genPassword = ''

// calling generatePassword and populating the password into the text field with id of #password
function writePassword() {
  genPassword = ''
  generatePassword(); // =password
  var passwordText = document.querySelector("#password");
  passwordText.value = genPassword;
}
// checking the length answered to the prompt and returning the length
function validateLength(){
  var tempLength = prompt("How many characters would you like in your password?")
  if(tempLength > 7 && tempLength < 129) {
    return tempLength
  }
  var tryAgain = confirm("Please enter a valid length. Length must be between 8 and 128 characters")
  if(!tryAgain) {
    return false
  }
  return validateLength()
}
// Checking the length, cheking the characters that the user would like in their password, using a for loop to generate the password
function generatePassword(){
  var length = validateLength()
  // console.log("Creating password length variable: ", length)
  if(!length){
    alert("Invalid password length. Length must be between 8 and 128 characters")
    return
  }
  var Characters = possibleCharacters()
  if(!Characters) {
    console.log(Characters)
    alert("You didn't select any characters")
  } else {
    for (let i = 0; i < length; i++) {
      var pass = Math.floor(Math.random() * Characters.length);
          genPassword += Characters.charAt(pass)
    }}
  }
//Function to store possible character options. Checks if user wants certain types of characters and adds their choices to the empty string of possible characters.
function possibleCharacters() {
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowercase = 'abcdefghijklmnopqrstuvwxyz'
  var numbers = '0123456789'
  var spec = '@#$!&|%^*(){}/?`~<>'
  var base = ""  
  var wantsUpper = confirm("Do you want UPPERCASE letters?")
  if(wantsUpper){
    base += uppercase
  }
  var wantsLower = confirm("Would you like lowercase letters?")
  if(wantsLower) {
    base += lowercase
  }
  var wantsNumbers = confirm("Would you like Numbers?")
  if(wantsNumbers) {
    base += numbers
  }
  var wantsSpec = confirm("Would you like special characters?")
  if(wantsSpec) {
    base += spec
  } return base
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)