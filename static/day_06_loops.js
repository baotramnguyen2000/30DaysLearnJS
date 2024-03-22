/*
// Exercise 1
// 4.
// for (let i = 1; i < 8; i++) {
//     console.log("#".repeat(i));
// }

// 5.
// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} * ${i} = ${i * i}`);
// }

// 6.
// console.log("i  i^2 i^3");
// for (let i = 0; i <= 10; i++) {
//     console.log(`${i}   ${i*i}   ${i*i*i}`);
// }

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
// function isPrime(n) {
//     // Corner case
//     if (n <= 1)
//         return false;
//     // Check from 2 to n-1
//     for (let i = 2; i < n; i++)
//         if (n % i == 0)
//             return false;
//     return true;
// }
// for (let i = 0; i <= 100; i++) {
//     if (isPrime(i)){
//         console.log(i);
//     }
// }

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers
// for (let i = 0; i <= 100; i++) {
//     let total = 0;
//     for (let i = 0; i <= 100; i++) {
//         total += i;
//     }
//     console.log(`The sum of all numbers from 0 to 100 is ${total}.`);
// }

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// function calculateSum(n) {
//     let evens = 0;
//     let odds = 0;
//     for (let i = 0; i <= n; i++) {
//         if (i % 2 === 0) {
//             evens += i;
//         }
//         if (i % 2!== 0) {
//             odds += i;
//         }
//     }
//     return `The sum of all evens is ${evens} and the sum of all odds is ${odds}.`;
// }
// console.log(calculateSum(100));

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// function calculateSum(n) {
//   let evens = 0;
//   let odds = 0;
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 === 0) {
//       evens += i;
//     }
//     if (i % 2 !== 0) {
//       odds += i;
//     }
//   }
//   return [evens, odds];
// }
// console.log(calculateSum(100));

// 13. Develop a small script which generate array of 5 random numbers
// const array = Array(5)
//     .fill()
//     .map(() => Math.floor(100 * Math.random()));
// console.log(array);

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
// const generateUniqueArray = (count, max) => {
//     var rands = [];
//     while (rands.length < count) {
//         var rand = Math.floor(max * Math.random());
//         if (rands.indexOf(rand) === -1) {
//             rands.push(rand);
//         }
//     }
//     return rands;
// }
// console.log(generateUniqueArray(5, 100));

// 15. Develop a small script which generate a six characters random id
// way-1
// const result = Math.random().toString(36).substring(2, 7);
// console.log(result);
// way-2
// const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// function generateString(length) {
//     let result = ' ';
//     const charactersLength = characters.length;
//     for ( let i = 0; i < length; i++ ) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }

//     return result;
// }
// console.log(generateString(5));
*/

/*
// Exercise 2
// 1. Develop a small script which generate any number of characters random id
// const characters =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
// function generateString(length) {
//   let result = " ";
//   const charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }
// console.log(generateString(10));

// 2. Write a script which generates a random hexadecimal number
// way-1
// const genRanHex = (size) =>
//   [...Array(size)]
//     .map(() => Math.floor(Math.random() * 16).toString(16))
//     .join("");
// console.log(`#${genRanHex(6)}`);
// way-2
// function genHexString(len) {
//     let output = '';
//     for (let i = 0; i < len; ++i) {
//         output += (Math.floor(Math.random() * 16)).toString(16);
//     }
//     return output;
// }
// console.log(`#${genHexString(6)}`);

// 3. Write a script which generates a random rgb color number.
// function randomRgbColor() {
//     let r = Math.floor(Math.random()*256);
//     let g = Math.floor(Math.random()*256);
//     let b = Math.floor(Math.random()*256);
//     return [r,g,b];
// }
// console.log(`rgb(${randomRgbColor()})`);

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

// 4. Using the above countries array, create the following new array.
// const countryList = [];
// for (var country of countries) {
//     countryList.push(country.toUpperCase());
// }
// console.log(countryList);

// 5. Using the above countries array, create an array for countries length'.
// const countryLength = [];
// for (var country of countries) {
//     countryLength.push(country.length);
// }
// console.log(countryLength);

// 6. Use the countries array to create the following array of arrays
// function countryList (country) {
//     var list = []
//     for (var ct of country) {
//        list.push([ct, ct.toUpperCase().slice(0, 3), ct.length]);
//     }
//     return list;
// }
// console.log(countryList(countries));

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// const countryHaveLand = [];
// for (var country in countries) {
//     if (countries[country].includes("land")) {
//         countryHaveLand.push(countries[country]);
//     }
// }
// console.log(countryHaveLand);

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// function confirmEnding(countryList) {
//   var result = [];
//   for (var ct of countryList) {
//     if (ct.endsWith("ia")) {
//       result.push(ct);
//     }
//   }
//   return result;
// }
// console.log(confirmEnding(countries));

// 9. Using the above countries array, find the country containing the biggest number of characters.
// function findCtHaveBiggestCharacter(countries) {
//   var result = [];
//   for (var ct of countries) {
//     if (ct.length > result.length) {
//       result = ct;
//     }
//   }
//   return result;
// }
// console.log(findCtHaveBiggestCharacter(countries));

// 10. Using the above countries array, find the country containing only 5 characters.
// function findCtHave5Character(countryList) {
//   var result = [];
//   for (var ct of countryList) {
//     if (ct.length === 5) {
//       result.push(ct);
//     }
//   }
//   return result;
// }
// console.log(findCtHave5Character(countries));

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// 11. Find the longest word in the webTechs array
// function findTheLongestWord(webTech) {
//   var result = [];
//   for (var i = 0; i < webTech.length; i++) {
//     if (webTech[i].length > result.length) {
//       result = webTech[i];
//     }
//   }
//   return result;
// }
// console.log(findTheLongestWord(webTechs));

// 12. Use the webTechs array to create the following array of arrays
// function createWebTech (webTech) {
//   var result = [];
//   for (var i = 0; i < webTech.length; i++) {
//     result.push([webTech[i], webTech[i].length]);
//   }
//   return result;
// }
// console.log(createWebTech(webTechs));

// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// const fruit = ["banana", "orange", "mango", "lemon"];
// const fruitReverse = [];
// for (let i = fruit.length - 1; i >= 0; i--) {
//   fruitReverse.push(fruit[i]);
// }
// console.log(fruitReverse);

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
// 16. Print all the elements
// for (let i = 0; i < fullStack.length; i++) {
//   for (let j = 0; j < fullStack[i].length; j++) {
//     console.log(fullStack[i][j]);
//   }
// }
*/



