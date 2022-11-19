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
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
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
themeBtn.addEventListener("click", function onClick(event) {
  // 👇️ change background color
  if ((document.body.style.backgroundColor = "#1F2937")) {
    //dark
    document.body.style.backgroundColor = "#ECFDF5"; //light
  } else {
    document.body.style.backgroundColor = "#1F2937";
  }
  // 👇️ optionally change text color
  //document.body.style.color = 'white';
});

let checkboxCharacters = document.getElementById("checkbox-characters");
let checkboxNumbers = document.getElementById("checkbox-numbers");
let checkboxSymbols = document.getElementById("checkbox-symbols");
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
function renderRandomPassword() {
  checkedCheckBox();
}
function checkedCheckBox() {
  checkedBoxArray = []
  if (checkboxCharacters.checked 
    && checkboxNumbers.checked
    && checkboxSymbols.checked){
      for (let i = 0; i<characters.length; i++) {
        checkedBoxArray.push(characters[i])
        for (let j = 0; j<numbers.length; j++) {
          checkedBoxArray.push(numbers[j])
          for (let k = 0; k<symbols.length; k++) {
            checkedBoxArray.push(symbols[k])
          }
        }
      }