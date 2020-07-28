let tenderAmount = 0;
let coinReturn = 0;
let notEnoughMoneySpan = document.querySelector(".not-enough-funds");
let priceOfDesiredSelection = 0;
const snack = document.querySelector(".snack");
const keypadScreen = document.querySelector(".keypad-screen");
const coinReturnSpan = document.querySelector(".return-amount");

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function insertCoin(coin) {
  if (coin === "quarter") tenderAmount += 0.25;
  if (coin === "dime") tenderAmount += 0.1;
  if (coin === "nickel") tenderAmount += 0.05;

  if (tenderAmount >= priceOfDesiredSelection) {
    notEnoughMoneySpan.innerHTML = "&nbsp;";
  }

  return formatter.format(Math.round(100 * tenderAmount) / 100);
}

export function getTenderAmount() {
  return tenderAmount;
}

export function insertPenny() {
  coinReturn += 0.01;

  return formatter.format(Math.round(100 * coinReturn) / 100);
}

export function updateDisplay(price) {
  priceOfDesiredSelection = price;
  if (tenderAmount >= price) {
    tenderAmount -= price;
    returnCoins(tenderAmount);
    priceOfDesiredSelection = 0;
    renderSnack();
    tenderAmount = 0;
  } else {
    notEnoughMoneySpan.innerText = "NOT ENOUGH MONEY";
  }

  return formatter.format(Math.round(100 * tenderAmount) / 100);
}

function returnCoins(tenderAmount) {
  coinReturn += tenderAmount;

  coinReturnSpan.innerText = formatter.format(Math.round(100 * coinReturn) / 100);
}

export function flashingWarning() {
  setInterval(() => {
    notEnoughMoneySpan.style.visibility = "hidden";
    setTimeout(() => {
      notEnoughMoneySpan.style.visibility = "visible";
    }, 600);
  }, 1200);
}

export function resetCoinReturn() {
  coinReturn = 0;
}

function renderSnack() {
    let selection = keypadScreen.textContent;
    if (selection === "A1") snack.innerText = "Doritos";
    if (selection === "A2") snack.innerText = "Cookies";
    if (selection === "A3") snack.innerText = "Lays Original";
    if (selection === "A4") snack.innerText = "Lays BBQ";
    if (selection === "B1") snack.innerText = "Fritos";
    if (selection === "B2") snack.innerText = "Herr's Original";
    if (selection === "B3") snack.innerText = "Animal Crackers";
    if (selection === "B4") snack.innerText = "Cheetos Crunchy";
    if (selection === "C2") snack.innerText = "Twix";
    if (selection === "C1") snack.innerText = "Snickers";
    if (selection === "C3") snack.innerText = "M&Ms Peanut";
    if (selection === "C4") snack.innerText = "Skittles";
    if (selection === "C5") snack.innerText = "Milky Way";
    if (selection === "C6") snack.innerText = "Snickers Almond";
    if (selection === "C7") snack.innerText = "3 Musketeers";
}