let CalcMcros = function(
  dishName,
  totalKcl,
  totalWeight,
  totalProtein,
  totalCarbs,
  totalFat
) {
  return {
    dishName: dishName,
    kcl: ((totalKcl * 100) / totalWeight).toFixed(2),
    protein: (totalProtein / (totalWeight / 100)).toFixed(2),
    carbs: (totalCarbs / (totalWeight / 100)).toFixed(2),
    fat: (totalFat / (totalWeight / 100)).toFixed(2)
  };
};

let FillResultTable = function(macroObj) {
  let table = document.querySelector(".result");
  table.innerHTML = `
        <span><p>${macroObj.dishName}</p><p></p></span>
        <span><p></p><p>per 100g</p></span>
        <span><p>Calories</p><p>${macroObj.kcl} g</p></span>
        <span><p>Protein</p><p>${macroObj.protein} g</p></span>
        <span><p>Total Carbohydrate	</p><p>${macroObj.carbs} g</p></span>
        <span><p>Total Fat</p><p>${macroObj.fat} g</p></span>
  `;
};

let calculate = function() {
  let target = document.getElementById("target");
  let btn = document.querySelector("#btn");
  let totalKcl = document.querySelector("#total-kcl").value;
  let totalWeight = document.querySelector("#total-weight").value;
  let totalCarbs = document.querySelector("#total-carbs").value;
  let totalProtein = document.querySelector("#total-protein").value;
  let totalFat = document.querySelector("#total-fat").value;
  let dishName = document.querySelector("#dish-name").value;

  let macroObj = CalcMcros(
    dishName,
    totalKcl,
    totalWeight,
    totalProtein,
    totalCarbs,
    totalFat
  );

  FillResultTable(macroObj);
};

//  Setup function
(function() {
  calculate();
})();

btn.addEventListener("click", calculate);
