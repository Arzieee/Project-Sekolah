const displayBox = document.querySelector(".display"), 
      displayInput = document.querySelector(".display-input"),
      displayHasil = document.querySelector(".display-hasil"),
      buttons = document.querySelectorAll("button");

let input = "",
    hasil = "";

const calculate = btnValue => {
    switch (btnValue) {
        case "=":
            const formattedInput = replaceOperators(input);
            try {
                const calculatedValue = eval(formattedInput);
                hasil = parseFloat(calculatedValue.toFixed(10));
                displayBox.classList.add("active");
            } catch {
                hasil = "NaN";
            }
            break;

        case "C":
            resetCalculator("");
            break;

        case "BS":
            input = input.slice(0, -1);
            break;

            // pangkat
        case "^":
            input += "**";
            break;

        case "x²":
    if (input !== "") {
        const formattedInput = replaceOperators(input);
        try {
            const baseValue = eval(formattedInput);
            hasil = Math.pow(baseValue, 2);
            input = hasil.toString();
            displayBox.classList.add("active");
        } catch {
            hasil = "NaN";
        }
    }
    break;

            //akar
        case "√":
    if (input !== "") {
        const formattedInput = replaceOperators(input);
        try {
            const baseValue = eval(formattedInput);
            hasil = Math.sqrt(baseValue);
            input = hasil.toString();
            displayBox.classList.add("active");
        } catch {
            hasil = "NaN";
        }
    }
    break;

        // persen
        case "%":
            input += "*0.01";
            break;

        default:
            input += btnValue;
    }

    displayInput.value = input;
    displayHasil.value = hasil;
    displayInput.scrollLeft = displayInput.scrollWidth;
};

const replaceOperators = input =>
    input.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("Math.sqrt", "√").replaceAll("√", "Math.sqrt")

const resetCalculator = newInput => {
    input = newInput;
    hasil = "";
    displayBox.classList.remove("active");
};

buttons.forEach(button =>
    button.addEventListener("click", () => {
        const value = button.textContent.trim();
        calculate(value);
    })
);