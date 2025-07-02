// Calculating with Functions | Codewars
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
