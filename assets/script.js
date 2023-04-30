var specialCharacters = [
  ' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '"', '_', '-','+', '=', '~', '`', '.', '/', ':', ';', '<', '>', '?', '@', '[', ']', '\\', '//', '{', '}'
]
var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]

var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);

  function generatePassword() {
    var length = parseInt(
      prompt('How many characters would you like your password to be?')
    );
    
    if (Number.isNaN(length)) {
      alert("I'm sorry, but your password's length needs to be a number")
    }

    if (length < 8) {
      alert('I like the simplicity, but your password has to be more than 8 characters.')
      return null
    }

    if (length > 128) {
      alert("A little extra are we? Let's keep it under 100 characters.")
      return null
    }

    var specialCharactersAdded = confirm('Would you like for your password to include special characters? If so, click OK.')
    
    var numericCharactersAdded = confirm('And would you like to include numbers in your password? If so, click OK.')

    var uppercaseCharactersAdded = confirm('Now how about we mix things up and throw in some upper case letters? If so, click OK.')

    var lowercaseCharactersAdded = confirm('Okay...weird question, but how about just some cute little lower case letters? If so, click OK.')

    if (
      specialCharactersAdded === false&&
      numericCharactersAdded === false&&
      lowercaseCharactersAdded === false&&
      uppercaseCharactersAdded ===false
    ) {
      alert("Yeah...you are going to need at least a type of character to create a password. Let's try again!");
      return null;
    }

    var characters = [];
    if (specialCharacters) {
      characters = characters.concat(specialCharacters);
    }
    if (numericCharacters) {
      characters = characters.concat(numericCharacters);
    }
    if (uppercaseCharacters) {
      characters = characters.concat(uppercaseCharacters)
    }
    if (lowercaseCharacters) {
      characters = characters.concat(lowercaseCharacters)
    }

    var password = ``;
    for (var i = 0; i<length; i++) {
      password += getRandom(characters);
    }
    
    return password;

    function getRandom(arr) {
      var randIndex = Math.floor(Math.random() * arr.length);
      var randElement = arr[randIndex];
      return randElement; 
    }
  }