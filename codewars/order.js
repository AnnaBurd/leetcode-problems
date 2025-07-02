// Your order, please | Codewars
/** Order words in string by a hidden order number within each word */
const order = (str) => {
	return str
		.split(" ")
		.sort((a, b) => a.match(/\d/) - b.match(/\d/))
		.join(" ");
};
