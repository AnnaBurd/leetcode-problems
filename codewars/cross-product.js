// Cross Product of Vectors | Codewars
/** Calculate the cross product of two vectors in 3D space */
const crossProduct = (vector1, vector2) => {
	if (!Array.isArray(vector1) || !Array.isArray(vector2) || vector1.length !== 3 || vector2.length !== 3) {
		throw "Arguments are not 3D vectors!";
	}
	const [x1, y1, z1] = vector1;
	const [x2, y2, z2] = vector2;
	return [y1 * z2 - z1 * y2, z1 * x2 - x1 * z2, x1 * y2 - y1 * x2];
};
