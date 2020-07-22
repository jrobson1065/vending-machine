import { resetKeypad, letterKeyPress, numberKeyPress } from "./keypad.js";
import { insertCoin, insertPenny, updateDisplay, getTenderAmount } from "./coin.js";

const letterKeys = document.querySelectorAll(".letters .key");
const numberKeys = document.querySelectorAll(".numbers .key");
const enterKey = document.querySelector(".key-enter");
const keypadScreen = document.querySelector(".keypad-screen");
const quarterPic = document.querySelector(".quarter");
const dimePic = document.querySelector(".dime");
const nickelPic = document.querySelector(".nickel");
const pennyPic = document.querySelector(".penny");
const tenderAmountSpan = document.querySelector(".tender-amount");
const coinReturnSpan = document.querySelector(".return-amount");
const displayTextSpan = document.querySelector(".display-text");

window.addEventListener("load", resetKeypad);

for (let i = 0; i < letterKeys.length; i++) {
  letterKeys[i].addEventListener("click", () => {
    if (!letterKeys[i].classList.contains("disabled")) {
      letterKeyPress(letterKeys[i]);
      keypadScreen.innerText = letterKeys[i].innerText;
    }
  });
}

for (let i = 0; i < numberKeys.length - 1; i++) {
  numberKeys[i].addEventListener("click", () => {
    if (keypadScreen.innerText !== "") {
      if (!numberKeys[i].classList.contains("disabled")) {
        numberKeyPress(numberKeys[i]);
        keypadScreen.innerText =
          keypadScreen.innerText[0] + numberKeys[i].innerText;
      }
    }
  });
}

quarterPic.addEventListener("click", () => {
  changeDisplayText();
  tenderAmountSpan.innerText = insertCoin("quarter");
});

dimePic.addEventListener("click", () => {
  changeDisplayText();
  tenderAmountSpan.innerText = insertCoin("dime");
});

nickelPic.addEventListener("click", () => {
  changeDisplayText();
  tenderAmountSpan.innerText = insertCoin("nickel");
});

pennyPic.addEventListener("click", () => {
  changeDisplayText();
  coinReturnSpan.innerText = insertPenny();
});

enterKey.addEventListener("click", () => {
  let choice = keypadScreen.textContent.charAt(0);
  
  if (!enterKey.classList.contains("disabled")) {
    if (choice === "A") {
      tenderAmountSpan.innerText = updateDisplay(1.50);
    } else if (keypadScreen.innerText.charAt(0) === "B") {
      tenderAmountSpan.innerText = updateDisplay(1.25);
    } else if (keypadScreen.innerText.charAt(0) === "C") {
      tenderAmountSpan.innerText = updateDisplay(1.00);
    }
  }

  if (getTenderAmount() === 0) {
    tenderAmountSpan.innerText = "";
    changeDisplayTextToDefault();
  }

  resetKeypad();
  keypadScreen.innerText = "";
});

function changeDisplayText() {
  displayTextSpan.innerText = "Amount Entered: ";
}

function changeDisplayTextToDefault() {
  displayTextSpan.innerText = "Please Insert Coins";
}