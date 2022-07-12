const projects = [
  {
    number: 01,
    name: "Earth Day Poem🌍",
    path: "earth-day-theme-dom-ex/one/index.html",
  },
  {
    number: 02,
    name: "I can 🥫 Recycle",
    path: "earth-day-theme-dom-ex/two/index.html",
  },
  {
    number: 03,
    name: "Activity Buttons🟢",
    path: "earth-day-theme-dom-ex/three/index.html",
  },
  {
    number: 04,
    name: "My Climate Pledge🌳",
    path: "earth-day-theme-dom-ex/four/index.html",
  },
  {
    number: 05,
    name: "Reusable Cup☕️",
    path: "earth-day-theme-dom-ex/five/index.html",
  },
  {
    number: 06,
    name: "Gift Selector 💝",
    path: "valentine-theme-dom-ex/one/index.html",
  },
  {
    number: 07,
    name: "Greeting Text 💌",
    path: "valentine-theme-dom-ex/two/index.html",
  },
  {
    number: 08,
    name: "Romantic Grammar Corrector 🐱",
    path: "valentine-theme-dom-ex/three/index.html",
  },
  {
    number: 09,
    name: "Filter Duplicate emojis 💜",
    path: "valentine-theme-dom-ex/four/index.html",
  },
  {
    number: 10,
    name: "Background Color Changer 🧡",
    path: "valentine-theme-dom-ex/five/index.html",
  },
  {
    number: 11,
    name: "Planet Silmuator🌎",
    path: "space-theme-dom-ex/one/index.html",
  },{
    number: 12,
    name: "Stars Stars Stars ✨",
    path: "space-theme-dom-ex/two/index.html",
  },{
    number: 13,
    name: "Rocket Launch 🚀 ",
    path: "space-theme-dom-ex/three/index.html",
  },{
    number: 14,
    name: "Moon Counter🛸",
    path: "space-theme-dom-ex/four/index.html",
  },{
    number: 15,
    name: "Add a new planet🦄",
    path: "space-theme-dom-ex/five/index.html",
  },
];

const app = document.getElementById("app");
const body = document.body;

projects.forEach((project) => {
  const title = `${project.name} - #${project.number}`;
  const projectEL = document.createElement("a");
  projectEL.classList.add("project");
  projectEL.target = "_blank";
  projectEL.href = project.path;
  projectEL.innerHTML = `<p>${title}</p>`;

  app.appendChild(projectEL);
});

document.addEventListener("click", darkmode);

function darkmode() {
  body.classList.toggle("dark-mode");
}
