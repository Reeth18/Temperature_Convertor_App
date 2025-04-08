function restrictSameSelection() {
  let fromUnit = document.getElementById("fromUnit").value;
  let toUnit = document.getElementById("toUnit");

  // Enable all options first
  for (let option of toUnit.options) {
    option.disabled = false;
  }

  // Disable the selected 'From' unit in the 'To' dropdown
  if (fromUnit) {
    let selectedOption = toUnit.querySelector(`option[value="${fromUnit}"]`);
    if (selectedOption) {
      selectedOption.disabled = true;
    }
  }

  document.getElementById("fromUnitLabel").innerText = fromUnit;
  document.getElementById("toUnitLabel").innerText = toUnit.value;
}

function convertTemperature() {
  let from = document.getElementById("fromUnit").value;
  let to = document.getElementById("toUnit").value;
  let temp = parseFloat(document.getElementById("temperature").value);
  if (isNaN(temp)) {
    alert("Please enter a valid number!");
    return;
  }
  let convertedTemp;
  if (from === "C" && to === "F") convertedTemp = (temp * 9) / 5 + 32;
  else if (from === "C" && to === "K") convertedTemp = temp + 273.15;
  else if (from === "F" && to === "C") convertedTemp = ((temp - 32) * 5) / 9;
  else if (from === "F" && to === "K")
    convertedTemp = ((temp - 32) * 5) / 9 + 273.15;
  else if (from === "K" && to === "C") convertedTemp = temp - 273.15;
  else if (from === "K" && to === "F")
    convertedTemp = ((temp - 273.15) * 9) / 5 + 32;
  else {
    alert("Please select valid units for conversion.");
    return;
  }
  document.getElementById("result").value = convertedTemp.toFixed(2);
  document.getElementById("toUnitLabel").innerText = to;
}

function clearFields() {
  document.getElementById("temperature").value = "";
  document.getElementById("result").value = "";
  document.getElementById("fromUnit").value = "";
  document.getElementById("toUnit").value = "";
  document.getElementById("fromUnitLabel").innerText = "";
  document.getElementById("toUnitLabel").innerText = "";
}
