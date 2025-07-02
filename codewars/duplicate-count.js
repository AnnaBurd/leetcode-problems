// Counting Duplicates | Codewars
/** Count the number of duplicating characters in the input string */
const duplicateCount = (str) => {
	const lowerCaseStr = str.toLowerCase();
	const charCount = {};
	for (const char of lowerCaseStr) {
		if (Object.hasOwn(charCount, char)) {
			charCount[char]++;
		} else {
			charCount[char] = 1;
		}
	}
	const duplicatesCount = Object.values(charCount).filter((count) => count > 1).length;
	return duplicatesCount;
};
