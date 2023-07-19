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

//variable is a string that pulls a number between 0-9
var numbersRandom = "1234567890"
//variable is a string that pulls an upercase letter from A-Z
var upperLetters = "ABCDEFGHIJKLMOPQRUSTUVWXYZ"
//variable is a string that pulls a lowercase letter from a-z
var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
//vraible is a string that pulls a symbol
var symbolsRandom = "!@#$%^&*()?><:=-"
//sets a blank characterBank to be filled later
var characterBank = ""

//name of function that causes the generate password to operate
function generatePassword() {
  //function for the first prompt that generates the length
  function setLength() {
    while (true) {
      //prompt asking how long
        var setLength = prompt("How many characters would you like your password to contain?");
        if (isNaN(setLength)) {
            alert("Your value must be a valid number between 8 and 128");
            //error returned if value is Not a number
        } else if (setLength < 8) {
            alert("Your password must contain at least 8 characters");
            //error returned if value is less than 8
        } else if (setLength > 128) {
            alert("Your password must be no more than 128 characters");
            //error returned if value is more than 128
        } else {
            return setLength;
            //returns the length
        }
    }
  }
  //converts function to a variable
  var valueLength = setLength();
  //converts variable from a value to an integer
  var length = parseInt(valueLength);
  //returns true/false defining special character
  var symbols = window.confirm("Click OK to confirm including special characters.");
  //returns true/false defining number
  var numeric = window.confirm("Click OK to confirm including number characters");
  //returns true/false defining lowercase letter
  var lowercase = window.confirm("Click OK to confirm containing lowercase characters.");
  //returns true false defining uppercase letter
  var uppercase = window.confirm("Click OK to confirm containing uppercase characters.");



  console.log("length",length);
  console.log("symbols",symbols);
  console.log("numeric",numeric);
  console.log("lowercase",lowercase);
  console.log("uppercase",uppercase);

   //adds symbols to the character bank.
  if (symbols) {
    console.log("before", characterBank);
    characterBank = characterBank + symbolsRandom; //different version
    console.log("after", characterBank);
  }
 //adds numbers to the character bank.
  if (numeric) {
    console.log("before", characterBank);
    characterBank += numbersRandom; //different version
    console.log("after", characterBank);
  }
 // adds lowercase letters to the character bank.
  if (lowercase) {
    console.log("before", characterBank);
    characterBank = characterBank + lowerLetters;
    console.log("after", characterBank);
  }
 // adds uppercase letters to the character bank
  if (uppercase) {
    console.log("before", characterBank);
    characterBank = characterBank + upperLetters;
    console.log("after", characterBank);
  }
 // sets the password to an empty string
  var password = "";

  //sets the length of the for loop, by the length variable from the prompt.
  for (let i = 0; i < length; i++) { 
    //sets a random variable and the length of the character bank.
    var random = Math.floor(Math.random() * characterBank.length)
   
    //redefines pass as pass + the character bank, with the random variable
    password = password + characterBank[random];
    console.log("password", password);

  }

  return password



};

// the password is generated. :) 

