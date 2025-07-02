// Prefill an Array | Codewars
/** Prefill an array of n items with values v */
const isPositiveIntegerString = (n) => /^\d+$/.test(n);
const prefill = (n, v) => {
	if ((typeof n !== "number" && typeof n !== "string") || !isPositiveIntegerString(n.toString())) {
		throw new TypeError(`${n} is invalid`);
	}
	return Array(+n).fill(v);
};
