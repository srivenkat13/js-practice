const costEl = document.getElementById("cost-el");

document.getElementById("btn").addEventListener("click", calculate);

function calculate() {
  const sltFoodCost = parseInt(document.getElementById("food-select").value);
  const sltTrsptCost = parseInt(
    document.getElementById("transport-select").value
  );
  const areBallonsAdded = document.getElementById("balloon-checkbox").checked;

  if (sltFoodCost && sltTrsptCost) {
    var cost = sltFoodCost + sltTrsptCost;
  } else {
    alert("Select dropdowns");
  }
  areBallonsAdded ? (cost += 10) : alert("Add balloons(+$10) ?");
  costEl.textContent = `$${cost}`;
}
