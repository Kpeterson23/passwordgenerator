// Assignment Code
var generateBtn = document.querySelector("#generate");

// TO DO: Flesh out character arrays
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var specialChar = ["!", "#", "$", "%", "?", "&"];

function generatePassword() {
  // TO DO: ask user how many characters do they want in their password

  // var inputAnswer = prompt('This is my input question');
  var passwordlength = prompt(
    "How long would you like your password to be, keeping it between 8-128 characters"
  );

  console.log("PW Length: ", passwordlength);

  // To do: Check charachter length answer to make sure user gave proper answer
  if (isNaN(passwordlength)) {
    alert("password length must be a number");
    return;
  }

  // To do: If statement to check if passwordLength is between 8 and 128

  // To do: Ask user 1> Do you want to use lower case? 2. Do you want to use upper case?...
  var yesLower = confirm("Do you want to use lower case characters?");
  var yesUpper = confirm("Do you want to use upper case characters?");
  var yesSpecial = confirm("Do you want to use special characters?");

  // confirms for upper, numbers, special characters

  // Check those answers with if statement -> can't say false to all character types

  var allUserChars = ["numbers", "lowerCase", "upperCase", "specialChar"];

  if (yesLower) {
    // add lower case characters to allUserChars arra - method .concat
    var allUserChars;
  }

  // TO do: add yesUpper...

  console.log("User's Characters: ", allUserChars);

  var password = "";
  for (let i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allUserChars.length);
    password += allUserChars[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
