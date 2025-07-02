// Can Santa save Christmas? | Codewars
/** Return the total time in seconds for array of HH:MM:SS strings */
const calcTotalDuration = (durations) => {
	let totalDuration = 0;
	durations.forEach((duration) => {
		const [hours, minutes, seconds] = duration.split(":").map(Number);
		totalDuration += hours * 3600 + minutes * 60 + seconds;
	});
	return totalDuration;
};
