const body = document.body;
const formSubmit = document.getElementById("form-submit");
const checkboxes = document.getElementsByClassName("checkbox");
const checkboxesContainer = document.getElementById("checkboxes-container");

// Task:
// Part 1: Add validation to check that the name and email fields are filled in and display a warning message if not (you might not need JS for this 😜).
// Part 2: Hide the form and show a thank you message on submit.
document.querySelector("form").addEventListener("submit", (e) => {
  form.style.display = `none`;
  const data = Object.fromEntries(new FormData(e.target).entries());
  const selectPledge = document.createElement("p");
  selectPledge.textContent = `Thank you ${data.name}`;
  selectPledge.classList.add("signed-pledge-paragraph")
  body.appendChild(selectPledge);
  e.preventDefault();
});

// stretch goal 1️⃣:  Add warning styling if the name and email fields are empty (you might not need JS for this either)

// stretch goal 2️⃣:  Personalise the thank you message with the user's name.

// stretch goal 3️⃣:  Disable the button when no checkboxes are checked.
