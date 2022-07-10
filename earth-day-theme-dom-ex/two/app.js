const recycleBtn = document.getElementById("recycle-btn");
recycleBtn.addEventListener("click", recycle);
const recycleSelect = document.getElementById("recycle-select");
const recycleBin = document.getElementById("recycle-bin");
const infoParagraph = document.getElementById("info-paragraph");
const newRecyledItemsUl = document.createElement("ul");
recycleBin.appendChild(newRecyledItemsUl);

const clearBtn = document.getElementById("btn");
clearBtn.addEventListener("click", clearBin);

let numOfrecycleItems = 0;
function recycle() {
  const recylcedItem = recycleSelect.value;
  if (numOfrecycleItems <= 10 && recycleSelect.value != "") {
    numOfrecycleItems++;
    const newRecyledItemsLi = document.createElement("li");
    newRecyledItemsLi.textContent = recylcedItem;
    newRecyledItemsUl.appendChild(newRecyledItemsLi);
  } else if (recycleSelect.value == "") {
    infoParagraph.textContent = `Select item`;
    infoParagraph.style.color = `blue`;
  } else {
    infoParagraph.textContent = `Bin is Full`;
    infoParagraph.style.color = `red`;
    clearBtn.classList.remove("hide");
  }
}

function clearBin() {
  newRecyledItemsUl.textContent = ``;
  numOfrecycleItems = 0;
  infoParagraph.textContent = `Bin is clear`;
  clearBtn.classList.add("hide");
}
