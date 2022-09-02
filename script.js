



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

}

let nmbrChar = prompt("How many characters do you want in your password? (8 ~ 128)");
function passwordLength() {
  if (nmbrChar > 128 || nmbrChar < 8) {
    alert("The password must have 8 ~ 128 characters.")
    return passwordLength();
  }
  return
}
passwordLength();

confirm("Add random Lowercase Alphabets?");
confirm("Add random Uppercase Alphabets?");
confirm("Add random Numbers?");
confirm("Add random Special Character?");



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

