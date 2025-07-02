// Fun with ES6 Classes #3 - Cuboids, Cubes and Getters | Codewars
class Cuboid {
	constructor(length, width, height) {
		this.length = length;
		this.width = width;
		this.height = height;
	}
	get volume() {
		return this.length * this.width * this.height;
	}
	get surfaceArea() {
		return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
	}
}

class Cube extends Cuboid {
	constructor(length) {
		super(length, length, length);
	}
}
