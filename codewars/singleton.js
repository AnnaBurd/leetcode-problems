// Singleton Pattern | Codewars
/** The basic example of Singleton pattern in JS using class  */
class Singleton {
	constructor() {
		if (Singleton._instance) {
			return Singleton._instance;
		}
		Singleton._instance = this;
	}
}
// To ensure the constructor does not return a value, use a static getInstance method
Singleton.getInstance = () => {
	if (!Singleton._instance) {
		Singleton._instance = new Singleton();
	}
	return Singleton._instance;
};
