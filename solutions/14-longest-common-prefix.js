/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  const firstString = strs[0];
  const leftStrings = strs.slice(1, strs.length);

  let prefixLength = 0;

  for (let i = 0; i < firstString.length; i++) {
    const letter = firstString[i];
    const differentString = leftStrings.find((str) => str[i] !== letter);

    if (typeof differentString === "string") {
      break;
    }
    prefixLength++;
  }

  return firstString.slice(0, prefixLength);
};

// Test results:
const strs = ["ccadog", "caracecar", "cacar"];
console.log("Longest Common Prefix: ", longestCommonPrefix(strs));

const strs2 = ["ccadog", "caracecar", "cacar", ""];
console.log("Longest Common Prefix: ", longestCommonPrefix(strs2));

/// Another options:
// Horizontal Scanning ---------------------------
// Find longest common prefix between two strings, and reduce it at each iteration (the same worst case but worse best case)

// Divide and conquer (in fact longer in JS) --------------------

const longestCommonPrefix_v2 = function (strs) {
  if (!strs || strs.length === 0) return "";

  return helper(strs, 0, strs.length - 1);
};

const helper = (strs, l, r) => {
  // Base case - only 1 string
  if (l === r) return strs[l];

  const mid = Math.floor((l + r) / 2);

  console.log(
    `Split search at ${mid} element, into [${strs
      .slice(0, mid + 1)
      .join(", ")}] and [${strs.slice(mid + 1).join(", ")}]`
  );

  const leftLCP = helper(strs, l, mid);
  const rightLCP = helper(strs, mid + 1, r);

  return commonPrefix(leftLCP, rightLCP);
};

const commonPrefix = (str1, str2) => {
  let prefLength = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) break;
    prefLength++;
  }
  return str1.slice(0, prefLength);
};

const strs_v2 = ["ccadog", "caracecar", "cacar"];
console.log("Longest Common Prefix: ", longestCommonPrefix_v2(strs_v2));

// Binary Search -------------------------------
const longestCommonPrefix_v3 = function (strs) {
  const minStringLength = strs.reduce(
    (min, str) => (str.length < min ? str.length : min),
    Infinity
  );

  // Potential LCP length is in the interval [l, r] :
  let l = 0;
  let r = minStringLength;

  // Binary search

  while (l < r) {
    let m = Math.floor((l + r) / 2);
    let substr = strs[0].slice(l, m + 1);

    // Find if the substring [l=0, m] is common between all strings:

    const differentString = strs.find((str) => !str.startsWith(substr));

    if (typeof differentString === "string") {
      // Some string is different, move search interval to left
      r = m - 1;
    } else {
      // All strings have this common substring, move search interval to right
      l = m + 1;
    }
  }

  console.log(l, r);
  return strs[0].slice(0, r);
};

// Test results:
const strs_v3 = ["cbaa", "caaa", "ca"];
console.log("Longest Common Prefix (bs): ", longestCommonPrefix_v3(strs_v3));
