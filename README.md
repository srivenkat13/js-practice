
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

#### 2.