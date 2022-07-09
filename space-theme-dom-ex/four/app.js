const solarSystem = document.getElementById("solarSystem");
const planetsObj = [
  {
    name: "Mercury",
    moons: 0,
  },
  {
    name: "Venus",
    moons: 0,
  },
  {
    name: "Earth",
    moons: 1,
  },
  {
    name: "Mars",
    moons: 2,
  },
  {
    name: "Jupiter",
    moons: 67,
  },
  {
    name: "Saturn",
    moons: 62,
  },
  {
    name: "Uranus",
    moons: 27,
  },
  {
    name: "Neptune",
    moons: 14,
  },
];
function displayMoons() {
  let planetsText = "";

  let totalMoons = planetsObj
    .map((a) => a.moons)
    .reduce((acc, tot) => acc + tot, 0);
  for (let i = 0; i < planetsObj.length; i++) {
    planetsText += `<p> <strong>${planetsObj[i].name}</strong>: ${planetsObj[i].moons}</p>`;
  }
  planetsText += `<hr> <p class="total-moons-p"> Total Moons: ${totalMoons}</p>`;
  solarSystem.innerHTML = planetsText;
}

displayMoons();
// Task:
// 1. Display each planet’s name and number of moons in the DOM
// 2. Calculate and display the total number of moons in the solar system below

// Stretch goals:
// - 1: Make the numbers count up on page load
// - 2: Make the planet names bold.
