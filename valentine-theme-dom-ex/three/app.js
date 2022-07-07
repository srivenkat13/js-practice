const btn = document.getElementById("btn");
btn.addEventListener("click", correct);

function correct() {
  btn.textContent = `Correct Grammar`;

  const text = document.getElementById("paragraph");
  let paragraph = text.textContent;
  let firstChar = paragraph[0].toUpperCase();
  let remainder = paragraph.slice(1).toLowerCase();

  let str = firstChar.concat(remainder);

  text.textContent = str;
}
