<details><summary>Table of Contents</summary>

 <h2>Table of Contents </h2>

- [Objects](#objects)
- [1. Transform the given input to output](#1-transform-the-given-input-to-output)
- [2. Nested Object](#2-nested-object)
- [3. Sum of min-max](#3-sum-of-min-max)
- [4. Accessing Object Properties](#4-accessing-object-properties)
- [5. Merging Objects](#5-merging-objects)
- [6. Flattening a Nested Object](#6-flattening-a-nested-object)
- [7. Merging and Summarizing Array of Objects](#7-merging-and-summarizing-array-of-objects)
</details>

####  Objects
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

#### 3. Sum of min-max 
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

#### 4. Accessing Object Properties
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


#### 5. Merging Objects
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


#### 6. Flattening a Nested Object
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

#### 7. Merging and Summarizing Array of Objects

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