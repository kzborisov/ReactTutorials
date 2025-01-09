const arr = [1, 2, 3, 4, 5, 6];
const sum = arr.reduce((acc, num) => acc + num, 0);

console.log(sum);

const fruits = ["apple", "banana", "apple", "kiwi"];

const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});

console.log(fruitCount);
