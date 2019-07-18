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
  var palinedromeArray = [];
  var digitObj = {
    1: [1, 9],
    2: [10, 100],
    3: [100, 1000],
    4: [1000, 10000],
    5: [10000, 100000]
  };

  let digitsOfPalindrome = digits;
  let generatePalindromeNumbers;

  for (
    let i = digitObj[digitsOfPalindrome][0];
    i < digitObj[digitsOfPalindrome][1];
    i++
  ) {
    for (
      let j = digitObj[digitsOfPalindrome][0];
      j < digitObj[digitsOfPalindrome][1];
      j++
    ) {
      generatePalindromeNumbers = i * j;
      checkPalindrome(generatePalindromeNumbers);
    }
  }
  function checkPalindrome(answer) {
    var str = answer.toString();
    var reverseString = str
      .split("")
      .reverse()
      .join("");
    if (str === reverseString) {
      return true;
    }
  }

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
