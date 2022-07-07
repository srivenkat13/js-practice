const greetingDisplay = document.getElementById("greeting-display");

document.getElementById("form").addEventListener("change", writeGreeting);

function writeGreeting() {
  const greetingSelect = document.getElementById("greeting-select").value;
  const recipient = document.getElementById("recipient-input").value;
  const sender = document.getElementById("sender-input").value;
  greetingDisplay.textContent = ` To ${recipient}, ${greetingSelect}  from ${sender}`;
}
