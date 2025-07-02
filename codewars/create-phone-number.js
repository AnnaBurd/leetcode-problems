// Create Phone Number | Codewars
/** Convert an array of 10 integers into a string formatted as phone number */
const createPhoneNumber = (numbers) => {
	const format = "(xxx) xxx-xxxx";
	let i = 0;
	return format.replace(/x/g, () => numbers[i++]);
};
