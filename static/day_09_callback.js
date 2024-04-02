/* Example
const callback = (n) => {
  return n ** 2;
};
function cube(callback, n) {
  return callback(n) * n;
}
console.log(cube(callback, 3));
*/
/* Example
// Higher order function returning an other function
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));
*/
/* Example
const numbers = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let sum = 0;
  // way traditional
  //   for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i]
  //   }
  // way callbacks
  //   const callback = function(element) {
  //     sum += element
  //   }
  //   arr.forEach(callback)
  // way instead of callback
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};
console.log(sumArray(numbers));
*/
/* Example
function sayHello() {
  console.log("Hello");
}
setInterval(sayHello, 1000); // it prints hello in every second, 1000ms is 1s
 */
/* Example
function sayHello() {
  console.log("Hello");
}
setTimeout(sayHello, 2000); // it prints hello after it waits for 2 seconds.
 */
/* FOREACH
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => (sum += num));
console.log(sum);
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
countries.forEach((element) => console.log(element.toUpperCase()));
*/
/*
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const numbers = [1, 2, 3, 4, 5];
const numbersSquare = numbers.map((num) => num * num);
console.log(numbersSquare);
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const namesToUpperCase = names.map((name) => name.toUpperCase());
console.log(namesToUpperCase);
const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);
const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
);
console.log(countriesFirstThreeLetters);
*/
/* FILTER
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);
const countriesEndsByia = countries.filter((country) => country.endsWith("ia"));
console.log(countriesEndsByia);
const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
);
console.log(countriesHaveFiveLetters);
const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)
*/
/* REDUCE
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)
*/
/* EVERY
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?
console.log(areAllStr)
const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // Are all true? 
console.log(areAllTrue)
*/
/* FIND
const ages = [24, 22, 25, 15, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log(age)
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names.find((name) => name.length > 7)
console.log(result)
const score = scores.find((user) => user.score > 80)
console.log(score)
*/
/* FIND INDEX
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]
const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0
const age = ages.findIndex((age) => age < 20)
console.log(age) // 5
*/
/* SOME
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]
const areSomeTrue = bools.some((b) =>  b === true)
console.log(areSomeTrue) //true
const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr) // false
*/
/* SORT
// Sorting string values:
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
// Sorting Numeric values:
const numbers = [9.81, 3.14, 100, 37];
console.log(numbers.sort()); //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers); // [3.14, 9.81, 37, 100]
numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers); //[100, 37, 9.81, 3.14]
// Sorting Object Arrays:
// Example 1
const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];
users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users); // sorted ascending
// Example 2
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];
// sort by value
items.sort((a, b) => a.value - b.value);
console.log(items); // sorted ascending
// sort by name
items.sort((a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});
console.log(items); // sorted alphabetically
*/
/*
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Exercises: Level 1
// 2. Define a callback function before you use it in forEach, map, filter or reduce.
const printCountry = countries.forEach((country) => console.log(country));
const printName = names.forEach((name) => console.log(name));
const printNumber = numbers.forEach((number) => console.log(number));

const printUppercaseCountry = countries.map((country) => country.toUpperCase());
console.log(printUppercaseCountry);
const printCountryLength = countries.map((country) => country.length);
console.log(printCountryLength);
const printSquareNumber = numbers.map((n) => n * n);
console.log(printSquareNumber);
const printUppercaseName = names.map((name) => name.toUpperCase());
console.log(printUppercaseName);
const product = products.map(
  (product) => `${product.product}-${product.price}`
);
console.log(product);

const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);
const countriesHaveSixLetters = countries.filter(
  (country) => country.length === 6
);
console.log(countriesHaveSixLetters);
const countriesHaveSixMoreLetters = countries.filter(
  (country) => country.length >= 6
);
console.log(countriesHaveSixMoreLetters);
const nameStartByE = names.filter((name) => name.startsWith("E"));
console.log(nameStartByE);
const productHavePrice = products.filter((product) => product.price > 0);
console.log(productHavePrice);

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const mixArr = ["Asabeneh", "Mathias", 2, 3, "Elias", "Brook", 1, 4];
const getStringLists = function (array) {
  return array.filter((item) => typeof item === "string");
};
console.log(getStringLists(mixArr));

const sumNumber = numbers.reduce((sum, item) => sum + item);
console.log(sumNumber);

const concatCountries = countries.reduce((countries, item) => countries +', '+ item);
console.log(concatCountries + 'are north European countries.');

const checkNameLength = names.some((name) => name.length > 7);
console.log(checkNameLength);

const checkNameHaveLand = countries.every((country) => country.includes("land"));
console.log(checkNameHaveLand);

const checkCountryHaveSixLetter = countries.find((country) => country.length > 6)
console.log(checkCountryHaveSixLetter)

const checkIndexCountryHaveSixLetter = countries.findIndex((country) => country.length > 6)
console.log(checkIndexCountryHaveSixLetter)

const checkIndexCountryNorway = countries.findIndex((country) => country === "Norway")
console.log(checkIndexCountryNorway)

const checkIndexCountryRussia = countries.findIndex((country) => country === "Russia")
console.log(checkIndexCountryRussia)
*/
/*
// Exercises: Level 2
// 1. Find the total price of products by chaining two or more array iterators
const totalPrice = products
  .filter((p) => p.price > 0)
  .map((p) => p.price)
  .reduce((sum, p) => sum + p);
console.log(totalPrice);

// 2. Find the sum of price of products using only reduce reduce(callback))
const reducedPrice = products.reduce(function (acc, obj) {
  if (typeof obj.price !== "number") {
    obj.price = Number(obj.price);
  }
  return acc + obj.price;
}, 0);
console.log(reducedPrice);
*/
// 3. Declare a function called categorizeCountries
// which returns an array of countries which have some common pattern
// (you find the countries array in this repository as countries.js
import { countries } from "./countries.js";
const importCountries = countries;

const categoriesCountries = function (countries, options) {
  const categories = [];
  if (options === "land") {
    for (let i = 0; i < countries.length; i++) {
      const country = countries[i];
      if (country.includes("land")) {
        categories.push(country);
      }
    }
  } else if (options === "ia") {
    for (let i = 0; i < countries.length; i++) {
      const country = countries[i];
      if (country.includes("ia")) {
        categories.push(country);
      }
    }
  } else if (options === "island") {
    for (let i = 0; i < countries.length; i++) {
      const country = countries[i];
      if (country.includes("island")) {
        categories.push(country);
      }
    }
  } else if (options === "stan") {
    for (let i = 0; i < countries.length; i++) {
      const country = countries[i];
      if (country.includes("stan")) {
        categories.push(country);
      }
    }
  }
  return categories;
};
console.log(categoriesCountries(importCountries, "ia"));

