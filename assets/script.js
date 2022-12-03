// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate")

var genPassword = ''

// calling generatePassword and populating the password into the text field with id of #password
function writePassword() {
  var password = generatePassword(); // =password
  var passwordText = document.querySelector("#password");

  passwordText.value = genPassword;

}
// checking the length answered to the prompt and returning the length
function validateLength(){
  var tempLength = prompt("whats the length?")
  if(tempLength > 7 && tempLength < 129) {
    return tempLength
  }
  var tryAgain = confirm("Do you want to try length again?")
  if(!tryAgain){
    return false
  }
  return validateLength()
}
// Checking the length, cheking the characters that the user would like in their password, using a for loop to generate the password
function generatePassword(){
  var length = validateLength()
  // console.log("Creating password length variable: ", length)
  if(!length){
    alert("Invalid password length. length must be between 8 and 128 characters")
    return
  }
  var Characters = possibleCharacters()
  if(!Characters) {
    alert("You didn't select any characters")
  } else {
    for (let i = 0; i < length; i++) {
      var pass = Math.floor(Math.random() * Characters.length);
          genPassword += Characters.charAt(pass)
    }}
  }

function possibleCharacters(){
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var lowercase = 'abcdefghijklmnopqrstuvwxyz'
  var numbers = '0123456789'
  var spec = '@#$!&|%^*(){}/?`~<>'
  var base = ""  
  var wantsUpper = confirm("Do you want uppercase?")
  if(wantsUpper){
    base += uppercase
  }
  var wantsLower = confirm("Lower?")
  if(wantsLower) {
    base += lowercase
  }
  var wantsNumbers = confirm("Numbers?")
  if(wantsNumbers) {
    base += numbers
  }
  var wantsSpec = confirm("Special characters?")
  if(wantsSpec) {
   return base += spec
  } 
  console.log(base)
  //add: if statements for both numbers and spec
  
  if(base.length === 0){
    var tryAgain = confirm("Do you want to try base again?")
    if(!tryAgain){
      return
    }
    return possibleCharacters()  
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)