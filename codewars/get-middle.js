// Get the Middle Character | Codewars
/** Return the middle character(s) of a string */
const getMiddle = (string) => {
	const middle = Math.floor(string.length / 2);
	return string.length % 2 === 0
		? string.slice(middle - 1, middle + 1)
		: string[middle];
};
