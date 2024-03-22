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

// Exercises: Level 2
/*
// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");

// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// condition for real and equal roots
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}

// if roots are not real
else {
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    // result
    console.log(
    `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
  );
}
*/

// JavaScript program to find solution
// of ax + by = n

// function to find the solution
function solution(a, b, n) {
  // traverse for all possible values
  for (let i = 0; i * a <= n; i++) {
    // check if it is satisfying the equation
    if ((n - i * a) % b == 0) {
      console.log("x = " + i + ", y = " + (n - i * a) / b);

      return;
    }
  }

  console.log("No solution");
}

// Driver code

let a = 2,
  b = 3,
  n = 7;
solution(a, b, n);

// This code is contributed by sanjoy_62.
