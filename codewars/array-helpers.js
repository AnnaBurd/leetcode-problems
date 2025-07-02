// Array Helpers | Codewars
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
