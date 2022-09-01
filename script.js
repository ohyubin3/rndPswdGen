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


function genPassword() {

  let pswd = "";
  for (let i = 0; i < 25; i++) {
    

    let rndNumb = Math.floor(Math.random()*rndLetter.length);
    let rndChar = rndLetter[rndNumb]
    pswd += rndChar;
    
  }
  return pswd;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
