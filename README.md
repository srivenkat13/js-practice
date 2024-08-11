<details><summary>Table of Contents</summary>

 <h2>Table of Contents </h2>

- [Polyfills](#polyfills)
  - [1. map](#1-map)
  - [2. Filter](#2-filter)
  - [3. Reduce](#3-reduce)
  - [4. call bind apply](#4-call-bind-apply)
- [Objects](#objects)
  - [1. Transform the given input to output](#1-transform-the-given-input-to-output)
  - [2. Nested Object](#2-nested-object)
  - [3. Accessing Object Properties](#3-accessing-object-properties)
  - [4. Merging Objects](#4-merging-objects)
  - [5. Flattening a Nested Object](#5-flattening-a-nested-object)
  - [6. Merging and Summarizing Array of Objects](#6-merging-and-summarizing-array-of-objects)
  - [7. Checking Object Equality](#7-checking-object-equality)
  - [8. Counting Properties in an Object](#8-counting-properties-in-an-object)
  - [9. Swap keys to Values in an object](#9-swap-keys-to-values-in-an-object)
- [Arrays](#arrays)
  - [1. Sum of min-max](#1-sum-of-min-max)
  - [2. Two Sum](#2-two-sum)
- [Strings](#strings)
  - [1. Can form Palindrome](#1-can-form-palindrome)
  - [2. Check if Anagram](#2-check-if-anagram)
  - [3. Non repeating Character](#3-non-repeating-character)
  - [4. Find the most repeated character](#4-find-the-most-repeated-character)
</details>

### Polyfills
#### 1. map

```js
Array.prototype.myMap = function (cb) {
    let result =[]
    for(let i = 0; i < this.length ; i++) {
        result.push(cb(this[i],i,this))
    }
    return result
}
```

#### 2. Filter
```js
Array.prototype.myFilter = function (cb){
    
    let result = []
    for (let i = 0; i <this.length; i++){
        if(cb(this[i],i,this)) {
            result.push(this[i])
        }
    }
    return result
}
```

#### 3. Reduce
```js
Array.prototype.myReduce = function (cb,init) {
    let acc = init
    for (let i = 0; i < this.length; i++) {
        acc = acc? cb(acc,this[i],i,this)  : this[i]      
    }
    return acc
}
```
#### 4. call bind apply
<details><summary>.call()</summary>
<p>

```js
Function.prototype.MyCall = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(`${this} is not a function`);
  //if its not called on an Object
  if (typeof context !== "object") context = Object(context);

  context.fn = this;
  context.fn(...args);
};
function greet(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}
const user = { name: "venkat" };
greet.MyCall(user,'Hello','!') //Hello, venkat!
```
</p>
</details>

<details><summary>.apply()</summary>
<p>

```js
Function.prototype.MyApply = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(`${this} is not a function`);
   if (!Array.isArray(args)) {
    throw new Error(`CreateListFromArrayLike called on non-object`);
  }

  context.fn = this;
  context.fn(...args);
};
greet.MyApply(user,'Hello','!') //Hello, venkat!
```
</p>
</details>

<details><summary>.bind()</summary>
<p>

```js
Function.prototype.MyBind = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(`${this} is not a function`);
  
  context.fn = this;
  return function(...newArgs) {
    context.fn(...args,...newArgs);
  }
};
const newGreet = greet.MyBind(user,'Hello','!') 
newGreet() //Hello, venkat!
```
</p>
</details>

###  Objects
#### 1. Transform the given input to output

```js
const input = {
    array: [1, 34, 3, 7, 8, 9],
    object: {a: 1, b: 3, b: {d: 4, e: 5}},
    string: ['whatever']
};
```

```js
{
  array: [1, 3, 7, 8, 9, 34],
  object: ["a", "b", "d", "e"],
  string: [["w", "h", "a", "t", "e", "v", "e", "r"]]
}
```


<details><summary><b>Solution</b></summary>
<p>

```js
function transformInput(input) {
  const sortedArray = input.array.sort((a, b) => b - a);

  const extractKeys = (obj) => {
    const keys = [];
    for (const key in obj) {
      keys.push(key);
      if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
        keys.push(...extractKeys(obj[key]));
      }
    }
    return keys;
  };

  const objectKeys = extractKeys(input.object);

  const stringArray = input.string.map((str) => str.split(""));
  return {
    array: sortedArray,
    object: objectKeys,
    string : stringArray
  };
}
console.log(transformInput(input));
```

</p>
</details>

#### 2. Nested Object
 Given a deeply nested object as below, return all the key values 

``` js
const nestedObject = {
  level1: {
    level2: {
      level3a: {
        level4a: "value1",
        level4b: "value2",
      },
      level3b: {
        level4c: "value3",
      },
    },
    level2b: "value4",
  },
  level1b: "value5",
};
```

<details><summary><b>Solution</b></summary>

```js

const extractKeys = (obj) => {
  const keys = [];
  for (const key in obj) {
    keys.push(key);
    if (typeof obj[key] === "object") {
      keys.push(...extractKeys(obj[key]));
    }
  }
  return keys;
};

console.log(extractKeys(nestedObject));

\\output : [  'level1',  'level2',  'level3a', 'level4a',  'level4b', 'level3b',  'level4c', 'level2b',  'level1b']

```

</details>



#### 3. Accessing Object Properties
Given the following object, how would you access and print the values of the properties name and age?

```js
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
```

<details><summary><b>Solution</b></summary>

```js

const AccessValues = (obj) => {
  const result = [];
  for (const key in obj) {
    if (key === "name" || key === "age") {
      result.push(obj[key]);
    }
  }
  return result
};

console.log(AccessValues(person)); //['Alice' ,30]

```

</details>


#### 4. Merging Objects
You have two objects, obj1 and obj2. Write a function that merges these two objects into one. If both objects have a property with the same key, the value from obj2 should overwrite the value from obj1.

``` js
const obj1 = {
  a: 1,
  b: 2,
  c: 3
};

const obj2 = {
  b: 4,
  d: 5
};
```

<details><summary><b>Solution</b></summary>

```js
const ObjectMerger = (obj1, obj2) => {
  return {
    ...obj1,
    ...obj2
  }
}
console.log(ObjectMerger(obj1,obj2)) //{ a: 1, b: 4, c: 3, d: 5 }

```
</details>


#### 5. Flattening a Nested Object
Given a deeply nested object, write a function that flattens it into a single-level object. The keys of the flattened object should be the paths to the nested values, joined by dots.

```js
//input
const nestedObject = {
    level1: {
        level2: {
            level3a: {
                level4a: "value1",
                level4b: "value2"
            },
            level3b: {
                level4c: "value3"
            }
        },
        level2b: "value4"
    },
    level1b: "value5"
};
```

```js
//expected output
{
    "level1.level2.level3a.level4a": "value1",
    "level1.level2.level3a.level4b": "value2",
    "level1.level2.level3b.level4c": "value3",
    "level1.level2b": "value4",
    "level1b": "value5"
}

```
<details><summary><b>Solution</b></summary>

```js
const FlattenObject = (obj, parentKey = "", result = {}) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const newKey = parentKey ? `${parentKey}.${key}` : key
      if (typeof value  === "object"  ) {
        FlattenObject(value, newKey,result)
      }
      else{
        result[newKey] = value
      }
    }
  }
  return result;
};
console.log(FlattenObject(nestedObject));

```
</details>

#### 6. Merging and Summarizing Array of Objects

You have an array of objects where each object represents a sales transaction. Each transaction includes the product name, quantity sold, and the total amount. Your task is to merge these transactions and summarize the total quantity and amount for each product.

Input:
```js
const transactions = [
    { product: "Laptop", quantity: 2, amount: 1200 },
    { product: "Mouse", quantity: 5, amount: 50 },
    { product: "Laptop", quantity: 1, amount: 600 },
    { product: "Keyboard", quantity: 3, amount: 150 },
    { product: "Mouse", quantity: 2, amount: 20 }
];
```

<details><summary><b>Solution</b></summary>

```js
const Summarize = (arr) => {
  const result = [];
  arr.forEach((element) => {
    const { product, quantity, amount } = element;

    if (!result[product]) {
      result[product] = { totalAmount: 0, totalQuantity: 0 };
    }

    result[product].totalAmount += amount
    result[product].totalQuantity += quantity
  });

  return result;
  };

console.log(Summarize(transactions))
/*
      [
        Laptop: { totalAmount: 1800, totalQuantity: 3 },
        Mouse: { totalAmount: 70, totalQuantity: 7 },
        Keyboard: { totalAmount: 150, totalQuantity: 3 }
      ]
*/
```
</details>

#### 7. Checking Object Equality

You are given two objects, and you need to write a function that checks whether they are deeply equal. Two objects are considered deeply equal if they have the same properties with the same values, including nested objects.


<details><summary><b>Solution</b></summary>

``` js
const person1 = {
  name: "Alice",
  age: 30,
  address: {
    city: "Wonderland",
    postalCode: "12345",
  },
};

const person2 = {
  name: "Alice",
  age: 30,
  address: {
    city: "Wonderland",
    postalCode: "12345",
  },
};

const DeeplyEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!DeeplyEqual(obj1[key], obj2[key])) return false;
  }
  return true;
};

console.log(DeeplyEqual(person1, person2));

```
</details>

#### 8. Counting Properties in an Object
Write a function that counts the number of properties (key-value pairs) in a given object. The function should return the count as an integer.

```js
const exampleObject = {
  name: "Alice",
  age: 30,
  profession: "Engineer"
};
```

<details><summary><b>Solution</b></summary>

```js
const countProperties = (obj) => {
  return Object.keys(obj).length;
};

console.log(countProperties(exampleObject)) //3
```

</details>

#### 9. Swap keys to Values in an object

```js
const exampleObject = {
  name: "Alice",
  age: 30,
  };
```

<details><summary><b>Solution</b></summary>

```js
const SwapKeysToValues = (obj) => {
  const newObject = {};
  for (let key in obj) {
    if (newObject.hasOwnProperty(obj[key])) {
      return "Duplicate Value found";
    }
    newObject[obj[key]] = key;
  }
  return newObject;
};
console.log(SwapKeysToValues(exampleObject)) 
```

</details>

###  Arrays
#### 1. Sum of min-max 
 Given an array return the sum of min and max from the array

``` js
const inputArray = [1,55,156,1,1,0,1,98]

```

<details><summary><b>Solution</b></summary>

```js

const SumofMinMax = (input) => {
  if(input.length === 0){
   return null
  }
  const min = Math.min(...input)
  const max = Math.max(...input)

  return min+max
}

console.log(SumofMinMax([])); \\null
console.log(SumofMinMax(inputArray)); \\156

```
</details>

#### 2. Two Sum
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example :

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

<details><summary><b>Solution</b></summary>

```js
//Brute Force
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};
// Hashmap- O(n)
var twoSum = function (nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i]
        if (map.hasOwnProperty(difference)) {
            return [map[difference],i]
        }
        map[nums[i]] = i
    }
};
console.log(twoSum([1,2,3,4,5],3)); \\[0,1]

```
</details>

### Strings
#### 1. Can form Palindrome 
Write a function CanFormPalindrome(str) that takes a single string parameter and returns "true" if the characters of the string can be rearranged to form a palindrome, and "false" otherwise. A palindrome is a word that reads the same backward as forward. Consider only alphanumeric characters and ignore case.

<details><summary><b>Solution</b></summary>

``` js
function CanFormPalindrome(str) {
  const charactersCount = {};
  for (let char of str) {
    char = char.toLowerCase()
    charactersCount[char] = (charactersCount[char] || 0) + 1;
  }

  let oddCount = 0;
  for (let char in charactersCount) {
    if (charactersCount[char] % 2 !== 0) oddCount++;
  }
  return oddCount <= 1;
}

console.log(CanFormPalindrome("Namaste")); //false
console.log(CanFormPalindrome("Madam")); //true

```

</details>

#### 2. Check if Anagram
Create a function AnagramCheck(str1, str2) that takes two string parameters and returns "true" if the two strings are anagrams of each other, and "false" otherwise. An anagram is a word or phrase formed by rearranging the letters of another, using all the original letters exactly once. The function should be case-insensitive and ignore spaces.

<details><summary><b>Solution</b></summary>

``` js
function isAnagram(str_one, str_two) {
  const sortedStrOne = str_one.toLowerCase().split("").sort().join('')
  const sortedStrTwo = str_two.toLowerCase().split("").sort().join('')

  return sortedStrOne === sortedStrTwo;
}

console.log(isAnagram("Namaste", "World")); //false
console.log(isAnagram("Hero", "Oreh")); //true
```

</details>

#### 3. Non repeating Character
Create a function FirstNonRepeatingCharacter(str) that takes a string and returns the first non-repeating character. If there is no such character, return an empty string.

<details><summary><b>Solution</b></summary>

``` js
function FirstNonRepeatingChar(str) {
  const charCount = {};
  for (let char of str) {
    char = char.toLowerCase();
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for( let char of str){
    if(charCount[char] === 1) return char
  }
  return ""
}
console.log(FirstNonRepeatingChar('swiss')) //w
console.log(FirstNonRepeatingChar('ababababax')) //x
console.log(FirstNonRepeatingChar('yolloy')) //""

// Alternate 
function RemoveDuplicatesTwo(str) {
  let uniqueChar = new Set(str.toLowerCase());
  return [...uniqueChar].join("");
}
//Preserving the order and for senteces 

function RemoveDuplicatesInOrder(str) {
  const seen = new Set();
  const result = [];

  for (let char of str.toLowerCase()) {
    if (char.match(/[a-z]/) && !seen.has(char)) {
      seen.add(char);
      result.push(char);
    } else if(char === ' ')
    result.push(char)
  }
  return result.join('')
```
</details>

#### 4. Find the most repeated character 

<details><summary><b>Solution</b></summary>

``` js
const str = "hey there welcome";

function MostFrequentLetter(str) {
  let charCount = {};
  for (let char of str) {
    if (char !== " ") {
      char = char.toLowerCase();
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }
  let maxCount = 1;
  let mostFrequentChar = "";
  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      mostFrequentChar = char;
    }
  }
  return mostFrequentChar;
}
console.log(MostFrequentLetter(str));//e

```
