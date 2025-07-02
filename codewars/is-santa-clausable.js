// SantaClausable Interface | Codewars
/** Check if an object has all the required methods for Santa */
const isSantaClausable = (obj) => {
	return (
		typeof obj.sayHoHoHo === "function" &&
		typeof obj.distributeGifts === "function" &&
		typeof obj.goDownTheChimney === "function"
	);
};
