const countdownDisplay = document.getElementById("countdown-display");
const rocket = document.getElementById("rocket");
let timeRemaining = 10;
let randomLaunch;

const interval = setInterval(function () {
  timeRemaining -= 1;
  countdownDisplay.textContent = timeRemaining;
  if (timeRemaining === 0) {
    launchRocket();
  }
}, 1000);

function launchRocket() {
  clearInterval(interval);
  randomLaunch = Math.floor(Math.random() * 2);

  if (randomLaunch) {
    rocket.classList.add("rocket-launching");
    countdownDisplay.textContent = "Lift off!";
  } else {
    rocket.innerHTML = `<img src="https://tesha-r.github.io/assets/rocket-smoke.svg" alt="smoke-img" class="rocket-explosion-img" />`;
    countdownDisplay.textContent = "Launch Failed,BOOM!";
  }
}

