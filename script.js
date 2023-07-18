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

// generates the Lowercase letter(s)
function createRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// generates the Uppercase letter(s)
function createRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Generates the random number(s)
function createRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Generates the random symbol(s)

function createRandomSymbols() {
  const symbols = '!@#$%^&*()?><:"}{_+./;[]=-'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  function setLength() {
    while (true) {
        var setLength = prompt("How many characters would you like your password to contain?");
        if (isNaN(setLength)) {
            alert("Your value must be a valid number between 8 and 128");
        } else if (setLength < 8) {
            alert("Your password must contain at least 8 characters");
        } else if (setLength > 128) {
            alert("Your password must be no more than 128 characters");
        } else {
            return setLength;
        }
    }
  }
  
  var valueLength = setLength();
  var length = parseInt(valueLength);
  var symbols = window.confirm("Click OK to confirm including special characters.");
  var numeric = window.confirm("Click OK to confirm including number characters");
  var lowercase = window.confirm("Click OK to confirm containing lowercase characters.");
  var uppercase = window.confirm("Click OK to confirm containing uppercase characters.");

  const password = (length, symbols, numeric, lowercase, uppercase) =>{
    const promptResults = [
      ...(symbols ? createRandomSymbols : []),
      ...(numeric ? createRandomNumber : []),
      ...(lowercase ? createRandomLower : []),
      ...(uppercase ? createRandomUpper : [])
    ];
    console.log(promptResults);
  }
};




const password = (length, symbols, numeric, lowercase, uppercase) =>{
  const promptResults = [
    ...(symbols ? createRandomSymbols : []),
    ...(numeric ? createRandomNumber : []),
    ...(lowercase ? createRandomLower : []),
    ...(uppercase ? createRandomUpper : [])
  ];
  console.log(promptResults);
}