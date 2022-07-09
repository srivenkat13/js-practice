const galaxy = document.getElementById("galaxy");

const stars = new Array(713).fill("⭐️");

function bingBang() {
  const newStar = stars.map((star, i) => {
    const randomNum = Math.floor(Math.random() * 360);
    const starDiv = document.createElement("star");
    starDiv.textContent = star;
    starDiv.style.filter = `hue-rotate(${randomNum}deg)`;

    if (randomNum % 5 === 0) {
      starDiv.textContent = "✨";
    } else if (randomNum % 14 === 0) {
      starDiv.textContent = "🌎";
    } else if (randomNum % 7 === 0) {
      starDiv.textContent = "🛸";
      starDiv.classList.add("alien");
    } else if (randomNum % 15 === 0) {
      starDiv.textContent = "🌌";
    } else if (randomNum % 44 === 0) {
      starDiv.textContent = "🚀";
    } else if (randomNum % 46 === 0) {
      starDiv.textContent = "🦄";
      starDiv.classList.add("unicorn");
    }
    galaxy.appendChild(starDiv);
  });
}

bingBang();
