// Can Santa save Christmas? | Codewars
/** Return true if total time for array of HH:MM:SS strings is less or equal to 24 hours */
// const calcTotalDuration = require('./calc-total-duration');
const determineTime = (durations) => {
	const maxDuration = 24 * 60 * 60;
	// You may need to define or import calcTotalDuration if used
	const requiredDuration = durations.reduce((total, duration) => {
		const [hours, minutes, seconds] = duration.split(":").map(Number);
		return total + hours * 3600 + minutes * 60 + seconds;
	}, 0);
	return requiredDuration <= maxDuration;
};
