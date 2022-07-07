const body = document.body;
const btn = document.getElementById("btn");

btn.addEventListener("click", changeColor);

let count = 0;
async function changeColor() {
  let respone = await fetch("https://apis.scrimba.com/hexcolors/?count=1");
  let data = await respone.json();

  let color = data.colors[0].value;

  // body.style.backgroundColor = color
  body.style.setProperty("background-color", color);
  count++;
  btn.innerHTML = `Change: ${count}`;
}
