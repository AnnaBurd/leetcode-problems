// Three line file input:
const fs = require("fs");
const fileContent = fs.readFileSync("input.txt", "utf8");

const [line_1, line_2, line_3] = fileContent.toString().split("\n");

// Solution
const goalsMatch1 = line_1.toString().split(":").map(Number);
const goalsMatch2 = line_2.toString().split(":").map(Number);
const firstMatchHomeTeam = Number(line_3.toString());

const goalsLeftForFirstTeam = (
	goalsFirstMatch,
	goalsCurrentMatch,
	firstMatchHomeTeam,
) => {
	const isFirstMatchAtHome = firstMatchHomeTeam === 1;

	const totalGoalsTeam1 = goalsFirstMatch[0] + goalsCurrentMatch[0];
	const totalGoalsTeam2 = goalsFirstMatch[1] + goalsCurrentMatch[1];

	if (totalGoalsTeam1 > totalGoalsTeam2) return 0;

	const guestGoalsTeam1 = isFirstMatchAtHome
		? goalsCurrentMatch[0]
		: goalsFirstMatch[0];
	const guestGoalsTeam2 = isFirstMatchAtHome
		? goalsCurrentMatch[1]
		: goalsFirstMatch[1];

	if (guestGoalsTeam1 > guestGoalsTeam2 && totalGoalsTeam1 === totalGoalsTeam2)
		return 0;

	const goalsLeftToDrawTotal = totalGoalsTeam2 - totalGoalsTeam1;
	const goalsLeftToWinGuest = guestGoalsTeam2 - guestGoalsTeam1 + 1;

	let goalsLeftToWin;

	if (isFirstMatchAtHome) {
		goalsLeftToWin =
			goalsLeftToWinGuest <= goalsLeftToDrawTotal
				? goalsLeftToDrawTotal
				: goalsLeftToDrawTotal + 1;
	}

	if (!isFirstMatchAtHome) {
		goalsLeftToWin =
			goalsLeftToWinGuest <= 0
				? goalsLeftToDrawTotal
				: goalsLeftToDrawTotal + 1;
	}

	return goalsLeftToWin;
};

const result = goalsLeftForFirstTeam(
	goalsMatch1,
	goalsMatch2,
	firstMatchHomeTeam,
);

// File output:
fs.writeFileSync("output.txt", result.toString());

describe("B. Футбольный комментатор", () => {
	it("should return the correct result when score is equal", () => {
		const result = goalsLeftForFirstTeam([0, 0], [0, 0], 1);
		expect(result).toEqual(1);
	});

	it("should return the correct result when score is losing and first match is at home", () => {
		const result = goalsLeftForFirstTeam([0, 2], [0, 3], 1);
		expect(result).toEqual(5);
	});

	it("should return the correct result when score is losing and first match is at guest", () => {
		const result = goalsLeftForFirstTeam([0, 2], [0, 3], 2);
		expect(result).toEqual(6);
	});
});
