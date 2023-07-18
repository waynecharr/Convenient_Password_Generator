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




var numbersRandom = "1234567890"
var upperLetters = "ABCDEFGHIJKLMOPQRUSTUVWXYZ"
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
var symbolsRandom = "!@#$%^&*()?><:=-"

var characterBank = ""


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

  

  console.log("length",length);
  console.log("symbols",symbols);
  console.log("numeric",numeric);
  console.log("lowercase",lowercase);
  console.log("uppercase",uppercase);


  if (symbols) {
    console.log("before", characterBank);
    characterBank = characterBank + symbolsRandom; //different version
    console.log("after", characterBank);
  }

  if (numeric) {
    console.log("before", characterBank);
    characterBank += numbersRandom; //different version
    console.log("after", characterBank);
  }

  if (lowercase) {
    console.log("before", characterBank);
    characterBank = characterBank + lowerLetters;
    console.log("after", characterBank);
  }

  if (uppercase) {
    console.log("before", characterBank);
    characterBank = characterBank + upperLetters;
    console.log("after", characterBank);
  }

  var password = "";

  for (let i = 0; i < length; i++) { //i stands for index 
    var random = Math.floor(Math.random() * characterBank.length)
    //console.log(random);
    //console.log(characterBank[random]);

    password = password + characterBank[random];
    console.log("password", password);

  }

  return password



};




