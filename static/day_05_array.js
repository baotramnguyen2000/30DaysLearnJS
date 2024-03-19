/*
1. To String
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splice
8. Concat
9. Slice
10. forEach()
11. every()
12. some()
13. find()
14. filter()
15. map()
16. reduce()
*/

/*
// Exercise: Level 1
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

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const itCompanies = [
  "Amazon",
  "Apple",
  "Google",
  "Microsoft",
  "Oracle",
  "Facebook",
];

// Print the array using console.log()
// Print the number of companies in the array
// Print the first company, middle and last company
console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);

// Print out each company
// Change each company name to uppercase one by one and print them out
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// Filter out companies which have more than one 'o' without the filter method
itCompanies.forEach(function (company, index) {
  console.log(index, company);
});

itCompanies.forEach(function (company, index) {
  itCompanies[index] = company.toUpperCase();
  console.log(index, itCompanies[index]);
});

console.log(`${itCompanies.toString() + "are big IT companies."}`);

console.log(`${itCompanies.includes("Google") ? "Google" : "not found"}`);
console.log(`${itCompanies.includes("GOOGLE") ? "Google" : "not found"}`);

function checkCharacterInString(array) {
    var arr = new Array();
    for (var i = 0; i < array.length; i++){
        // if (array[i].toLowerCase().includes('oo')) {
        //     arr.push(array[i]);
        // }
        var ch = 0;
        for (var j = 0; j < array[i].length; j++) {
            if (array[i][j].toLowerCase() === 'o')  {
                // arr.push(array[i][j]);
                ch += 1;
                if (ch > 1) {
                    arr.push(array[i]);
                    break;
                }             
            }
        }
    }

    return arr;
}

console.log(checkCharacterInString(itCompanies));

// Sort the array using sort() method
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the last IT company from the array
// Remove all IT companies
console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(-3));
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2)));
console.log(itCompanies.shift())

var copyArr = itCompanies.slice(0);
console.log(copyArr);
while (copyArr.length > 0) {
    copyArr.pop();
}

console.log(copyArr);
*/

/*
// Exercise: Level 2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

var words = text.split(' ');
console.log(words);
console.log(words.length);

// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);

shoppingCart.unshift('Meat');
console.log(shoppingCart);

shoppingCart.push('Sugar');
console.log(shoppingCart);

const checkAllergic = function (listCart) {
  var newCart = [];

  for (var i = 0; i < listCart.length; i++) {
    if (listCart[i] === 'Milk') {
      newCart.push('Milk');
    } else if (listCart[i] === 'Coffee') {
      newCart.push('Coffee');
    } else if (listCart[i] === 'Tea') {
      newCart.push('Tea');
    } else if (listCart[i] === 'Honey') {
      continue;
    } else if (listCart[i] === 'Meat') {
      newCart.push('Meat');
    } else if (listCart[i] === 'Sugar') {
      newCart.push('Sugar');
    } else {
      newCart.push(listCart[i]);
    }
  }

  return newCart;
}

console.log(checkAllergic(shoppingCart));

shoppingCart.forEach(function(cart) {
  if (cart === 'Tea') {
    shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
  }
});

console.log(shoppingCart);

// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";
console.log(countries);
console.log(webTechs);

console.log(countries.includes('Ethiopia') ? "ETHIOPIA" : countries.push('Ethiopia'));
console.log(webTechs.includes('Sass') ? "Sass is a CSS preprocess" : webTechs.push('Sass'));
console.log(webTechs);

// Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
var fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Slice the first ten countries from the countries array
// Find the middle country(ies) in the countries array
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
const countriesSlice = countries.slice(0, 10);
console.log(countriesSlice);

const midFirstCountry = countries.slice(0, Math.floor(countries.length / 2));
console.log(midFirstCountry);

const midSecondCountry = countries.slice(Math.round(countries.length / 2));
console.log(midSecondCountry);

var checkCountries = function (countryList) {
  var newCountryList = [], firstList = [], halfList = [];
  var middle = countryList.length / 2;
  var even = countryList.length % 2 === 0;

  if (even === true) {
    for (var i = 0; i < countryList.length; i++) {
      if (i < middle) {
        firstList.push(countryList[i]);
      }
      else {
        halfList.push(countryList[i]);
      }
    }
  } else {
    countryList.unshift('Vietnam');

    for (var i = 0; i < countryList.length; i++) {
      if (i < middle) {
        firstList.push(countryList[i]);
      }
      else {
        halfList.push(countryList[i]);
      }
    }
  }

  newCountryList.push(firstList);
  newCountryList.push(halfList);

  return newCountryList;
}

console.log(checkCountries(countries));
*/

/*
// Exercise: Level 3
// Exercises 1
// Sort the array and find the min and max number
// Exercises 3
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(ages);

var maxAge = ages.slice(ages.length - 1);
console.log(`Max age: ${maxAge}`);

var minAge = ages.slice(0, 1);
console.log(`Min age: ${minAge}`);

var medianAge = function (ageList) {
  var checkListEven = true;
  var mid = Math.floor(ageList.length / 2);

  if (ageList.length % 2 != 0) {
    checkListEven = false;
    return ageList[mid];
  }

  return (ageList[mid] + ageList[mid - 1]) / 2;
};

console.log(`Median age: ${medianAge(ages)}`);

var averageAge = function (ageList) {
  var sum = ageList.reduce(function (sum, age) {
    return sum + age;
  });

  return sum / ageList.length;
};

console.log(`Average age: ${averageAge(ages)}`);

var rangeAge = function () {
  // return Math.abs(ageList[ageList.length - 1] - averageAge(ageList));
  return maxAge - minAge;
};
console.log(`Range age: ${rangeAge()}`);

function compare() {
  var el1 = Math.abs(minAge - averageAge(ages));
  var el2 = Math.abs(maxAge - averageAge(ages));
  console.log(`Min - Average = ${el1}, \nMax - Average = ${el2}`);

  if (el1 > el2) {
    return `Min - Average > Max - Average`;
  } else {
    return `Min - Average < Max - Average`;
  }
}

console.log(compare());
---*/
