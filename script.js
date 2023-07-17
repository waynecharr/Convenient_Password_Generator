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
}

var password = prompt("How many characters would you like your password to contain?")
var number = parseInt(password);

function createRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(createRandomLower());

function createRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(createRandomUpper());

function createRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(createRandomNumber());

function createRandomSymbols() {
  const symbols = '!@#$%^&*()?><:"}{_+,./;[]=-'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(createRandomSymbols());