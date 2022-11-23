const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const symbolsNumbers = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let themeBtn = document.getElementById("theme-Btn");
let checkboxCharacters = document.getElementById("checkbox-characters");
let checkboxSymbolsNumbers = document.getElementById("checkbox-symbolsNumbers");

let generateBtn = document.getElementById("generate-btn");

let radioFive = document.getElementById("radio-five");
let radioTen = document.getElementById("radio-ten");
let radioFifteen = document.getElementById("radio-fifteen");

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

let arrayOne = [];
let arrayTwo = [];
let checkedBoxArray = [];
let passwordLenght = 0;

function buttonTheme() {
  if (themeBtn.checked === true) {
    document.body.style.backgroundColor = "#1F2937";
    document.getElementById("myP").style.color = "#D5D4D8";
    document.getElementById("changeColorRadio").style.color = "#D5D4D8";
    document.getElementById("changeColorCheckbox").style.color = "#D5D4D8";
    document.getElementById("chaneColorP").style.color = "#D5D4D8";
    document.getElementById("hspan").style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#ECFDF5";
    document.getElementById("myP").style.color = "#4ADF86";
    document.getElementById("changeColorRadio").style.color = "#273549";
    document.getElementById("changeColorCheckbox").style.color = "#273549";
    document.getElementById("chaneColorP").style.color = "#273549";
    document.getElementById("hspan").style.color = "#4adf86";
  }
}
function renderRandomPassword() {
  checkedBoxArray = [];
  checkedCharacters();
}
function checkedCharacters() {
  if (checkboxCharacters.checked) {
    for (let i = 0; i < characters.length; i++) {
      checkedBoxArray.push(characters[i]);
    }
  }
  checkedSymbolsNumbers();
}
function checkedSymbolsNumbers() {
  if (checkboxSymbolsNumbers.checked) {
    for (let i = 0; i < symbolsNumbers.length; i++) {
      checkedBoxArray.push(symbolsNumbers[i]);
    }
  }
  checkedRadio();
}

function checkedRadio() {
  if (radioFive.checked === true) {
    passwordLenght = 5;
  } else if (radioTen.checked === true) {
    passwordLenght = 10;
  } else if (radioFifteen.checked === true) {
    passwordLenght = 15;
  }
  generatePassword();
}

function generatePassword() {
  if (arrayOne.length > 0) {
    resetArr();
  } else {
    for (let i = 0; i < passwordLenght; i++) {
      let randomPasswordOne = Math.floor(
        Math.random(checkedBoxArray) * checkedBoxArray.length
      );
      arrayOne.push(checkedBoxArray[randomPasswordOne]);

      let randomPasswordTwo = Math.floor(
        Math.random(checkedBoxArray) * checkedBoxArray.length
      );
      arrayTwo.push(checkedBoxArray[randomPasswordTwo]);
    }
  }
  fillLabels();
}

function fillLabels() {
  passwordOne.textContent = arrayOne;
  passwordTwo.textContent = arrayTwo;
  resetArr();
}

function resetArr() {
  arrayOne = [];
  arrayTwo = [];
}
