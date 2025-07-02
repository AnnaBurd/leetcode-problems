/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
	// All brackets come in pairs
	if (s.length % 2 !== 0) return false;

	const stack = [];
	const openingBrackets = ["(", "{", "["];
	const closingBrackets = [")", "}", "]"];

	for (let i = 0; i < s.length; i++) {
		const currentBracket = s[i];

		if (openingBrackets.includes(currentBracket)) {
			stack.push(currentBracket);
			continue;
		}

		const expectedPreviousBracket =
			openingBrackets[closingBrackets.indexOf(currentBracket)];
		const previousBracket = stack.pop();

		if (previousBracket !== expectedPreviousBracket) {
			return false;
		}
	}

	// Left unclosed brackets
	if (stack.length > 0) return false;

	return true;
};

console.log(isValid("(("));

// Adjust solution using ideas from Leet Code:
const isValidVersion = (s) => {
	// All brackets come in pairs
	if (s.length % 2 !== 0) return false;

	const stack = [];

	const bracketPairs = {
		"(": ")",
		"[": "]",
		"{": "}",
	};

	const openingBrackets = Object.keys(bracketPairs);

	for (let i = 0; i < s.length; i++) {
		const currentBracket = s[i];

		if (openingBrackets.includes(currentBracket)) {
			stack.push(bracketPairs[currentBracket]);
		} else {
			if (stack.pop() !== currentBracket) return false;
		}
	}

	// Left unclosed brackets
	if (stack.length > 0) return false;

	return true;
};

console.log(isValidVersion("(("));
