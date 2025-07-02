// Basic Mathematical Operations | Codewars
/** Perform basic mathematical operations on two numbers */
const basicOp = (operation, value1, value2) => {
	switch (operation) {
		case "+":
			return value1 + value2;
		case "-":
			return value1 - value2;
		case "*":
			return value1 * value2;
		case "/":
			return value1 / value2;
		default:
			return "Invalid operation";
	}
};
