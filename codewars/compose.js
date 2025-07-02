// Function composition | Codewars
/** Compose function that can take any number of functions */
const compose = (...fns) => {
	return (arg) => fns.reduceRight((acc, fn) => fn(acc), arg);
};
