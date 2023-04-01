"use strict"; //activate it to use strict JS code

//Function 1 defining a function
function logger() {
  console.log(`My Name is Younas`);
}

logger(); //calling, running or invoking the function
logger();

//function 2 Defining parameters (here apples and orangeSs, they represent input of data)Passing data and then returning it

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// fruitProcessor(3, 5); //arguments in a function

const appleJuice = fruitProcessor(5, 0); //calling a FUNCTIOn fruitProcesseor here returns value saved in const juice and to use this function we need to assign it to a new vaariable (appleJuice) and then log it.
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);
console.log("____________________________________________________");

/*1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console */
/*
function describeCountry(country, population, capitalCity) {
  const countryDetails = `${country} has ${population} million people and its capital city is ${capitalCity}. `;
  return countryDetails;
}

const finlandCountry = describeCountry("Finland", 6, "Helsinki");
console.log(finlandCountry);

const pakistanCountry = describeCountry("Pakistan", 220, "Islamabad");
console.log(pakistanCountry);

const indiaCOuntry = describeCountry("India", 2000, "New Delhi");
console.log(indiaCOuntry);
console.log("____________________________________________________");

*/
//Write function of age calculation based on date of birth
// Function declaration (can be called before the code is defined)

function ageCalc(birthYear) {
  console.log(birthYear);
  const age1 = 2038 - birthYear;
  return age1;
}

const calculator = ageCalc(1992);
console.log(calculator);

//function expression

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1992);
console.log(age2);
console.log("____________________________________________________");

//example of function declaration
const populationOfWorld = 7900;
function percentageOfWorld1(population) {
  console.log(population);
  const percentCalculator = (population / populationOfWorld) * 100;
  return percentCalculator;
}

const percentageOfChina = percentageOfWorld1(1441);
console.log(
  `China has population of 1441 Million people and it is ${percentageOfChina} percent.`
);

// example of function expression

const percentageOfWorld2 = function (population) {
  return (population / populationOfWorld) * 100;
};

const percentageOfChina2 = percentageOfWorld2(1441);
console.log(
  `China has population of 1441 Million people and it is ${percentageOfChina2} percent.`
);

//Arrow functions const variable = functionName => function body ;

const percentageOfWorld3 = (population) =>
  (population / populationOfWorld) * 100;
const percentageOfChina3 = percentageOfWorld3(1441);
console.log(
  `China has population of 1441 Million people and it is ${percentageOfChina3} percent.`
);

console.log("____________________________________________________");

// Retirement Calculator

/*

const retirementAge = 65;
let firstName = prompt(`Please enter your first name:`);
let lastName = prompt(`Please enter your last name:`);
const yourcurrentAge = prompt(`Please enter your current age"`);

function retirementCalculator(currentAge, firstName, lastName) {
  console.log(currentAge);
  if (currentAge <= retirementAge) {
    const numberOfYearsInRetirement = retirementAge - currentAge;
    console.log(numberOfYearsInRetirement);
    return numberOfYearsInRetirement;
  }
}

const myRetirementAge = retirementCalculator(
  yourcurrentAge,
  firstName,
  lastName
);
console.log(
  `Your current age is ${yourcurrentAge} and number of years left in your retirement are ${myRetirementAge}`
);
console.log("____________________________________________________");

// function addition of 2 numbers
function addition(number1, number2) {
  const addFormula = number1 + number2;
  return addFormula;
}

const addmyNumber = addition(5, 6);
console.log(addmyNumber);
*/
// Minutes to seconds converter
// const yourMinutes = prompt(`Please enter number of minutes: `);

function secondsCalculator(minutes) {
  const minutesToSeconds = minutes * 60;
  return minutesToSeconds;
}
const totalSeconds = secondsCalculator(2);
console.log(totalSeconds);

// area of a triangle
const base = 10;
const height = 10;
function areaOfTriangle(base, height) {
  console.log(base, height);
  const formulaOfArea = (base * height) / 2;
  return formulaOfArea;
}
const letsCalculateArea = areaOfTriangle(base, height);
console.log(letsCalculateArea);

console.log("____________________________________________________");

/* Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 */

function calcAverage(score1, score2, score3) {
  const formulaOfAverage = (score1 + score2 + score3) / 3;
  return formulaOfAverage;
}

let avgDolphins = calcAverage(100, 152, 200);
let scoreDolphins = console.log(`The average of Dolphins is: ${avgDolphins}.`);

let avgKoalas = calcAverage(50, 75, 100);
let scoreKoalas = console.log(`The average of Koalas is: ${avgKoalas}.`);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins beat Koalas 🏆 ${avgDolphins} vs ${avgKoalas}.`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Dolphins beat Koalas 🏆 ${avgDolphins} vs ${avgKoalas}.`);
  } else console.log(`No Team wins.`);
}
const whoIsWinner = checkWinner(scoreDolphins, scoreKoalas);
console.log(`The winner is: ${whoIsWinner}.`);

checkWinner(576, 111);

avgDolphins = calcAverage(85, 54, 41);
scoreDolphins = console.log(`The average of Dolphins is: ${avgDolphins}.`);

avgKoalas = calcAverage(22, 34, 27);
scoreKoalas = console.log(`The average of Koalas is: ${avgKoalas}.`);

checkWinner(scoreDolphins, scoreKoalas);

// Arrays store data like variables but big containers

const friends = ["Younas", "Karim", 3, null]; //arrays hold values of different types
console.log(friends); //returns array
console.log(friends.length); //returns length
console.log(friends[0]); //returns first element of array
console.log(friends[friends.length - 1]); //returns last element of array

friends[2] = "Hamza"; //replaces element at position 3
console.log(friends);

//arrays hold values of different types
const myfirstName = "Hello";
const jonas = ["Younas", "Habib", "Khan", 2037 - 1992, myfirstName, friends]; //can insert array within an array, variables also inside
console.log(jonas);

console.log("____________________________________________________");

// Write function of age calculation based on date of birth, Function declaration (can be called before the code is defined)

// Use functions with arrays.

/*

//Step1: Define a function ageCal to calculate age
function ageCalc(birthYear) {
  console.log(birthYear);
  const age1 = 2038 - birthYear;
  return age1;
}

const calculator = ageCalc(1992);
console.log(calculator);

//step 2: define an array in which function is to be used
const years = [1992, 1995, 1993, 2022, 2033, 2000, 2001];

//step 3: define new constants age01, age02 etc and use function calcAge2
const age01 = ageCalc(years[0]);
const age02 = ageCalc(years[2]);
const age03 = ageCalc(years[5]);
const age04 = ageCalc(years.length - 1);

console.log(age01, age02, age03, age04);

const ages = [age01, age02, age03, age04];
console.log(ages); // returns(4) [46, 45, 38, 2032]

//push: method used to add elements on the end of array

ages.push("age06");
console.log(ages); //returns (5) [46, 45, 38, 2032, 'age06']

ages.push(89);
console.log(ages); //returns (6) [46, 45, 38, 2032, 'age06', 89]

// unshift:, adds elements at beginning of array

ages.unshift("John");
console.log(ages); //returns (7) ['John', 46, 45, 38, 2032, 'age06', 89]

// pop: (opposite of push) remove last element from array

ages.pop();
console.log(ages); // returns (6) ['John', 46, 45, 38, 2032, 'age06']

ages.pop();
console.log(ages); // now returns (5) ['John', 46, 45, 38, 2032]

// if to check what is removed, then
const popped = ages.pop();
console.log(popped); // returns 2032 ,,, be aware we used pop here so 2032 is also removed, so length is 4 and elements here are (4) ['John', 46, 45, 38]

// remove first element

ages.shift();
console.log(ages); // returns (3) [46, 45, 38] ,, John is removed here.

//Index of: to check placement of element in array
console.log(ages.indexOf(46)); //returns 0 (first place)

// Includes returns true or false
console.log(ages.includes("38")); // returns false as "38" is a string as it checks with strict equality

console.log(ages.includes(46)); // returns true

if (ages.includes(46)) {
  console.log("Array includes 46");
}


*/

/*
Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
*/

/* 

//Step 1: Create a function CalcTip
function calcTip(billAmount) {
  const Tip =
    billAmount <= 50 && billAmount >= 300 //calculate Tip based on req
      ? billAmount * 0.15
      : billAmount * 0.2;
  return Tip;
}

// define array bills (test data)
const bills = [125, 444, 44];

// calculate tips using bills array and function calcTip and giving position
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

//calculate total bill using array bills and array tips (giving position 0,1,2)

const totalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totalBill);

//calculate bills, tips, total bill
console.log(bills, tips, totalBill); 

*/

//Learning Objects (key value pairs)

/*
const YounasHabib = {
  firstName: "Younas",
  lastName: "Khan",
  age: 2037 - 1992,
  job: "Teacher",
  friends: ["Ali", "Furqan", "Steven"],
};

// finding element in an object, first define a constant
const intrestedIn = prompt(
  `Which property of Younas you want to know: Choose between firstName, last Name, age, job and Friends)`
);
console.log(YounasHabib[intrestedIn]);

// add if condition

if (YounasHabib[intrestedIn]) {
  console.log(YounasHabib[intrestedIn]);
} else {
  console.log("WRONG REQUEST");
}

// how to use dot and bracket notation to add element in object

YounasHabib.location = "Germany";
YounasHabib["twitter"] = "@younashabib";
console.log(YounasHabib);

*/

/*
console.log(YounasHabib); // returns full object
console.log(YounasHabib.age); // returns age 45 *2037-1992
console.log(YounasHabib.friends); // returns array
console.log(YounasHabib.lastName); // returns last name

console.log(YounasHabib["age"]);
console.log(YounasHabib["friends"]);

const nameKey = "Name";
console.log("first" + nameKey);
console.log("key" + nameKey);
*/

// CHallenege Ali has 3 friends and best friend is Aliza

const Ali = {
  firstName: "Ali",
  lastName: "Hassan", //string
  friends: ["Alizay", "Ruhab", "Hiba"], //array
  location: "Pakistan",
  birthYear: 1991, //number
  hasDriverLicense: false, //boolean value
  job: "Policeman",

  //Version 1
  // calcAge: function (birthYear) {
  //return 2037 - birthYear;
  //},

  //Version 2
  // function in an object, it is called method and it becomes a property like firstname, last name etc
  //calcAge: function () {
  //console.log(this);
  //return 2037 - this.birthYear;
  //},

  //Version 3 (The best version and practice) save this function as variable and then call it and then return it
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    } living in ${this.location} has ${
      this.hasDriverLicense ? "a" : "no" // use this function + use another function to call yes or no
    } drivers license.`;
  },
};
console.log(Ali.calcAge()); // produces same result as below
console.log(Ali.age); // produces same result as above

// to call object *(function value)
// console.log(YounasHabib.calcAge(1991));

/*
console.log(
  `${Ali.firstName} has ${Ali.friends.length} friends and his best friend is ${Ali.friends[2]}.`
);

console.log(
  `${Ali.firstName} is a ${Ali.age} year old ${Ali.job} living in ${Ali.location}.`
);
*/

console.log(Ali.getSummary());

console.log("____________________________________________________");
/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */

const bMIMark = {
  firstName: "Mark",
  lastName: "Miller",
  massInKg: 78,
  heightInMeter: 1.69,
  //formula for calculating BMI using function (always use this)
  calcBMI: function () {
    this.bmiFormula = this.massInKg / (this.heightInMeter * this.heightInMeter);
    return this.bmiFormula;
  },
};
const bMIJohn = {
  firstName: "John",
  lastName: "Smith",
  massInKg: 92,
  heightInMeter: 1.95,
  //formula for calculating BMI using function (always use this)
  calcBMI: function () {
    this.bmiFormula = this.massInKg / (this.heightInMeter * this.heightInMeter);
    return this.bmiFormula;
  },
};

//Logging information for Mark Miller
console.log(
  `${bMIMark.firstName} ${bMIMark.lastName} is ${bMIMark.heightInMeter}m tall and weighs ${bMIMark.massInKg}kg.`
);
//Logging information for John Smith
console.log(
  `${bMIJohn.firstName} ${bMIJohn.lastName} is ${bMIJohn.heightInMeter}m tall and weighs ${bMIJohn.massInKg}kg.`
);
//Logging information for Mark Miller, mass, height BMI
console.log(
  `The mass of ${bMIMark.firstName} ${bMIMark.lastName} is = ${
    bMIMark.massInKg
  }kg. The height of ${bMIMark.firstName} ${bMIMark.lastName} is = ${
    bMIMark.heightInMeter
  }m. So, BMI of ${bMIMark.firstName} ${
    bMIMark.lastName
  } is : ${bMIMark.calcBMI()}. `
);
// Logging information for John Smith, mass, height
console.log(
  `The mass of ${bMIJohn.firstName} ${bMIJohn.lastName} is = ${
    bMIJohn.massInKg
  }kg. The height of ${bMIJohn.firstName}m ${bMIJohn.lastName} is = ${
    bMIJohn.heightInMeter
  }m. So, BMI of ${bMIJohn.firstName} ${
    bMIJohn.lastName
  } is : ${bMIJohn.calcBMI()}. `
);

if (bMIJohn.calcBMI() >= bMIMark.calcBMI()) {
  console.log(
    `John's BMI ${bMIJohn.calcBMI()} is higher than Mark's ${bMIMark.calcBMI()}!. `
  );
} else
  console.log(
    `John's BMI ${bMIJohn.calcBMI()} is lower than Mark's ${bMIMark.calcBMI()}!. `
  );

console.log("____________________________________________________");
//Objects Examples

/*LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing
properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments) */

const myCountry = {
  countryName: "Pakistan",
  capitalCity: "Islamabad",
  language: "Urdu",
  population: 220,
  neighbours: ["India", "Afghanistan", "Iran", "China"],
};

/*
LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
and a capital called Helsinki.' */

console.log(
  `${myCountry.countryName} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours[0]}, ${myCountry.neighbours[1]}, ${myCountry.neighbours[2]}, ${myCountry.neighbours[3]} (total ${myCountry.neighbours.length}) neighbouring countries and a capital called ${myCountry.capitalCity}.`
);

/*

2. Increase the country's population by two million using dot notation, and then
decrease it by two million using brackets notation.

*/
myCountry.population += 2;
console.log(myCountry.population);

myCountry.population -= 2;
console.log(myCountry.population);

console.log("____________________________________________________");

/*
LECTURE: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous
assignment, but this time using the 'this' keyword.


2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if
there are. Use the ternary operator to set the property. */

// Loops: for Loop : keep running while condition is true

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repition ${rep}`);
}

// for loops applications on arrays

const jonasArray = [
  "Jonas",
  "Schmedtman",
  2037 - 1991,
  "Teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

//loop function Example 1

for (let i = 0; i < jonasArray.length; i++) {
  //reading from array
  console.log(jonasArray[i], typeof jonasArray[i]);
  //Filling the types array method 1

  //types[i] = typeof jonasArray[i];

  //Filling the types array method 2 :  push method,, adds new element to end of array
  types.push(typeof [i]);
}

console.log(types);

console.log("____________________________________________________");

//Example 2: 2 arrays, apply some method, and store result in new empty array
const year = [2007, 1992, 1995, 2000, 1982];
const age = []; //new empty array

for (let i = 0; i < year.length; i++) {
  age.push(2037 - year[i]); //age.push here adds result in new array and method used is subtraction
}
console.log(age);

console.log(jonasArray);

//continue (to exit continue loop and go to next one) and break (completely terminate loop operation)
//continue
console.log(`Log ----ONLY STRING Values--- from array: ${jonasArray}.`);
for (let i = 0; i < jonasArray.length; i++) {
  // continue
  if (typeof jonasArray[i] !== "string") continue;

  //reading from array
  console.log(jonasArray[i], typeof jonasArray[i]);
}

//continue (to exit continue loop and go to next one) and break (completely terminate loop operation)
//break when any number is found
console.log(jonasArray);
console.log(`Log ----when first Number is found--- from array: ${jonasArray}.`);
for (let i = 0; i < jonasArray.length; i++) {
  // continue
  if (typeof jonasArray[i] === "number") break;

  //reading from array
  console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("____________________________________________________");

//Looping Forwards and Backwards

const myArray = [
  "Farheen",
  "Sarfraz",
  2037 - 1996,
  "Textile Designer",
  ["Mehak", "Nabiha", "Andleeb"],
];
//forwards printing
for (let i = 0; i < myArray.length; i++) {
  console.log(i, myArray[i]);
}

//Backwards printing

for (let i = myArray.length - 1; i >= 0; i--) {
  console.log(i, myArray[i]);
}

//Loop inside of loop

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------Starting exercise: ${exercise}`);
  for (let repition = 1; repition < 6; repition++) {
    console.log(
      `Exercise No: ${exercise}: Lifting weights repition ${repition}`
    );
  }
}

//Exercise Loop:
let voters = 50;

for (let i = 1; i <= voters; i++) {
  console.log(`'Voter number ${i} is currently voting.`);
}

/*
const finlandCountry = describeCountry("Finland", 6, "Helsinki");
console.log(finlandCountry);

const pakistanCountry = describeCountry("Pakistan", 220, "Islamabad");
console.log(pakistanCountry);

const indiaCOuntry = describeCountry("India", 2000, "New Delhi");
console.log(indiaCOuntry);
console.log("____________________________________________________");
*/

/*//example of function declaration
const populationOfWorld = 7900;
function percentageOfWorld1(population) {
  console.log(population);
  const percentCalculator = (population / populationOfWorld) * 100;
  return percentCalculator;
}

const percentageOfChina = percentageOfWorld1(1441);
console.log(
  `China has population of 1441 Million people and it is ${percentageOfChina} percent.`
);
 */

console.log("____________________________________________________");

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  console.log(i, listOfNeighbours[i]);
}

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

/*
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------Starting exercise: ${exercise}`);
  for (let repition = 1; repition < 6; repition++) {
    console.log(
      `Exercise No: ${exercise}: Lifting weights repition ${repition}`
    );
  }
}*/

let rep = 1;
while (rep <= 10) {
  console.log(`'Voter number ${rep} is currently voting.`);
  rep++;
}

//rolling a dice example
/*
let dice = Math.random() * 6;
console.log(dice); //its a decimal number and is always random ()
*/

let dice = Math.trunc(Math.random() * 6) + 1; //adding 1 gives 6, otherwise max number will be 5
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a dice number: ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop is about to end......`);
  }
}

//IF else statmenets Check if person is eligble for driving (above 18)

let personAge = Math.trunc(Math.random() * 100 + 1);
console.log(personAge);

let recommendedDrivingAge = 20;
let yearsLeft = recommendedDrivingAge - personAge;

if (personAge >= recommendedDrivingAge) {
  console.log(`The person with age ${personAge} is allowed to drive.`);
} else
  console.log(
    `The person is not allowed to drive. He/she needs ${yearsLeft} years to reach permitted age.`
  );

/*
  Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

//Step 1: Create a function CalcTip
function calcTip(billAmount) {
  const Tip =
    billAmount <= 50 && billAmount >= 300 //calculate Tip based on req
      ? billAmount * 0.15
      : billAmount * 0.2;
  return Tip;
}

for (let i = 0; i < bills.length; i++) {
  const tipCalculation = calcTip(bills[i]); //tip calculation
  tips.push(tipCalculation); //puhsing tip values in tips array
  totals.push(tipCalculation + bills[i]); //pushing total count (tips plus amount in total array)
}

console.log(bills);
console.log(tips);
console.log(totals);
/*
//Step 1: Create a function CalcTip
function calcTip(billAmount) {
  const Tip =
    billAmount <= 50 && billAmount >= 300 //calculate Tip based on req
      ? billAmount * 0.15
      : billAmount * 0.2;
  return Tip;
}

// define array bills (test data)
const bills = [125, 444, 44];

// calculate tips using bills array and function calcTip and giving position
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

//calculate total bill using array bills and array tips (giving position 0,1,2)

const totalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totalBill);

//calculate bills, tips, total bill
console.log(bills, tips, totalBill); 

*/
console.log();

//BUG
