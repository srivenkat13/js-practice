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
    string: stringArray,
  };
}
console.log(transformInput(input));

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

const inputArray = [1, 55, 156, 1, 1, 0, 1, 98];

const SumofMinMax = (input) => {
  if (input.length === 0) {
    return null;
  }
  const min = Math.min(...input);
  const max = Math.max(...input);

  return min + max;
};

console.log(SumofMinMax([]));
console.log(SumofMinMax(inputArray));

const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};

const AccessValues = (obj) => {
  const result = [];
  for (const key in obj) {
    if (key === "name" || key === "age") {
      result.push(obj[key]);
    }
  }
  return result;
};

console.log(AccessValues(person));

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = {
  b: 4,
  d: 5,
};

const ObjectMerger = (obj1, obj2) => {
  return {
    ...obj1,
    ...obj2,
  };
};
console.log(ObjectMerger(obj1, obj2));

const nestedObject2 = {
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
const personDetails = {
  personalInfo: {
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-01-01",
    gender: "Male",
  },
  contactInfo: {
    email: "john.doe@example.com",
    phone: {
      home: "123-456-7890",
      work: "987-654-3210",
    },
  },
  addresses: [
    {
      type: "home",
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      postalCode: "62701",
    },
    {
      type: "work",
      street: "456 Elm St",
      city: "Springfield",
      state: "IL",
      postalCode: "62702",
    },
  ],
  hobbies: ["reading", "hiking", "coding"],
};

const FlattenObject = (obj, parentKey = "", result = {}) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof value === "object") {
        FlattenObject(value, newKey, result);
      } else {
        result[newKey] = value;
      }
    }
  }
  return result;
};
console.log(FlattenObject(nestedObject2));
console.log(FlattenObject(personDetails));

const transactions = [
  { product: "Laptop", quantity: 2, amount: 1200 },
  { product: "Mouse", quantity: 5, amount: 50 },
  { product: "Laptop", quantity: 1, amount: 600 },
  { product: "Keyboard", quantity: 3, amount: 150 },
  { product: "Mouse", quantity: 2, amount: 20 },
];

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

console.log(Summarize(transactions));
