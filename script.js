// Assignment code here
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

// Get references to the #generate element
const passwordText = document.querySelector("#password");
const length = document.querySelector("#length");
const incNumbers = document.querySelector("#numbers");
const incSymbols = document.querySelector("#symbols")
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
const generatePassword = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charat(
      math.floor(Math.random() * characters.length)
    );
  }

  //passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword => {
  let characters = alpha;
  incNumbers ? (characters += numbers) : "";
  incSymbols ? (characters += symbols) : "";
  passwordText.value = generatePassword(length.value, characters);
});
