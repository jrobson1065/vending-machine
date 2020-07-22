import { resetKeypad, letterKeyPress, numberKeyPress } from "./keypad.js";
import { insertCoin } from "./coin.js";

const letterKeys = document.querySelectorAll(".letters .key");
const numberKeys = document.querySelectorAll(".numbers .key");
const keypadScreen = document.querySelector(".keypad-screen");
const quarterPic = document.querySelector(".quarter");
const dimePic = document.querySelector(".dime");
const nickelPic = document.querySelector(".nickel");
const pennyPic = document.querySelector(".penny");
const tenderAmountSpan = document.querySelector(".tender-amount");

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
  tenderAmountSpan.innerText = insertCoin("quarter");
})

dimePic.addEventListener("click", () => {
  tenderAmountSpan.innerText = insertCoin("dime");
})

nickelPic.addEventListener("click", () => {
  tenderAmountSpan.innerText = insertCoin("nickel");
})

pennyPic.addEventListener("click", () => {
  tenderAmountSpan.innerText = insertCoin("penny");
})