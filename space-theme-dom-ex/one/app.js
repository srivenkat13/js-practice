const solarSystem = document.getElementById("solarSystem");
const planets = [
  {
    name: "Mercury",
    diameter: 4879,
    color: "grey",
  },
  {
    name: "Venus",
    diameter: 12104,
    color: "yellow",
  },
  {
    name: "Earth",
    diameter: 12742,
    color: "green",
  },
  {
    name: "Mars",
    diameter: 6779,
    color: "pink",
  },
  {
    name: "Jupiter",
    diameter: 139822,
    color: "yellow",
  },
  {
    name: "Saturn",
    diameter: 116464,
    color: "orange",
  },
  {
    name: "Uranus",
    diameter: 50724,
    color: "grey",
  },
  {
    name: "Neptune",
    diameter: 49244,
    color: "blue",
  },
];

let scale = 150;

function render(arr) {
  arr.forEach((planet) => {
    const el = document.createElement("div");
    el.style.minHeight = `${planet.diameter / scale}px`;
    el.style.minWidth = `${planet.diameter / scale}px`;
    el.style.background = `conic-gradient(black 0deg 180deg, var(--${planet.color}) 180deg 360deg)`;
    el.classList.add("planet");
    solarSystem.appendChild(el);
  });
}
render(planets);
