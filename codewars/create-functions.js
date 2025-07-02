// Closures and Scopes | Codewars
/** Generate an array of functions, each of which returns its index in the array */
function createFunctions(n) {
	const callbacks = [];
	for (let i = 0; i < n; i++) {
		callbacks.push(() => i);
	}
	return callbacks;
}
