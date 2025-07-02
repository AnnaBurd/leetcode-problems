// Matrix Transpose | Codewars
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
