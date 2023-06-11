const celsiusElem = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const tempType = document.querySelector("#temp-type");
const converBtn = document.querySelector("#convert-btn");

window.addEventListener("laod", () => {
    degree.value = "";
    celsiusElem.innerHTML = "";
});

converBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
});

function convertToCelsius() {
    let inputValue = degree.value;
  
  if (tempType.value === "fahrenheit") {
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      celsiusElem.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;c`;
    } else if (tempType.value === "kelvin") {
      const KelvinToCelsius = inputValue - 273.15;
      celsiusElem.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
    }
  }