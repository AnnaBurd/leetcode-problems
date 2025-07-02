// Can you keep a secret? | Codewars
/** Create an object with getter and setter for a "secret" value */
const createSecretHolder = (secret) => {
	return {
		getSecret: () => secret,
		setSecret: (value) => { secret = value; },
	};
};
