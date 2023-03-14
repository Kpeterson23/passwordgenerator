// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
  var char =
    "0123456789abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var passwordlength = 8;
  for (let i = 0; i < length; i++) {
    const char = Math.floor(Math.random() * char.passwordlength);
    password += char[randomIndex];
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
