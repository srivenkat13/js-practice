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
  {
    name: "Pluto",
    diameter: 2370,
    color: "white",
  },
];


function renderPlanets() {
    for (let i= 0; i < planets.length; i++) {
        const planet = document.createElement("div")
        planet.style.minHeight = `${planets[i].diameter/1000}px`
        planet.style.minWidth = `${planets[i].diameter/1000}px`
        planet.style.background =  `conic-gradient( 
            black 0deg 180deg, 
            var(--${planets[i].color}) 180deg 360deg)`
        planet.classList.add("planet")
        solarSystem.appendChild(planet)
    }
}

planets.pop()

planets.unshift({
    name: "Venkstar",
    diameter: 25000,
    color: "red",
  })
renderPlanets();
