/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
const para = document.querySelector("p");
para.innerHTML = para.innerText
  .split(" ")
  .map((word) =>
    word.length > 8
      ? `<span style="border:2px black solid;background-color:yellow;border-radius:5px">${word}</span>`
      : word
  )
  .join(" ");
/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/
const link = document.createElement("a");
link.href = "https://forcemipsum.com/";
link.innerText = "Source";
link.target = "_blank";

document.body.appendChild(link);
/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
para.innerHTML = para.innerHTML.split(".").join("</p><p>") + "</p>";
/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const wordCount = para.innerText.split(" ").length;
const wordCountEl = document.createElement("div");
wordCountEl.style.color = "blue";
wordCountEl.innerText = `${wordCount} Words`;
document.body.insertBefore(wordCountEl, para);
/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
Array.from(document.querySelectorAll("p")).forEach(
  (p) => (p.innerHTML = p.innerHTML.replace(/\?/g, "🤔").replace(/\!/g, "😲"))
);
