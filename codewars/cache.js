// Function Cache | Codewars
/** Function wrapper to store results in cache */
const cache = (func) => {
	const cachedValues = new Map();
	return (...args) => {
		const key = JSON.stringify(args);
		if (cachedValues.has(key)) return cachedValues.get(key);
		const newValue = func(...args);
		cachedValues.set(key, newValue);
		return newValue;
	};
};
