function isPalindrome(word) {
  // Write your algorithm here
  let palindrome = reverseWord(word)
  
  return palindrome === word
}

function reverseWord(word){
  let splitWord = word.split("")
  let reverseWord = splitWord.reverse()
  return reverseWord.join("")
}
/* 
  Add your pseudocode here
  splits input into individual array elements
  reverses the array
  joins individual elements into single string
  compares new string to original inputed word
  returns true if variables are the same
  returns false if variables are different
*/

/*
  Add written explanation of your solution here
  .split() creates individual elements for each character in the string
  .reverse() reverses the array
  .join puts each element in the array into new array of one string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
