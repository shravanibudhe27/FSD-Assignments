let current = "";
let previous = "";
let operator = null;

const currentDisplay = document.getElementById("current");
const previousDisplay = document.getElementById("previous");

document.querySelectorAll(".number").forEach(btn => {
    btn.addEventListener("click", () => {
        current += btn.dataset.value;
        currentDisplay.innerText = current;
    });
});

document.querySelectorAll(".operator").forEach(btn => {
    btn.addEventListener("click", () => {
        if (current === "") return;
        operator = btn.dataset.value;
        previous = current;
        previousDisplay.innerText = previous + " " + btn.innerText;
        current = "";
    });
});

document.querySelector(".equal").addEventListener("click", () => {
    if (!current || !operator) return;
    let result = eval(previous + operator + current);
    currentDisplay.innerText = result;
    previousDisplay.innerText = "";
    current = result.toString();
});

document.querySelector(".clear").addEventListener("click", () => {
    current = "";
    previous = "";
    operator = null;
    currentDisplay.innerText = "0";
    previousDisplay.innerText = "";
});
