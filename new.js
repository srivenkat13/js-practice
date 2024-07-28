const input = {
  array: [0, 5, 598, 5645, 8779],
  object: {
    a: 1,
    b: 3,
    c: { c1: 4, c2: 5 },
    d: { d1: 1, d2: 2, d3: 3, d4: 6 },
  },
  string: ["what ever"],
};

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
