export { resetKeypad, letterKeyPress, numberKeyPress };

const letterKeys = document.querySelectorAll(".letters .key");
const numberKeys = document.querySelectorAll(".numbers .key");
const enterKey = document.querySelector(".key-enter");

function resetKeypad() {
  for (let i = 0; i < letterKeys.length; i++) {
    letterKeys[i].classList.remove("off");
    letterKeys[i].classList.remove("selected");
    letterKeys[i].classList.remove("disabled");
    letterKeys[i].classList.add("on");
  }
  for (let i = 0; i < numberKeys.length; i++) {
    numberKeys[i].classList.remove("on");
    numberKeys[i].classList.remove("off");
    numberKeys[i].classList.remove("selected");
    numberKeys[i].classList.add("disabled");
  }
}

function letterKeyPress(key) {
  for (let i = 0; i < letterKeys.length; i++) {
    letterKeys[i].classList.remove("selected");
    letterKeys[i].classList.remove("on");
    letterKeys[i].classList.add("off");
  }

  key.classList.remove("off");
  key.classList.add("on");
  key.classList.add("selected");

  for (let i = 0; i < numberKeys.length; i++) {
    numberKeys[i].classList.remove("on");
    numberKeys[i].classList.remove("off");
    numberKeys[i].classList.remove("selected");
    numberKeys[i].classList.add("disabled");
  }

  if (key.isSameNode(letterKeys[0]) || key.isSameNode(letterKeys[1])) {
    for (let i = 0; i < 4; i++) {
      numberKeys[i].classList.remove("off");
      numberKeys[i].classList.remove("disabled");
      numberKeys[i].classList.remove("selected");
      numberKeys[i].classList.add("on");
    }
  } else {
    for (let i = 0; i < 7; i++) {
      numberKeys[i].classList.remove("off");
      numberKeys[i].classList.remove("disabled");
      numberKeys[i].classList.remove("selected");
      numberKeys[i].classList.add("on");
    }
  }
}

function numberKeyPress(key) {
    for (let i = 0; i < numberKeys.length; i++) {
        numberKeys[i].classList.remove("on");
        numberKeys[i].classList.remove("selected");
        numberKeys[i].classList.add("off");
    }
  
    key.classList.remove("off");
    key.classList.add("on");
    key.classList.add("selected");

    enterKey.classList.remove("disabled");
    enterKey.classList.remove("off");
    enterKey.classList.add("on");
}
