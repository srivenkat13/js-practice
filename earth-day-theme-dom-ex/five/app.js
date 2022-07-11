const coffeesPerDay = [3, 1, 2, 1, 3, 2, 10];
const reusableCupDiscount = 0.5;
const coffeePrice = 3;
const dailySavings = document.getElementById("daily-savings");
const total = document.getElementById("total-p");
const input = document.getElementById("coffee-input");
const addCoffee = document.getElementById("add");

let savingsPerDayArr = [];
let saving = "";
// Task: Based on the number of coffees bought and the reusable cup discount, calculate and render each day's savings in the dailySavings element.
function renderSavings() {
  savingsPerDayArr = coffeesPerDay.map((e) => e * reusableCupDiscount);
  savingsPerDayArr.forEach((e, i) => {
    dailySavings.innerHTML += `<p> Day ${i + 1}: $${e}</p>`;
  });
}
function totalSaving() {
  totalSaved = savingsPerDayArr.reduce((total, savedAmt) => total + savedAmt);
  total.textContent = `Total Saved = $${totalSaved}! 😅🥳`;
}

function renderAfterNewCoffee() {
  const newCoffeeToAdd = parseInt(input.value);
  const newSave = newCoffeeToAdd * reusableCupDiscount;
  savingsPerDayArr.push(newSave);
  dailySavings.innerHTML += `<p> Day ${savingsPerDayArr.length}: $${newSave}</p>`;
}
addCoffee.addEventListener("click", newCoffee);
function newCoffee() {
  renderAfterNewCoffee();
  totalSaving();
  input.value = "";
}
renderSavings();
totalSaving();
// stretch goal 1️⃣: Show the total savings

// stretch goal 2️⃣: Add an input to add more entries to coffeesPerDay

// stretch goal 3️⃣: Improve the formatting of the numbers, e.g. $1.5 = $1.50
