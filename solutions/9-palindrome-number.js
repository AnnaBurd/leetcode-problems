////////////////////////////////
//  Convert the number into string, and check if the string is a palindrome
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const str = x.toString();

  for (let i = 0, j = str.length - 1; i < str.length / 2; i++, j--) {
    if (str[i] !== str[j]) return false;
  }

  return true;
};

////////////////////////////////
// Without string
const isPalindrome2 = function (x) {
  if (x < 0) return false;

  //   let q = x % 10;

  //   let r = (x - (x % 10)) / 10;
  //   let r = ~~(a / b); (bitwise for 32-bit integers)
  //   let r = Math.trunc(x / 10);

  // Note - in JS Number.MAX_SAFE_INTEGER ~ 2^53 – 1 =>
  // (±9,007,199,254,740,991)
  // So no need to invert only half of the number
  // Because by problem condition numbers are up to 2^31-1
  let revertedHalf = 0;

  while (x > revertedHalf) {
    revertedHalf = revertedHalf * 10 + (x % 10);

    x = Math.trunc(x / 10);

    console.log(`X = ${x} reverted half = ${revertedHalf}`);
  }

  // Keep in mind even and odd number of numbers (121 vs 1221)
  return x === revertedHalf || x === Math.trunc(revertedHalf / 10);
};

// console.log(isPalindrome2(1331));
