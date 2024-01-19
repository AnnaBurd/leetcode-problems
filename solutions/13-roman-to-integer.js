/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const biddings = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
    ["IV", 4],
    ["IX", 9],
    ["XL", 40],
    ["XC", 90],
    ["CD", 400],
    ["CM", 900],
  ]);

  let res = 0;
  for (let i = 0; i < s.length; i++) {
    const val = biddings.get(s.slice(i, i + 2));
    if (val) {
      res += val;
      i++;
    } else {
      res += biddings.get(s[i]);
    }
  }
  return res;
};

console.log(romanToInt("MCMXCIV"));

/// Better way - compare with prev numbers, knowing the specifics of Roman numerics
const romanToInt2 = function (s) {
  const romanSymbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = 0;
  for (let i = 0; i < s.length; i++) {
    romanSymbols[s[i]] < romanSymbols[s[i + 1]]
      ? (res -= romanSymbols[s[i]])
      : (res += romanSymbols[s[i]]);
  }

  return res;
};

console.log(romanToInt2("MCMXCIV"));

// Another idea - replace corner cases first
const romanToInt3 = function (s) {
  const romanSymbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let res = s
    .replace("IV", "IIII")
    .replace("IX", "VIIII")
    .replace("XL", "XXXX")
    .replace("XC", "LXXXX")
    .replace("CD", "CCCC")
    .replace("CM", "DCCCC")
    .split("")
    .reduce((acc, s) => acc + romanSymbols[s], 0);

  return res;
};

console.log(romanToInt3("MCMXCIV"));
