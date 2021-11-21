// Assignment code here
var lowerCaseAlpha = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercassalpha = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = [ '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialchar = ['!', '#', '$', , ':' , ';', '<', '>', '?', '@', '^', '_' , '|', '~'];

function addPasswordOptions() {
  // variable to store length for user input
  var length = parseInt(
    prompt('How many characters whould you like to have?')
  );
  // if statement to check if the number entered is valid
  if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
  };
  // if statement to make sure the length of the password does not exceed 128 characters
  if (length > 128){
    alert('Password must be less than 128 characters!');
    return;
  };
  // if statement to make sure the length exceeds 8 characters
  if (length < 8) {
    alert('Password must be more than 8 characters!')
    return;
  }; 
  // var to ask if you want to include lowercase characters
  var addLowerCaseAlpha=confirm('Would you like to include lowercase characters?');
  // var to ask if you want to include uppercase characters
  var addUpperCaseAlpha=confirm('Would you like to include uppercase characters?');
  // var to ask if you want to include numbers
  var addNumbers=confirm('Would you like to include numbers?');
  // var to ask if you want to include special characters
  var addSpecialChar=confirm('Would you like to include special characters');
  // object to store user input 
  var passwordoptions = {
    length: length, hasSpecialChar: hasSpecialChar, hasLowerCaseAlpha: hasLowerCaseAlpha, hasUpperCaseAlpha: hasUpperCaseAlpha, hasNumbers: hasNumbers
  }

}

function generatePassword() {
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
