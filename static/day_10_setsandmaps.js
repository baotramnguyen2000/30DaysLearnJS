// for ... in (Object.keys())
// iterate over all properties of object
// apply with String, Array, Object but not Map(), Set()
// for ... of
// iterate over all values of object
// apply with String, Array, Map or Set object
// example
/* SET
const companies = new Set();
console.log(companies);

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];
const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

console.log(companies.size);
companies.add("Google"); // add element to the set
companies.add("Facebook");
companies.add("Amazon");
companies.add("Oracle");
companies.add("Microsoft");
console.log(companies.size);
console.log(companies);

const setOfCompanies = new Set();
for (const company of companies) {
  setOfCompanies.add(company);
}
console.log(setOfCompanies);

setOfCompanies
  .add("Google")
  .add("Facebook")
  .add("VNG")
  .add("FPT")
  .add("Viettel");
console.log(setOfCompanies);

console.log(companies.delete("Google"));
console.log(companies.size);

console.log(companies.has("Apple"));
console.log(companies.has("Facebook"));

setOfCompanies.clear();
console.log(setOfCompanies);

// more examples
// const languages = [
//   "English",
//   "Finnish",
//   "English",
//   "French",
//   "Spanish",
//   "English",
//   "French",
// ];
// const langSet = new Set(languages);
// // console.log(langSet); // Set(4) {"English", "Finnish", "French", "Spanish"}
// // console.log(langSet.size); // 4

// const counts = [];
// const count = {};

// for (const l of langSet) {
//   const filteredLang = languages.filter((lng) => lng === l);
//   console.log(filteredLang); // ["English", "English", "English"]
//   console.log(filteredLang.length); // 3
//   counts.push({ lang: l, count: filteredLang.length });
// }
// console.log(counts);

// const numbers = [5, 2, 7, 8, 5, 8, 3, 2, 7];
// const setOfNumbers = new Set(numbers);
// console.log(setOfNumbers);

// Uninion of Sets
// let a = [1, 2, 3, 4, 5];
// let b = [3, 4, 5, 6];
// let c = [...a, ...b];
// console.log(c);
// let A = new Set(a);
// let B = new Set(b);
// let C = new Set(c);
// console.log(C);

// Intersection of Sets
// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let A = new Set(a)
// let B = new Set(b)
// let c = a.filter((num) => B.has(num))
// let C = new Set(c)
// console.log(C)

// Difference of sets
// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let A = new Set(a)
// let B = new Set(b)
// let c = a.filter((num) => !B.has(num))
// let C = new Set(c)
// console.log(C)
*/
/* MAP
// const map = new Map()
// console.log(map)

// const countries = [
//   ["Finland", "Helsinki"],
//   ["Sweden", "Stockholm"],
//   ["Norway", "Oslo"],
// ];
// const map = new Map(countries);
// console.log(map);
// console.log(map.size);

// const countriesMap = new Map();
// console.log(countriesMap.size); // 0
// countriesMap.set("Finland", "Helsinki");
// countriesMap.set("Sweden", "Stockholm");
// countriesMap.set("Norway", "Oslo");
// // can also be chained multiple times
// // countriesMap.set('Finland', 'Helsinki')
// //             .set('Sweden', 'Stockholm')
// //             .set('Norway', 'Oslo');
// console.log(countriesMap);
// console.log(countriesMap.size);
// console.log(countriesMap.get("Finland"));
// console.log(countriesMap.get("Norway"));

// console.log(countriesMap.has("Finland"));
// for (const country of countriesMap) {
//   console.log(country);
// }

// for (const [country, city] of countriesMap) {
//   console.log(country, city);
// }
*/

// Exercises:Level 3
// How many languages
// import { countries } from "./countries_data.js";
// const languages = countries.map((element) => element.languages);
// const allLanguages = languages.reduce((acc, cur) => [...acc, ...cur], []);
// const uniqueLanguages = new Set(allLanguages);
// console.log(languages);
// console.log(allLanguages);
// console.log(uniqueLanguages);
// Find the 10 most spoken languages
// first approach
/*
const langArr = [];
for (const l of uniqueLanguages) {
  const count = allLanguages.filter((lang) => lang === l).length;
  langArr.push({ lang: l, count: count });
}
console.log(langArr);
const sortedLang = langArr.sort((a, b) => b.count - a.count);
console.log(sortedLang);

function mostSpokenLanguages(num) {
  const langObject = sortedLang.filter(
    (element) => sortedLang.indexOf(element) < num
  );
  return langObject;
}
console.log(mostSpokenLanguages(3));
// first approach (O)
// const langArr = [];
// for (const l of uniqueLanguages) {
//   const count =  allLanguages.filter((lang) => lang === l).length;
//   const object = {};
//   object[l] = count;
//   langArr.push(object);
// }
// console.log(langArr);

// better(shortened) version (O)
// const langArr = [];
// for (const l of uniqueLanguages) {
//   const count =  allLanguages.filter((lang) => lang === l).length;
//   langArr.push({[l] : count});
// }
// console.log(langArr);
*/
// second approach
/*
const langArr = [];
for (const l of uniqueLanguages) {
  const count = allLanguages.filter((lang) => lang === l).length;
  langArr.push({ [l]: count });
}
console.log(langArr);
console.log(Object.values(langArr[2]));
console.log(Object.keys(langArr[4]));
const sortedLang = langArr.sort((a, b) => {
  return Object.values(b) - Object.values(a);
});
console.log(sortedLang);
function mostSpokenLanguages(num) {
  const langObject = sortedLang.filter(
    (element) => sortedLang.indexOf(element) < num
  );
  return langObject;
}
console.log(mostSpokenLanguages(4));
*/