



// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].join("").toUpperCase();
let numbset = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let speChar = ['!', '@', '#', '$', '%', '^', '&', '*']
let rndLetter = [...lowAlpha, ...upAlpha, ...numbset, ...speChar]

// Write password to the #password input
function writePassword() {
  let pswd = genPassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = pswd;
  startFunction();
}

function startFunction() {
  passwordLength();
  getLow();
}



let nmbrChar = 0

function passwordLength() {
  let userAns = prompt("How many characters do you want in your password? (8 ~ 128)");
  nmbrChar = userAns
  if (nmbrChar > 128 || nmbrChar < 8) {
    alert("The password characters must be between 8 ~ 128 characters, please enter the number again.")
    return passwordLength()
  }
  return
}

function  getLow(){
  let chsLow = confirm("Add random Lowercase Alphabets?");
  if (lowAlpha) {
    return lowAlpha
  }
  else {
  lowAlpha.length = 0
  }
}


// confirm("Add random Uppercase Alphabets?");

// confirm("Add random Numbers?");
// confirm("Add random Special Character?");


// function confirmLow() {
//   if confirm("Add random Lowercase Alphabets?") {
  
//   }
  
// }
// confirm("Add random Uppercase Alphabets?");
// confirm("Add random Numbers?");
// confirm("Add random Special Character?");



function genPassword() {

  let pswd = "";
  for (let i = 0; i < nmbrChar; i++) {
    

    
    
    let rndNumb = Math.floor(Math.random()*rndLetter.length);
    let rndChar = rndLetter[rndNumb]
    pswd += rndChar;
    
  }

  return pswd;
}


// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

