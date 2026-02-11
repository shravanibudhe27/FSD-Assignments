let mode = "CtoF";

const cToFBtn = document.getElementById("cToF");
const fToCBtn = document.getElementById("fToC");
const input = document.getElementById("tempInput");
const result = document.getElementById("result");

cToFBtn.addEventListener("click", () => {
    mode = "CtoF";
    cToFBtn.classList.add("active");
    fToCBtn.classList.remove("active");
});

fToCBtn.addEventListener("click", () => {
    mode = "FtoC";
    fToCBtn.classList.add("active");
    cToFBtn.classList.remove("active");
});

document.querySelector(".convert").addEventListener("click", () => {
    let value = parseFloat(input.value);
    if (isNaN(value)) return result.innerText = "Enter a valid number";

    let output;
    if (mode === "CtoF") {
        output = (value * 9/5) + 32;
        result.innerText = `${value}°C = ${output.toFixed(2)}°F`;
    } else {
        output = (value - 32) * 5/9;
        result.innerText = `${value}°F = ${output.toFixed(2)}°C`;
    }
});

document.querySelector(".reset").addEventListener("click", () => {
    input.value = "";
    result.innerText = "Result: --";
});
