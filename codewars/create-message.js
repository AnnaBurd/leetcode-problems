// "Stringing"+"Me"+"Along" | Codewars
/** Generate a space-separated message with the repeated function calls. Function call without an argument returns the resulting message */
const createMessage = (str) => {
	return (nextStr) => {
		if (!nextStr) return str;
		return createMessage(`${str} ${nextStr}`);
	};
};
