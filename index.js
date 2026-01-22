const number = document.getElementById("number");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const convertBtn = document.getElementById("convertBtn");
const textLabel = document.getElementById("textLabel");

let temp;

convertBtn.onclick = function() {
    if(toFahrenheit.checked) {
        convertToFahrenheit();
    } else if (toCelcius.checked) {
        convertToCelcius();
    } else {
        textLabel.textContent = "Please select a mode of conversion";
    }
};

function convertToFahrenheit() {
    temp = (Number(number.value) * 9 / 5) + 32;
    textLabel.textContent = temp;
}

function convertToCelcius() {
    temp = (Number(number.value)-32) * 5 / 9;
    textLabel.textContent = temp;
}