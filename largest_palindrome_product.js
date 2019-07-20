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

  // 1. check if number is palendrome:
  // create var = num
  // create function to reverse digits of num, then compare reverse version of num with num
  // if same, return true, if not, return false

  // let n = num;
  // let rev = 0;

  // while (num > 0) {
  //   let r = n % 10;
  //   rev = rev * 10 + r;
  //   n = n / 10;
  // }
  // return num == rev;

  function checkPalindrome(num) {
    let numToString = num.toString();
    const reverse = numToString
      .split("")
      .reverse()
      .join("");

    return numToString === reverse;
  }

  console.log(checkPalindrome(12321));
  console.log(checkPalindrome(12341));

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
