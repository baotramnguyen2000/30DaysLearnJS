// let squaredNum = (function (n) {
//   return n * n;
// })(10);
// console.log(squaredNum);

// function printFullName() {
//   let firstName = "Tram";
//   let lastName = "Nguyen Ngoc Bao";
//   let space = " ";
//   let fullName = firstName + space + lastName;
//   console.log(fullName);
// }
// printFullName();

// function square(n) {
//   return n * n;
// }
// console.log(square(2));

// const square = n => {
//     return n * n;
// }
// console.log(square(2));

// const square = n => n * n;
// console.log(square(3));

// const changeToUpperCase = (arr) => {
//   const newArr = [];
//   for (const element of arr) {
//     newArr.push(element.toUpperCase());
//   }
//   return newArr;
// };
// const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
// console.log(changeToUpperCase(countries));

// const printFullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };
// console.log(printFullName("Tram", "Nguyen Ngoc Bao"));

// const printFullName = (firstName, lastName) => `${firstName} ${lastName}`
// console.log(printFullName('Tram', 'Nguyen Ngoc Bao'));

// function greetings(name = "Charlotte") {
//   let message = `${name}, welcome to 30 Days Of JavaScript!`;
//   return message;
// }
// const greetings = (name = "Charlotte") => {
//   let message = name + ", welcome to 30 Days Of JavaScript!";
//   return message;
// };
// console.log(greetings());
// console.log(greetings("Bao Tram"));

// function calculateAge(birthYear, currentYear = 2019) {
//   let age = currentYear - birthYear;
//   return age;
// }
// const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear;
// console.log("Age: ", calculateAge(2000));

/*
// Exercises: Level 1
// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
// const addNumbers = (a, b) => a + b;
// console.log(addNumbers(5, 10));

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// const areaOfRectangle = (length, width) => length * width;
// console.log(areaOfRectangle(5, 10));

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
// const perimeterOfRectangle = (length, width) => 2 * (length + width);
// console.log(perimeterOfRectangle(5, 10));

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
// const volumeOfRectPrism = (length, width, height) => length * width * height;
// console.log(volumeOfRectPrism(5, 10, 20));

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
// const areaOfCircle = r => r * r * Math.PI;
// console.log(areaOfCircle(2));

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
// const circumOfCircle = r => 2 * r * Math.PI;
// console.log(circumOfCircle(2));

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
// const density = (mass, volume) => mass / volume;
// console.log(density(100, 1000));

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
// const speed = (distance, time) => distance / time;
// console.log(speed(100, 10));

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
// const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N';
// console.log('Weight of an object in Newton: ', weightOfObject(100));

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
// const convertCelsiusToFahrenheit = oC => (oC * 9.5) + 32 + " oF";
// console.log(convertCelsiusToFahrenheit(0));

// 13. Write a function which calculates BMI
// const bmi = (weight, height) => weight / (height * height);
// const checkBMI = (bmi) => {
//     if (bmi < 18.5) {
//         console.log("Underweight");
//     } else if (bmi >= 18.5 && bmi < 25) {
//         console.log("Normal");
//     } else if (bmi >= 25 && bmi < 30) {
//         console.log("Overweight");
//     } else if (bmi >= 30 && bmi < 35) {
//         console.log("Obese Class I");
//     } else if (bmi >= 35 && bmi < 40) {
//         console.log("Obese Class II");
//     } else {
//         console.log("Obese Class III");
//     }
// }
// checkBMI(bmi(70, 1.8));

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// const checkSeason = month => {
//     if (month < 4) {
//         return "Spring";
//     } else if (month >= 4 && month < 7) {
//         return "Summer";
//     } else if (month >= 7 && month < 10) {
//         return "Autumn";
//     } else {
//         return "Winter";
//     }
// }
// console.log(checkSeason(10));

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// const findMax = (a, b, c) => {
//     return Math.max(a, b, c);
// }
// console.log(findMax(0, 10, 5));
// console.log(findMax(0, -10, -2))
*/

/*
// Exercises: Level 2
// 1. Write a function which calculates value of a linear equation
// function solveLinEquation(a, b, c) {
//   for (let i = 0; i * a <= c; i++) {
//     // check if it is satisfying the equation
//     if ((c - i * a) % b == 0) {
//       console.log("x = " + i + ", y = " + (c - i * a) / b);
//       return;
//     }
//   }
//   console.log("No solution");
// }
// solveLinEquation(2, 3, 7);
// solveLinEquation(2, 2, 0);

// 2. Write a function which calculates value or values of a quadratic equation
// function solveQuadEquation(a, b, c) {
//   var root1, root2;
//   // calculate discriminant
//   var discriminant = b * b - 4 * a * c;
//   // condition for real and different roots
//   if (discriminant > 0) {
//     root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//     // result
//     return `The roots of quadratic equation are ${root1} and ${root2}`;
//   }
//   // condition for real and equal roots
//   else if (discriminant == 0) {
//     root1 = root2 = -b / (2 * a);
//     // result
//     return `The roots of quadratic equation are ${root1} and ${root2}`;
//   }
//   // if roots are not real
//   else {
//     let realPart = (-b / (2 * a)).toFixed(2);
//     let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
//     // result
//     return `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`;
//   }
// }
// console.log(solveQuadEquation(1, -1, -2));
// console.log(solveQuadEquation(1, 4, 4));

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// const showDateTime = () => { return new Date(); }
// console.log(showDateTime());

// 5. Declare a function name swapValues. This function swaps value of x to y.
// const swapValues = (a, b) => {
//   let x = a;
//   a = b;
//   b = x;
//   return [a, b];
// }
// console.log(swapValues(1, 2));

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
// const reverseArray = (arr) => {
//   let reverse = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverse.push(arr[i]);
//   }
//   return reverse;
// }
// console.log(reverseArray([1, 2, 3, 4, 5]));

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
// const evensAndOdds = n => {
//   let evens = 0;
//   let odds = 0;
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 === 0) {
//       evens++;
//     } else {
//       odds++;
//     }
//   }
//   return [evens, odds];
// }
// console.log(evensAndOdds(100));

// 14. Write a function which takes any number of arguments and return the sum of the arguments
// function sumAllNums() {
//   let sum = 0
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i]
//   }
//   return sum
// }
// console.log(sumAllNums(1, 2, 3, 4));
// console.log(sumAllNums(10, 20, 13, 40, 10));

// 15. Write a function which generates a randomUserIp
// const genUserIp = () =>
//   `${Math.floor(Math.random() * 255) + 1}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
// console.log(genUserIp());

// 16. Write a function which generates a randomMacAddress
// function genMAC() {
//   var hexDigits = "0123456789ABCDEF";
//   var macAddress = "";
//   for (var i = 0; i < 6; i++) {
//     macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
//     macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
//     if (i != 5) macAddress += ":";
//   }
//   return macAddress;
// }
// console.log(genMAC());

// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
// function userIdGenerator(number) {
//   var stringGen = "";
//   var possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (var i = 0; i < number; i++)
//     stringGen += possible.charAt(Math.floor(Math.random() * possible.length));

//   return stringGen;
// }
// console.log(userIdGenerator(7));
*/


// Exercises: Level 3
// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// const userIdGeneratedByUser = () => {
//   var numberOfCharacters = prompt("Please enter a number of characters", "");
//   var numberOfIds = prompt("Please enter a number of ids", "");
//   var stringGen = "";
//   var possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   for (var i = 0; i < numberOfIds; i++) {
//     for (var j = 0; j < numberOfCharacters; j++) {
//       stringGen += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     console.log(stringGen);
//     stringGen = "";
//   }
// }
// userIdGeneratedByUser();

// 2. Write a function name rgbColorGenerator and it generates rgb colors.
// const rgbColorGenerator = () =>
//   `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
// console.log(rgbColorGenerator());


