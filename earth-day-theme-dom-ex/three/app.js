const pointsEl = document.getElementById("points-p");
const actEl = document.getElementById("act-p");
const btnsContainer = document.getElementById("btns-container");
const body = document.body

const actionsArr = [
  {
    name: "recycledPaper",
    emoji: "📄",
    text: "recycled paper",
    good: true,
  },
  {
    name: "boughtSecondHand",
    emoji: "🛍",
    text: "bought 2nd hand",
    good: true,
  },
  {
    name: "tookTrain",
    emoji: "🚂",
    text: "took train",
    good: true,
  },
  {
    name: "leftLightsOn",
    emoji: "💡",
    text: "left lights on",
    good: false,
  },
  {
    name: "drippingTap",
    emoji: "🚰",
    text: "let tap drip",
    good: false,
  },
  {
    name: "leftCarRunningWhileDucksCrossed",
    emoji: "🦆",
    text: "left car running while ducks crossed road",
    good: false,
  },
];
let points = 0;
let count = 0;
function renderBtns() {
  for (let btn = 0; btn < actionsArr.length; btn++) {
    let goodOrBad = "";
    actionsArr[btn].good ? (goodOrBad = "good") : (goodOrBad = "bad");
    btnsContainer.innerHTML += `<button class="btn btn-${goodOrBad}"> ${actionsArr[btn].emoji} ${actionsArr[btn].text} </button>`;
  }

  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.contains("btn-good") ? (points += 5) : (points -= 5);
      pointsEl.textContent = `${points} points today!`;
      changeBackground();
      increment()
    });
  });
}

renderBtns();

function changeBackground() {
  points < 0
    ? body.classList.add("background-bad")
    : body.classList.remove("background-bad");
}
function increment() {
    count++;
    actEl.textContent = `${count} activites`
}
// Task: For each action in actionsArr, render a button on the page which matches the design on the slide.
// The button should show:
// 1. the emoji
// 2. the action name
// 3. Add +5 points to the user’s score for good actions, and -5 for bad actions on click
// 4. Update the points total in the DOM on click

// stretch goal 1️⃣: Change each button color, green for good activities, red for bad.

// stretch goal 2️⃣: Change the background color to reflect the user's total points. 0 or above = green, below 0 = red.

// stretch goal 3️⃣: Add an activity count.
