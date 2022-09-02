



// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].join("").toUpperCase();
let numbset = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let speChar = ['~', '!', '@', '#', '$', '%', '&', '*', '(', ')', '=', '+', '-']
let rndLetter = [...lowAlpha, ...upAlpha, ...numbset, ...speChar]

// Write password to the #password input
function writePassword() {
  let pswd = genPassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = pswd;
}






function genPassword() {

  let rndLetter = ""

  //    NUMBER OF CHARACTERS  //
  let userNbr = prompt("How many characters will your password have? ( Enter From 8 ~ 128 )")
  if (userNbr > 8 || userNbr < 128);  {   
  } 
    // alert("Please select from 8 ~ 128");
    // window.location.reload();
  
  


  //    CHOICE UPPERCASE    //
  if(confirm("Will you add random Uppercase Alphabets to your password?")) {
    rndLetter = rndLetter.concat(upAlpha);
  }

  //    CHOICE LOWERCASE    //
  if(confirm("Will you add random Lowercase Alphabets to your password?")){
    rndLetter = rndLetter.concat(lowAlpha);
  }
  
  //    CHOICE NUMBER   //
  if(confirm("Will you add random Numbers to your password?")){
    rndLetter = rndLetter.concat(numbset);
  }
  
  //    RANDOM CHARACTERS  //
  if(confirm("Will you add random Special Characters to your password?")){
    rndLetter = rndLetter.concat(speChar);
  }





  var pswd = "";
  if ((rndLetter.length > 0) && (userNbr >= 8) && (userNbr <= 128)) {
    for (let i = 0; i < userNbr; i++) { 
      let rndNumb = Math.floor(Math.random()*rndLetter.length);
      let rndChar = rndLetter[rndNumb]
      pswd += rndChar;
      
    }
  }
    return pswd;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

