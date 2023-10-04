function startCalc() {
	const resultInput = document.getElementById("result");
	const buttons = document.querySelectorAll(".button");

	let firstNum = "";
	let operator = "";
	let secondNum = "";

	function handleButtonClick(event) {
		const value = event.target.value;

		if (value === "c") {
			resultInput.value = "";
			firstNum = "";
			operator = "";
			secondNum = "";
		} else if (value === "=") {
			let num1 = Number(firstNum);
			let num2 = Number(secondNum);

			switch (operator) {
				case "+":
					resultInput.value = num1 + num2;
					break;
				case "-":
					resultInput.value = num1 - num2;
					break;
				case "*":
					resultInput.value = num1 * num2;
					break;
				case "/":
					if (num2 !== 0) {
						resultInput.value = num1 / num2;
					} else {
						resultInput.value = "Error";
					}
					break;
				default:
					resultInput.value = "Error";
			}

			firstNum = "";
			operator = "";
			secondNum = "";
		} else if (
			value === "+" ||
			value === "-" ||
			value === "*" ||
			value === "/"
		) {
			if (!operator && firstNum) {
				operator = value;
				resultInput.value += value;
			}
		} else {
			if (!operator) {
				firstNum += value;
			} else {
				secondNum += value;
			}
			resultInput.value += value;
		}
	}

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", handleButtonClick);
	}
}

startCalc();
