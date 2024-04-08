/*
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;
console.log(numOne, numTwo, numThree);
console.log(numbers);

const names = ["Asabeneh", "Brook", "David", "John"];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
console.log(firstPerson);

const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;
console.log(e, pi, gravity, bodyTemp, boilingTemp);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd);
console.log(backEnd);

const numberss = [1, 2, 3]
let [numOnes, , numThrees] = numberss //2 is omitted
console.log(numOnes, numThrees)

const namess = [undefined, 'Brook', 'David']
let [
  firstPersons = 'Asabeneh',
  secondPersons,
  thirdPersons,
  fourthPersons = 'John'
] = namess
console.log(firstPersons, secondPersons, thirdPersons, fourthPersons)  

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3)
console.log(rest)
*/
/*
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
for (const [country, city] of countries) {
  console.log(country, city);
}

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
for (const [first, second, third] of fullStack) {
  console.log(first, second, third);
}
*/
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter);

let { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p);
console.log(width, height, area, perimeter);

const rectangles = {
  widths: 20,
  heights: 10,
  areas: 200,
};
let { widths, heights, areas, perimeters = 60 } = rectangles;
console.log(widths, heights, areas, perimeters); //20 10 200 60
//Let us modify the object:width to 30 and perimeter to 80

// Without destructuring
const rect = {
  width: 20,
  height: 10,
};
const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};
console.log(calculatePerimeter(rect)); // 60
//with destructuring
const calculatePerimeters = ({ width, height }) => {
  return 2 * (width + height);
};
console.log(calculatePerimeters(rect)); // 60
//Another Example
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};
// Let us create a function which give information about the person object without destructuring
const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  const personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is  ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};
console.log(getPersonInfo(person));
// with destruction
const persons = {
  firstName: "Ramona",
  lastName: "Doe",
  age: 23,
  country: "Korea",
  job: "student",
  skills: ["HTML", "CSS", "JavaScript"],
  languages: ["Korean", "English", "Spanish"],
};

// create a function which gives information about the person object with destructuring
const getPersonInfos = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages,
}) => {
  const formattedSkills = skills.slice(0, -1).join(", ");
  const formattedLanguages = languages.slice(0, -1).join(", ");

  let personInfo = `${firstName} ${lastName} lives in ${country}. She is ${age} years old. She is a ${job}. She learns ${formattedSkills} and ${
    skills[skills.length - 1]
  }. She speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};

console.log(getPersonInfos(persons));
// Destructuring object during iteration
const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

const countries = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];
let [gem, fra, , ...nordicCountries] = countries;
console.log(gem);
console.log(fra);
console.log(nordicCountries);

const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];
const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];
const wholeNumbers = [...evens, ...odds];
console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);

const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

const copiedUser = { ...user, title: "instructor" };
console.log(copiedUser);

const sumAllNums = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
};
console.log(sumAllNums(1, 2, 3, 4, 5));
