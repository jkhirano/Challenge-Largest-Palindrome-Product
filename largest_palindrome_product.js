/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here

  function checkPalindrome(num) {
    let numToString = num.toString();
    const reverse = numToString
      .split("")
      .reverse()
      .join("");

    return numToString === reverse;
  }

  for (let i = 10 ** (digits - 1); i < 10 ** digits; i++) {
    for (let j = 10 ** (digits - 1); j < 10 ** digits; j++) {
      if (checkPalindrome(i * j)) {
        if (i * j > palindromeNumber) {
          palindromeNumber = i * j;
          factor_0 = i;
          factor_1 = j;
        }
      }
    }
  }

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
