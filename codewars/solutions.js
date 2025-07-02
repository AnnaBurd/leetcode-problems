/**
 * This is a file for solutions for a set of Codewars problems:
        Opposite number | Codewars
        Basic Mathematical Operations | Codewars
        Printing Array elements with Comma delimiters
        Can Santa save Christmas? | Codewars
        Get the Middle Character | Codewars
        Singleton Pattern | Codewars
        Remove First and Last Character Part Two | Codewars
        Prefill an Array | Codewars
        Cross Product of Vectors | Codewars
        Matrix Transpose | Codewars
        Create Phone Number | Codewars
        Closures and Scopes | Codewars
        Calculating with Functions | Codewars
        Can you keep a secret? | Codewars
        Using closures to share class state | Codewars
        A Chain adding function | Codewars
        Function Cache | Codewars
        Counting Duplicates | Codewars
        Function composition | Codewars
        "Stringing"+"Me"+"Along" | Codewars
        I Spy | Codewars
        SantaClausable Interface | Codewars
        Extract Nested Object Reference | Codewars
        Array Helpers | Codewars
        Your order, please | Codewars
        Sum of Digits / Digital Root | Codewars
        Fun with ES6 Classes #2 - Animals and Inheritance | Codewars
        Fun with ES6 Classes #3 - Cuboids, Cubes and Getters | Codewars

 */

// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

/** Return the opposite value of a number, e.g. 1 => -1, -34 => 34 */
const opposite = (number) => -number;

/** Perform basic mathematical operations on two numbers
 * @param {string} operation - The operation to perform, e.g. "+", "-", "*", "/"
 * @param {number} value1 - The first number
 * @param {number} value2 - The second number
 */
const basicOp = (operation, value1, value2) => {
	switch (operation) {
		case "+":
			return value1 + value2;
		case "-":
			return value1 - value2;
		case "*":
			return value1 * value2;
		case "/":
			return value1 / value2;
		default:
			return "Invalid operation";
	}
};

/** Transform array of elements into string of comma-separated values */
const printArray = (array) => array.join(",");

/** Return the total time in seconds for array of HH:MM:SS strings */
const calcTotalDuration = (durations) => {
	let totalDuration = 0;
	durations.forEach((duration) => {
		const [hours, minutes, seconds] = duration.split(":").map(Number);
		totalDuration += hours * 3600 + minutes * 60 + seconds;
	});

	return totalDuration;
};

/** Return true if total time for array of HH:MM:SS strings is less or equal to 24 hours */
const determineTime = (durations) => {
	const maxDuration = 24 * 60 * 60;
	const requiredDuration = calcTotalDuration(durations);

	return requiredDuration <= maxDuration;
};

/** Return the middle character(s) of a string, one middle character if the string's length is odd, and two middle characters if the string's length is even */
const getMiddle = (string) => {
	const middle = Math.floor(string.length / 2);
	return string.length % 2 === 0
		? string.slice(middle - 1, middle + 1)
		: string[middle];
};

/** The basic example of Singleton pattern in JS using class  */
class Singleton {
	constructor() {
		if (Singleton._instance) {
			return Singleton._instance;
		}
		Singleton._instance = this;
	}
}

/** Transform string containing comma-separated values into a string of space-separated values and exclude first and last value  */
const array = (string) => {
	const words = string.split(",");

	if (words.length <= 2) return null;

	return words.slice(1, -1).join(" ");
};

/** Use regex to check if string contains a positive integer */
const isPositiveIntegerString = (n) => /^\d+$/.test(n);

/** Prefill an array of n items with values v */
const prefill = (n, v) => {
	if (
		(typeof n !== "number" && typeof n !== "string") ||
		!isPositiveIntegerString(n.toString())
	) {
		throw new TypeError(`${n} is invalid`);
	}

	return Array(+n).fill(v);
};

/** Calculate the cross product of two vectors in 3D space */
const crossProduct = (vector1, vector2) => {
	if (
		!Array.isArray(vector1) ||
		!Array.isArray(vector2) ||
		vector1.length !== 3 ||
		vector2.length !== 3
	) {
		// throw new Error("Arguments are not 3D vectors!"); does not pass test
		throw "Arguments are not 3D vectors!";
	}

	const [x1, y1, z1] = vector1;
	const [x2, y2, z2] = vector2;

	// Ref: formula for cross product of two vectors in the three-dimensional Cartesian coordinate system (https://www.nagwa.com/en/explainers/616184792816/)
	return [y1 * z2 - z1 * y2, z1 * x2 - x1 * z2, x1 * y2 - y1 * x2];
};

/** Return the transpose of a matrix, assuming each row has equal length and both height and width are positive */
const transpose = (matrix) => {
	const height = matrix.length;
	const width = matrix[0].length;

	const transposedMatrix = [];

	for (let i = 0; i < width; i++) {
		const row = [];
		for (let j = 0; j < height; j++) {
			row.push(matrix[j][i]);
		}
		transposedMatrix.push(row);
	}

	return transposedMatrix;
};

/** Convert an array of 10 integers into a string formatted as phone number */
createPhoneNumber = (numbers) => {
	const format = "(xxx) xxx-xxxx";
	let i = 0;
	return format.replace(/x/g, () => numbers[i++]);
};

/** Generate an array of functions, each of which returns its index in the array */
// const createFunctions = (n) => Array.from({ length: n }, (_, i) => () => i);

function createFunctions(n) {
	const callbacks = [];

	for (let i = 0; i < n; i++) {
		callbacks.push(() => i);
	}

	return callbacks;
}

const cb = createFunctions(5);

/** Calculations in functional style */
const zero = (op) => (op ? op(0) : 0);
const one = (op) => (op ? op(1) : 1);
const two = (op) => (op ? op(2) : 2);
const three = (op) => (op ? op(3) : 3);
const four = (op) => (op ? op(4) : 4);
const five = (op) => (op ? op(5) : 5);
const six = (op) => (op ? op(6) : 6);
const seven = (op) => (op ? op(7) : 7);
const eight = (op) => (op ? op(8) : 8);
const nine = (op) => (op ? op(9) : 9);

const plus = (a) => (b) => b + a;
const minus = (a) => (b) => b - a;
const times = (a) => (b) => b * a;
const dividedBy = (a) => (b) => Math.floor(b / a);

/** Create an object with getter and setter for a "secret" value */
const createSecretHolder = (secret) => {
	return {
		getSecret: () => secret,
		setSecret: (value) => (secret = value),
	};
};

var Cat = (() => {
	var _count = 0;
	var _totalWeight = 0;

	const Constructor = function (name, weight) {
		if (!name || !weight) throw new Error("Both name and weight are required");

		_count++;

		this.name = name;

		Object.defineProperty(this, "weight", {
			get: function () {
				return this._weight || 0;
			},
			set: function (value) {
				_totalWeight -= this.weight;
				_totalWeight += value;
				this._weight = value;
			},
		});

		this.weight = weight;
	};

	Constructor.averageWeight = () => _totalWeight / _count;

	return Constructor;
})();

// fluffy = new Cat("fluffy", 15);
// garfield = new Cat("garfield", 25);

// console.log(fluffy, fluffy.weight);

/** Function wrapper to store results in cache */
const cache = (func) => {
	const cachedValues = new Map();

	return (...args) => {
		const key = JSON.stringify(args);

		// Return cached value if it exists
		if (cachedValues.has(key)) return cachedValues.get(key);

		// Generate new value and cache it
		const newValue = func(...args);
		cachedValues.set(key, newValue);
		return newValue;
	};
};

/** Count the number of duplicating characters in the input string */
const duplicateCount = (str) => {
	const lowerCaseStr = str.toLowerCase();

	const charCount = {};
	for (const char of lowerCaseStr) {
		Object.hasOwn(charCount, char) ? charCount[char]++ : (charCount[char] = 1);
	}

	const duplicatesCount = Object.values(charCount).filter(
		(count) => count > 1,
	).length;

	return duplicatesCount;
};

/** Compose function that can take any number of functions */
const compose = (...fns) => {
	return (arg) => fns.reduceRight((acc, fn) => fn(acc), arg);
};
// TODO: check solutions (how it works) for compose above

/** Generate a space-separated message with the repeated function calls. Function call without an argument returns the resulting message */
const createMessage = (str) => {
	return (nextStr) => {
		if (!nextStr) return str;
		return createMessage(`${str} ${nextStr}`);
	};
};

// TODO: check how solution works for createMessage above
// https://www.codewars.com/kata/55f4a44eb72a0fa91600001e/solutions/javascript

var santa = {
	sayHoHoHo: () => {
		console.log("Ho Ho Ho!");
	},
	distributeGifts: () => {
		console.log("Gifts for all!");
	},
	goDownTheChimney: () => {
		console.log("*whoosh*");
	},
};

var notSanta = {
	sayHoHoHo: () => {
		console.log("Oink Oink!");
	},
	// no distributeGifts() and no goDownTheChimney()
};

/** Check if an object has all the required methods for Santa */
const isSantaClausable = (obj) => {
	return (
		typeof obj.sayHoHoHo === "function" &&
		typeof obj.distributeGifts === "function" &&
		typeof obj.goDownTheChimney === "function"
	);
};

Array.prototype.square = function () {
	return this.map((n) => n * n);
};

Array.prototype.cube = function () {
	return this.map((n) => n ** 3);
};

Array.prototype.sum = function () {
	return this.reduce((acc, n) => acc + n, 0);
};

Array.prototype.average = function () {
	if (this.length === 0) return NaN;
	return this.sum() / this.length;
};

Array.prototype.even = function () {
	return this.filter((n) => n % 2 === 0);
};

Array.prototype.odd = function () {
	return this.filter((n) => n % 2 !== 0);
};

/** Order words in string by a hidden order number within each word */
const order = (str) => {
	return str
		.split(" ")
		.sort((a, b) => a.match(/\d/) - b.match(/\d/))
		.join(" ");
};

/** Calculate the digital root (recursive sum of all the digits in a number), recursive implementation  */
const digitalRoot = (n) => {
	if (n < 10) return n;

	const digitsSum = n
		.toString()
		.split("")
		.map(Number)
		.reduce((sum, digit) => sum + digit, 0);

	return digitalRoot(digitsSum);
};

/** Calculate the digital root (recursive sum of all the digits in a number), iterative implementation  */
const digitalRootIt = (n) => {
	while (n >= 10) {
		n = n
			.toString()
			.split("")
			.map(Number)
			.reduce((sum, digit) => sum + digit, 0);
	}
	return n;
};

class Animal {
	constructor(name, age, legs, species, status) {
		this.name = name;
		this.age = age;
		this.legs = legs;
		this.species = species;
		this.status = status;
	}
	introduce() {
		return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
	}
}

// class Shark extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 0, "shark", status);
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, "cat", status);
//   }
//   introduce() {
//     return `${super.introduce()}  Meow meow!`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, "dog", status);
//     this.master = master;
//   }
//   greetMaster() {
//     return `Hello ${this.master}`;
//   }
// }

// class Cuboid {
//   constructor(length, width, height) {
//     this.length = length;
//     this.width = width;
//     this.height = height;
//   }
//   get volume() {
//     return this.length * this.width * this.height;
//   }
//   get surfaceArea() {
//     return (
//       2 *
//       (this.length * this.width +
//         this.length * this.height +
//         this.width * this.height)
//     );
//   }
// }

// class Cube extends Cuboid {
//   constructor(length) {
//     super(length, length, length);
//   }
// }

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
