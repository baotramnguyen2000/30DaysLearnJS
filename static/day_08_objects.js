/*
// Object constructor
function User(firstName, age, country) {
    this.firstName = firstName;
    this.age = age;
    this.country = country;
}
var student = new User("Asabeneh", 25, "Finland");
var author = new User("Blaza", 35, "Etherland");
*/

/*
// Object prototype
function User(firstName, age, country) {
    this.firstName = firstName;
    this.age = age;
    this.country = country;
}
User.prototype.className = 'F8';
var student = new User("Asabeneh", 25, "Finland");
console.log(student.className);
*/

/*
// Example:
const person = {
  firstName: "Asabeneh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: ["HTML", "CSS", "JS"],
  title: "teacher",
  address: {
    street: "Heitamienkatu 16",
    pobox: 2002,
    city: "Helsinki",
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
  },
};
const copyPerson = Object.assign([], person);
const keys = Object.keys(copyPerson);
const values = Object.values(copyPerson);
const entries = Object.entries(copyPerson);
console.log(copyPerson.hasOwnProperty('firstName'));
console.log(copyPerson.hasOwnProperty('score'));
console.log(entries);
console.log(values);
console.log(keys);
console.log(person);
console.log(copyPerson);
*/

/*
// Exercise 1
var Dog = new Object();
console.log(Dog);
Dog.name = 'Tomy';
Dog.legs = 4;
Dog.color = 'white';
Dog.age = 1;
Dog.bark = function() {
  return `woof woof`; 
};
console.log(Dog.name);
console.log(Dog['legs']);
console.log(Dog.color);
console.log(Dog.age);
console.log(Dog.bark());
console.log(Dog['bark']);
Dog.breed = 'Chicken';
Dog.getDogInfo = function() {
  return `${this.name} is a dog with ${this.legs} legs and has ${this.color} color. He love to eat ${this.breed}. `;
}
console.log(Dog.getDogInfo());
*/

// Exercise 2
/*
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Brook: {
    email: "brook@brook.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
};
*/
//console.log(users);
// 1. Find the person who has many skills in the users object.
/*
// solution 1:
function findUserHasManySkills(users) {
  var user = Object.keys(users).reduce((accumulator, currentvalue) =>
    users[accumulator].skills.length > users[currentvalue].skills.length
      ? accumulator
      : currentvalue
  );
  return user;
}
*/
/*
// solution 2:
function findUserHasManySkills(users) {
  var user = Object.keys(users);
  var result = "";
  for (let i = 0; i < user.length - 1; i++) {
    for (let j = i + 1; j < user.length; j++) {
      if (users[user[i]].skills.length < users[user[j]].skills.length) {
        //console.log(user[i], users[user[i]].skills.length, user[j], users[user[j]].skills.length);
        result = user[j];
        break;
      }
    }
  }
  return result;
}
console.log(findUserHasManySkills(users));
*/

// 2. Count logged in users,
// count users having greater than equal to 50 points from the following object.
/*
// const countLoggedInUsers = function (users) {
//   var count = 0;
//   var user = Object.keys(users);
//   var userLength = Object.keys(users).length;
//   for (let i = 0; i < userLength; i++) {
//     if (users[user[i]].isLoggedIn) {
//       count++;
//       console.log(`${user[i]} is logged in: ${users[user[i]].isLoggedIn}`);
//     }
//   }
//   return count;
// }
// console.log(countLoggedInUsers(users));
*/
/*
// const countUsersHavingMore50points = function (users) {
//   var count = 0;
//   var user = Object.keys(users);
//   var userLength = Object.keys(users).length;
//   for (let i = 0; i < userLength; i++) {
//     if (users[user[i]].points >= 50) {
//       count++;
//       console.log(`${user[i]} has ${users[user[i]].points} points`);
//     }
//   }
//   return count;
// }
// console.log(countUsersHavingMore50points(users));
*/

// 3. Find people who are MERN stack developer from the users object
// const findUserHasMERNStack = function (users) {
//   var user = Object.keys(users);
//   console.log(user);
//   var result = "";
//   for (let i = 0; i < user.length; i++) {
//     if (
//       users[user[i]].skills.includes("MongoDB") &&
//       users[user[i]].skills.includes("Express") &&
//       users[user[i]].skills.includes("React") &&
//       users[user[i]].skills.includes("Node")
//     ) {
//       result += user[i] + " ";
//     }
//   }
//   return result;
// };
// console.log(findUserHasMERNStack(users));

// 4. Set your name in the users object without modifying the original users object
/*
// const copyUser = Object.assign({}, users);
// const myUser = {
//   Bao_Tram: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };
// Object.assign(copyUser, myUser);
// console.log(copyUser);
// console.log(users);
*/
/*
var myUser = structuredClone(users);
var myKey = "Bao_Tram";
myUser[myKey] = {
    email: "baotram@baotram.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
};
console.log(users);
console.log(myUser);
*/
// 5. Get all keys or properties of users object
/*
// var key = Object.keys(users);
// console.log('This is all keys of users object.')
// console.log(key);
*/
/*
// var properties = Object.keys(users[key[0]]);
// console.log('This is all properties of users object.')
// console.log(properties);
*/
// 6. Get all the values of users object
/*
// const values = Object.values(users);
// console.log(values);
*/
/*
// var key = Object.keys(users);
// var allProperties = new Set();
// for (let i = 0; i < key.length; i++) {
//   allProperties.add(users[key[i]]);
// }
// console.log("This is all values of keys of users object.");
// console.log(allProperties);
*/

// Exercise 3
// 1. Create an object literal called personAccount.
/* way-1
class personAccount {
  constructor(firstName,
    lastName,
    incomes,
    expenses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = incomes;
    this.expenses = expenses;
    this.totalIncome = function () {
      return this.incomes.reduce(function (acc, currentvalue) {
        return acc + currentvalue;
      });
    };
    this.totalExpense = function () {
      return this.expenses.reduce(function (acc, currentvalue) {
        return acc + currentvalue;
      });
    };
    this.accountInfo = function () {
      return this.firstName + " " + this.lastName;
    };
    this.addIncome = function (amount) {
      this.incomes.push(amount);
      return this.incomes;
    };
    this.addExpense = function (amount) {
      this.expenses.push(amount);
      return this.expenses;
    };
    this.accountBalance = function () {
      return this.totalIncome() - this.totalExpense();
    };
  }
}
const account = new personAccount("Tram","Nguyen",[20000, 30000, 40000],[1000]);
console.log(account);
console.log(account.totalIncome());
console.log(account.totalExpense());
console.log(account.accountBalance());
*/
/* way-2
const clone = {
  firstName: "Tram",
  lastName: "Nguyen",
  incomes: [
    { income: 2000, desc: "debt" },
    { income: 3000, desc: "business" },
    { income: 4000, desc: "parent" },
    { income: 5000, desc: "salary" },
  ],
  expenses: [
    { expense: 1000, desc: "car" },
    { expense: 3000, desc: "housing" },
    { expense: 3000, desc: "edu" },
  ],
  totalIncome: function () {
    return this.incomes.reduce((acc, curr) => acc + curr.income, 0);
  },
  totalExpense: function () {
    return this.expenses.reduce((acc, curr) => acc + curr.expense, 0);
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};
console.log(clone);
console.log(clone.firstName + " " + clone.lastName);

var keys = Object.keys(clone);
var values = Object.values(clone);
console.log(keys);
console.log(values);
console.log(values[2][0].income);
console.log(values[2].reduce((acc, curr) => acc + curr.income, 0));

console.log(clone.totalIncome());
console.log(clone.totalExpense());
console.log(clone.accountBalance());
*/
const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

// Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection.
// If user exists, inform the user that he has already an account.

// console.log(users);
// console.log(users[1]["_id"]);
/* object test
const user = [
  {
    _id: "ab12ex1111",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
];
*/
/* sign-up an account to collection
const signUp = function (objUser, listUser) {
  var userCopy = Object.assign([], listUser);
  var listLength = userCopy.length;
  for (var i = 0; i < listLength; i++) {
    if (userCopy[i]["_id"] === objUser["_id"]) {
      console.log(objUser["_id"] + " already exists.");
      break;
    }
    userCopy.push(objUser);
    break;
  }
  console.log(userCopy);
  return userCopy;
};
*/
/* sign-up more accounts to collection
const signUp = function (objList, listUser){
  var userCopy = Object.assign([], listUser);
  var listLength = userCopy.length;
  var objLength = objList.length;
  for (var i = 0; i < objLength; i++){
    for (var j = 0; j < listLength; j++){
      if (objList[i]["_id"] === userCopy[j]["_id"]){
        console.log(objList[i]["_id"] + " already exists.");
        break;
      }
      userCopy.push(objList[i]);
      break;
    }
  }
  console.log(userCopy);
  return userCopy;
}
const addAccount = signUp(user, users);
*/
// b. Create a function called signIn
// which allows user to sign in to the application
/*
const signIn = users.filter(user => user.isLoggedIn === true);
console.log(signIn);
*/
/*
function signIn(user){
  return user.isLoggedIn === true;
}
const filtered = users.filter(signIn);
console.log(filtered);
*/

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
      { userId: "ab12ex", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// 3. The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
/*
// for (var i = 0; i < products.length; i++) {
//   console.log(products[i].ratings);
//   var rs = products[i].ratings.reduce((acc, cur) => acc + cur.rate, 0);
//   console.log(rs);
//   products[i].rate_points = rs;
//   console.log(products[i]);
// }
*/
/*
const rateProduct = function (products) {
  for (var i = 0; i < products.length; i++) {
    var result = products[i].ratings.reduce((acc, cur) => acc + cur.rate, 0);
    products[i].rate_points = result;
  }
  for (var i = 0; i < products.length; i++){
    console.log(`id:${products[i]._id} name:${products[i].name} has ${products[i].rate_points} points rating.`);
  }
  return products;
};
console.log(rateProduct(products));
*/
// const rateProduct = function (userID, productsID, points) {
//   for (var i = 0; i < products.length; i++) {
//     if (productsID === products[i]._id) {
//       products[i].ratings.push(
//         {
//           userId: userID,
//           rate: points,
//         }
//       )
//     }
//   }
//   return products;
// }
// console.log(rateProduct('zwf8md','eedfcf', 8));
// b. b. Create a function called averageRating
// which calculate the average rating of a product
/*
// const averageRating = function (products) {
//   for (var i = 0; i < products.length; i++) {
//     var result = products[i].ratings.reduce((acc, cur) => acc + cur.rate, 0);
//     products[i].rate_points = result/(products[i].ratings.length);
//   }
//   return products;
// };
// console.log(averageRating(products));
*/
// 4. Create a function called likeProduct. This function will helps
// to like to the product if it is not liked and remove like if it was liked.
/* way-1
// const likeProduct = function (user, product) {
//   if (product.likes.includes(user._id)) {
//     product.likes = product.likes.filter((id) => id!== user._id);
//   } else {
//     product.likes.push(user._id);
//   }
//   return product;
// }
// console.log(likeProduct(users[0], products[0]));
// console.log(likeProduct(users[0], products[1]));
*/
/* way-2
const likeProduct = function (user, product) {
  if (product.likes.length === 0) {
    product.likes.push(user._id);
  } else {
    for (let i = 0; i < product.likes.length; i++) {
      if (product.likes[i] === user._id) {
        product.likes.splice(i, 1);
        break;
      }
    }
  }
  return product;
};
var addLike = likeProduct(users[1], products[0]);
console.log(addLike);
*/

