// Sum of Digits / Digital Root | Codewars
/** Calculate the digital root (recursive sum of all the digits in a number), recursive implementation  */
const digitalRoot = (n) => {
	if (n < 10) return n;
	const digitsSum = n
		.toString()
		.split("")
		.map(Number)
		.reduce((sum, digit) => sum + digit, 0);
	return digitalRoot(digitsSum);
};
