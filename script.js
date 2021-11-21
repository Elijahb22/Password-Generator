// Assignment code here
var lowercasealpha = { a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z};
var uppercassalpha = { A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z};
var numbers = {123456789:any};
var specilchar = ['!', '#', $, , ':' , ';', '<', '>', '?', '@', '^', '_' , '|', '~'];

function passWordOptions() {
  // variable to store length for user input
  var length = parseInt(
    prompt('How many characters whould you like to have?')
  );
  
  if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
  }

  if (length > 128){
    alert('Password must be less than 128 characters!');
    return;
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
