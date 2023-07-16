// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Contains prompts for the window. 

function generatePassword() {
  var = numberofCharacters = prompt("How many characters would you like your password to contain?");
  var = charactersErrorSmall = prompt("Your password must contain at least 8 characters");
  var = charactersErrorLarge = prompt("Your password must be no moer than 128 characters");
  var = specialCharacters = prompt("Click OK to confirm including special characters.");
  var = numbericCharacters = prompt("Click OK to confirm including number characters");
  var = lowercaseCharacters = prompt("Click OK to confirm containing lowercase characters.");
  var = uppercaseCharacters = prompt("Click OK to confirm containing uppercase characters.");
}