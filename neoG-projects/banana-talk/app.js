const inputText = document.getElementById("translate-input");
const btn = document.getElementById("translate-button");
btn.addEventListener("click", getTranslatedText);
const translatedText = document.getElementById("translate-output");

const url = "https://api.funtranslations.com/translate/minion.json";

function getTranslatedText() {
  let input = inputText.value;
  let completeUrl = constructURL(input);

  fetch(completeUrl)
    .then((Response) => Response.json())
    .then((data) => (translatedText.innerText = data.contents.translated))
    .catch((error) => {
      alert("some error occured with API", error);
      //   console.error("API ratelimit is reached");
    });
}

function constructURL(inp) {
  if (inp) {
    let encodedURI = encodeURI(inp);
    return `${url}?text=${encodedURI}`;
  } else {
    alert("Oye, enter some text");
  }
}
