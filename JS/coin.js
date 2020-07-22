let tenderAmount = 0;
let coinReturn = 0;
let notEnoughMoneySpan = document.querySelector(".not-enough-funds");
let priceOfDesiredSelection = 0;

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
      priceOfDesiredSelection = 0;
  } else { 
    notEnoughMoneySpan.innerText = "NOT ENOUGH MONEY";
  } 

  return formatter.format(Math.round(100 * tenderAmount) / 100);
}
