// Remove First and Last Character Part Two | Codewars
/** Transform string containing comma-separated values into a string of space-separated values and exclude first and last value  */
const array = (string) => {
	const words = string.split(",");
	if (words.length <= 2) return null;
	return words.slice(1, -1).join(" ");
};
