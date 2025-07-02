// Single line file input:
// const fs = require("fs");
// let fileContent = fs.readFileSync("input.txt", "utf8");

// Two line file input:
const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");

const [line_1, line_2] = fileContent.toString().split("\n");

// Solution
const [center_1, radius_1] = line_1.toString().split(" ").map(Number);
const [center_2, radius_2] = line_2.toString().split(" ").map(Number);

const countTrees = (center_1, radius_1, center_2, radius_2) => {
	const interval_1 = [center_1 - radius_1, center_1 + radius_1];
	const interval_2 = [center_2 - radius_2, center_2 + radius_2];

	const intersectionInterval = [
		Math.max(interval_1[0], interval_2[0]),
		Math.min(interval_1[1], interval_2[1]),
	];
	const hasIntersection = intersectionInterval[0] <= intersectionInterval[1];

	const interval_1_Length = interval_1[1] - interval_1[0] + 1;
	const interval_2_Length = interval_2[1] - interval_2[0] + 1;
	const intersectionLength = hasIntersection
		? intersectionInterval[1] - intersectionInterval[0] + 1
		: 0;

	return interval_1_Length + interval_2_Length - intersectionLength;
};

const result = countTrees(center_1, radius_1, center_2, radius_2);

// File output:
fs.writeFileSync("output.txt", result.toString());

// Cli input and output:
// const sumcli = (data) => {
//   const [a, b] = data.toString().split(" ");
//   return +a + +b;
// };
// let cnt, res;
// process.stdin.on("data", (data) => {
//   res = sumcli(data);
//   process.stdout.write(res + "");
//   process.exit();
// });
