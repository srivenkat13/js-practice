/*
 * this is just to run the code
 */

/*
  
 */

const isHundred = (a, b) => a === 100 || b === 100 || a + b === 100;
console.log(isHundred(20, 29));
console.log(isHundred(19, 100));
console.log(isHundred(20, 80));

/* 
Exercise 2:
Write a JavaScript exercise to get the extension of a filename 
*/
const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(getFileExtension("style.css"));
console.log(getFileExtension("readme.md"));
console.log(getFileExtension("webpack.config.js"));

/*
Write a JavaScript program to replace every character in a given string with the character
following it in the alphabet 
 */
const replaceByNextChar = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");
console.log(replaceByNextChar("Venkat sai raj"));
console.log(replaceByNextChar("xyz"));

/* Exercise 4:
Write a JavaScript program to get the current date.
Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */

const formatDate = (date = new Date()) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
console.log(formatDate());

/* 
Exercise 5:
Write a JavaScript program to create a new string adding "New!" in front of a given string. If
the given string begins with "New!" already then return the original string. */

const addNew = (str) => (str.indexOf("New!") == 0 ? str : `New! ${str}`);

console.log(addNew("Dress"));
console.log(addNew("New! offer"));

/* Exercise 6:
Write a JavaScript program to create a new string from a given string taking the first 3
characters and last 3 characters and add them. The string length must be 3 or more, if
not, the original string is returned */

const createString = (str) =>
  str.length <= 3 ? str : `${str.slice(0, 3)}${str.slice(-3)}`;

console.log(createString("abc123"));
console.log(createString("as"));
console.log(createString("venkatsairaj"));
console.log(createString("1234daf1234"));

/* 
Exercise 7:
Write a JavaScript program to extract the first half of a string of even length.
*/

const firstHalfOfString = (str) => str.slice(0, str.length / 2);

console.log(firstHalfOfString("venkat"));
console.log(firstHalfOfString("madam"));
console.log(firstHalfOfString("tomatos"));

/* 
Exercise 8:
Write a JavaScript program to concatenate two strings except their first character
*/
const concatExtFirst = (str1, str2) => str1.slice(1) + str2.slice(1);

console.log(concatExtFirst("Junior", "developer"));
console.log(concatExtFirst("Tom", "Jerry"));
console.log(concatExtFirst("Jack", "Rose"));

/* 
Exercise 9:
Given two values, write a JavaScript program to find out which one is nearest to 100
*/

const closeTo100 = (a, b) => (100 - a < 100 - b ? a : b);

console.log(closeTo100(50, 99.9));

/* 
Exercise 10:
Write a JavaScript program to check a given string contains 2 to 4 occurrences of a specified
character
*/

const countChars = (str, char) =>
  str.split("").filter((ch) => ch === char).length;

const contains2to4 = (str, char) =>
  countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2to4("hahhahha", "a"));
console.log(contains2to4("ooooh", "o"));
console.log(contains2to4("ooooooh", "o"));
console.log(contains2to4("oh", "o"));

/* 
Exercise 11:
Write a JavaScript program to find the number of even digits in a an array of integers

*/

const countEvenDigits = (arr) => arr.filter((num) => num % 2 === 0).length;

console.log(countEvenDigits([9, -97, 1, 11, 2]));
console.log(countEvenDigits([0, 22, 35, 12, 12]));
console.log(countEvenDigits([2, 4, 6, 8]));

/* 
Exercise 12:
Write a JavaScript program to find the number of even values up to a given number

*/

const evenUpto = (num) => parseInt(num / 2);

console.log(evenUpto(22));

// or an long solution ( one can also consider "0" and add +1 to result)

const createArrayofNum = (num) => {
  const returnArray = [];
  for (let i = 1; i <= num; i++) {
    returnArray.push(i);
  }
  return returnArray;
};
console.log(countEvenDigits(createArrayofNum(22)));

/* 
Exercise 13:
Write a JavaScript program to check whether a given array of integers is sorted in ascending
order

*/

const isAscending = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) return false;
  }
  return true;
};

console.log(isAscending([1, 2, 3, 4, 5, 5]));
console.log(isAscending([1, 2, 3, 5, 2, 5]));
console.log(isAscending([1, 2, 3, 4, 5, 9]));

/* Exercise 14:
Write a JavaScript program to get the largest even number from an array of integers 
*/
const largestEvenNum = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));

console.log(largestEvenNum([9, 34, 3]));
console.log(largestEvenNum([2, 66, 55, 32, 8]));

/* Exercise 15:
Write a JavaScript program to replace the first digit in a string (should contain at least one
digit) with a $ character.
 */
const convertFirstDig = (str) => str.replace(/\d/, "$");
// "d" means digit will match for first digit present
// /[0-9]/ will also do the same job
// /[0-9]/g will replace all the digits "g" means global in RegEx

console.log(convertFirstDig("akjfa3nlk23"));
console.log(convertFirstDig("12kjkfahf432"));
console.log(convertFirstDig("ajkfhk455opunkj"));
console.log(convertFirstDig("12309327104843"));

/* 
Exercise 16:
Given a year, report if it is a leap year
*/

const isLeap = (year) =>
  year % 4 === 0
    ? year % 100 === 0
      ? year % 400 === 0
        ? true
        : false
      : true
    : false;

console.log(isLeap(2020));
console.log(isLeap(1600));
console.log(isLeap(1900));

/* 
Exercise 2:
Write a JavaScript program to compare two objects to determine if the first one contains
the same properties as the second one (which may also have additional properties). For
example, objA and objB are equal (but not equal to objC).
const objA = { a: 1, b: 1, c: 1 };
const objB = { a: 1, b: 1, c: 1 };
const objC = { a: 1, b: 1, d: 1 };

*/

const objA = { a: 1, b: 1, c: 1 };
const objB = { a: 1, b: 1, c: 1 };
const objC = { a: 1, b: 1, d: 1 };

const objectsIsEqual = (a, b) => Object.keys(a).every((key) => b[key]);
console.log(objectsIsEqual(objA, objB));
console.log(objectsIsEqual(objA, objC));

/* Exercise 3:
Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array.
A new line indicates a new row in the array. Example input:
abc,def,ghi
jkl,mno,pqr
stu,vwx,yza
 */

const parseCSV = (csvString) =>
  csvString.split("\n").map((row) => row.split(","));

const csvString = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;

console.log(parseCSV(csvString));

/* Exercise 4:
Write a JavaScript program to generate a random hexadecimal color code.
 */

const generateHexNum = () => Math.floor(Math.random() * 16).toString(16);

const generateRandomHex = () =>
  "#" + Array.from({ length: 6 }).map(generateHexNum).join("");

console.log(generateRandomHex());

/* Exercise 5:
Write a JavaScript function that returns true if the provided predicate function returns true
for all elements in a collection, false otherwise.
 */

console.log([1, 2, 3, 4, 6].every((x) => x > 0));
console.log([2, 4, 6, 8, 10].every((x) => x % 2 === 0));

const isEveryElem = (arr, fn) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (!fn(arr[i])) return false;
  }
  return true;
};

console.log(isEveryElem([2, 2, 2, 2, 2], (x) => x === 2));

/* 
Exercise 1:
Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string: 'webmaster'
Expected Output: 'abeemrstw'
*/

const inAlphabeticOrder = (str) => str.split("").sort().join("");
console.log(inAlphabeticOrder("hadcfbeg"));
console.log(inAlphabeticOrder("webmaster"));

/* 
Exercise 2:
Write a JavaScript function that accepts a string as a parameter and counts the number of
vowels within the string.
*/

// const numberOfVowels = (str)=> str
//   .split("")
//   .filter((el) => /[aeiou]/.test(el)).length;

const numberOfVowels = (str, letters = ["a", "e", "i", "o", "u"]) =>
  str.split("").filter((c) => letters.indexOf(c) > -1).length;

console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("iloveyou"));
console.log(numberOfVowels("ihateyou"));
console.log(numberOfVowels("venkatsairaj", ["c"]));
console.log(numberOfVowels("aireoia"));

/* 
Exercise 3:
Write a JavaScript function to convert an amount to coins.
Example input: 46 and possible coins 25, 10, 5, 2, 1
Output: 25, 10, 10, 1
*/

const convertToCoins = (amount, coins = [25, 10, 5, 2, 1]) => {
  const totalCoins = [];
  for (let i = 0; i < coins.length; i++) {
    const thisCoin = Math.floor(amount / coins[i]);
    for (let j = 0; j < thisCoin; j++) {
      totalCoins.push(coins[i]);
    }
    amount -= coins[i] * thisCoin;
  }
  return totalCoins;
};

console.log(convertToCoins(46));
console.log(convertToCoins(52));
console.log(convertToCoins(78));

/* 
Exercise 4;
Write a JavaScript function to extract unique characters from a string
*/

// const getUniqueCharacter = (str) => new Set(str.split(""));

const getUniqueCharacter = (str) =>
  str
    .split("")
    .filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1);

console.log(getUniqueCharacter("aabbdsfsdfasdfasfref"));
console.log(getUniqueCharacter("1346894313498").join(""));

/* Exercise 5:
Write a JavaScript function to find the first not repeated character
Example string: 'abacddbec'
Expected output: 'e' 
*/

const firstNotRepeated = (str) =>
  str
    .split("")
    .filter(
      (item, index, arr) =>
        arr.filter((arrItem) => arrItem === item).length === 1
    );

console.log(firstNotRepeated("ababababde"));
