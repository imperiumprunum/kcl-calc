let target = document.getElementById("target");
let btn = document.querySelector("#btn");

var calculate = function() {
  let totalKcl = document.querySelector("#total-kcl").value;
  let totalWeigt = document.querySelector("#total-weight").value;
  let totalCarbs = document.querySelector("#total-carbs").value;
  let totalProtein = document.querySelector("#total-protein").value;
  let totalFat = document.querySelector("#total-fat").value;

  target.innerHTML = `Na 100g Kcal: ${Math.round(
    (totalKcl * 100) / totalWeigt
  )} Białko: ${(totalProtein / (totalWeigt / 100)).toPrecision(
    4
  )} Węglowodany: ${(totalCarbs / (totalWeigt / 100)).toPrecision(
    4
  )}  Tłuszcz: ${(totalFat / (totalWeigt / 100)).toPrecision(4)} `;
};
btn.addEventListener("click", calculate);
