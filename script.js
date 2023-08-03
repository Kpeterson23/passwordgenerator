var numbers = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!#$%?&";

function generatePassword() {
  var passwordLength = prompt(
    "How long would you like your password to be, keeping it between 8-128 characters"
  );

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be a number between 8 and 128");
    return;
  }

  var useLower = confirm("Do you want to use lowercase characters?");
  var useUpper = confirm("Do you want to use uppercase characters?");
  var useNumbers = confirm("Do you want to use numbers?");
  var useSpecial = confirm("Do you want to use special characters?");

  // Check if at least one character type is selected
  if (!useLower && !useUpper && !useNumbers && !useSpecial) {
    alert("Please select at least one character type");
    return;
  }

  var allUserChars = "";
  if (useLower) {
    allUserChars += lowerCase;
  }
  if (useUpper) {
    allUserChars += upperCase;
  }
  if (useNumbers) {
    allUserChars += numbers;
  }
  if (useSpecial) {
    allUserChars += specialChar;
  }

  var password = "";
  for (let i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allUserChars.length);
    password += allUserChars[randomIndex];
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
