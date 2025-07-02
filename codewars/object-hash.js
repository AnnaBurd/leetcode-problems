// Extract Nested Object Reference | Codewars
/** Add method to object prototype to allow nested indexing syntax, e.g. 'person.history.bio'  */
Object.prototype.hash = function (string) {
	const keys = string.split(".");
	let result = this;
	for (const key of keys) {
		if (Object.hasOwn(result, key)) {
			result = result[key];
		} else {
			return undefined;
		}
	}
	return result;
};
