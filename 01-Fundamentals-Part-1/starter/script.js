/* Main Code Hide

console.log(40 + 10 + 23 - 10);

// let js = "amazing";

// if (js === "amazing")
// alert("JS is fun to learn");

let firstName = "Younas";
console.log(firstName);

let myFirstJob = "Teacher";
let myCurrentJob = "Programmer";

console.log(myCurrentJob);

let jobSwap = myFirstJob;
console.log(jobSwap);

myFirstJob = myCurrentJob;

console.log(myCurrentJob);
console.log(myFirstJob);



let country = "Pakistan";
let continent = "Asia";
let population = 220;

console.log(country, continent, population);

console.log(true);
console.log(false);

let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);

console.log(typeof javaScriptIsFun);
console.log(typeof "Younas");

javaScriptIsFun = "YES!";

console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1992;
console.log(typeof year);

console.log(null);
console.log(typeof null); */ /* Main Code Hide

// Exercise
/*1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console*/

/* Main Code Hide
let isIsland = "true";
let language;

console.log(typeof isIsland);
console.log(typeof language);

language = "Urdu";

const myName = "Younas";

console.log(language);

console.log(myName);

const ageTarget = 2040;
const ageYounas = ageTarget - 1992;
const ageSarah = ageTarget - 1996;

console.log(ageYounas, ageSarah);

const firstName = "Zoya";
const lastName = "Khald";
//concatenation

console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
console.log(x);

x = x * 4;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

if (ageYounas > ageSarah) {
  console.log("Younas age is greater than Sarah");
}

console.log(ageYounas > ageSarah);

let finlandPeople = 11;
let pakistanPeople = 220;

console.log(pakistanPeople <= finlandPeople);

console.log(pakistanPeople >= finlandPeople);

console.log(pakistanPeople == finlandPeople);

//Basic operators

console.log((leftPeople = pakistanPeople / 2));
leftPeople++;
console.log(leftPeople);

let description =
  "Portugal is in Europe, and its" +
  " " +
  finlandPeople +
  " " +
  "million people speak portuguese";
console.log(description); Main Code Hide */

// Coding Challenge

/*Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall. */

//Main Code Hide
//Test Data 1
/*

let massMark = 78,
  heightMark = 1.69;
let massJohn = 92,
  heightJohn = 1.95;

console.log(massMark, heightMark);
console.log(massJohn, heightJohn);

console.log(
  (bmiMark = "BMI of Mark is: " + "  " + massMark / (heightMark * heightMark))
);
console.log(
  (bmiJohn = "BMI of John is: " + "  " + massJohn / (heightJohn * heightJohn))
);

let markHigherBMI;

if (bmiMark > bmiJohn) {
  console.log(
    (markHigherBMI = bmiMark > bmiJohn),
    "BMI of Mark is greater than BMI John"
  );
} else console.log("BMI of Mark is lesser than BMI John");

console.log(markHigherBMI);

//Test Data 2
let massMark2 = 95,
  heightMark2 = 1.88;
let massJohn2 = 85,
  heightJohn2 = 1.76;

console.log(massMark2, heightMark2);
console.log(massJohn2, heightJohn2);

let bmiMark2, bmiJohn2;

console.log(
  "BMI of Mark is:" + "  " + (bmiMark2 = massMark2 / heightMark2 ** 2)
);
console.log(
  "BMI of John is:" + "  " + (bmiJohn2 = massJohn2 / heightJohn2 ** 2)
);
let markHigherBMI2;
if (bmiMark2 > bmiJohn2) {
  console.log(
    ((markHigherBMI2 = bmiMark2 > bmiJohn2),
    "BMI of Mark2 is greater than BMI John2")
  );
} else
  console.log(`BMI of Mark2 ${bmiMark2} is lesser than BMI John2 ${bmiJohn2}`);

  */
//My details with Template Literals (better way of writing english sentences)
/*
let newName = "Younas";
let job = "Tester";
let birthYear = "1992";
let currentYear = "2024";

const newNames = `I'm ${newName} and I am ${job} and I am ${
  currentYear - birthYear
} years old.`;
console.log(newNames);

console.log(`${country} is a country in Asia and has
a population of approximately 220M people.`); */

//Main Code Hide

//IF else statmenets Check if person is eligble for driving (above 18)
/*

let personAge = 0;
let recommendedDrivingAge = 20;
let yearsLeft;

if (personAge >= recommendedDrivingAge) {
  console.log(`The person with age ${personAge} is allowed to drive.`);
} else
  console.log(
    `The person is not allowed to drive. He/she needs ${(yearsLeft =
      recommendedDrivingAge - personAge)} years to reach permitted age.`
  );

console.log(yearsLeft);

//challenge ifelse statements

const countryPopulation = 130;
const desiredPopulationAverage = 22;
let averagePopulation;

if (countryPopulation >= desiredPopulationAverage) {
  console.log(`The country population is above average population.`);
} else console.log(`The country population is below average population.`);

// Converting strings to numbers (type Conversion)
const inputYear = "1992";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(String(1996));

// Converting strings to numbers (type Coercion)
console.log("I am a " + 12 + "year old person");
console.log("22" - "12" - 3); //will return 7 as JS considers strings numbers here
console.log("10" * "2" * 3); // will return 60
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143,,how?? >> 11+"4" =114, 114 + "9"= 1149, 1149 -4-2 = 1143

//falsy values: will be converted to false when converted to boolean, rest values are called truthy when converted to boolean
// list of 5 falsy values: "", 0, NaN, undefined, null

console.log(Boolean(0)); //returns false
console.log(Boolean(undefined)); //returns false
console.log(Boolean("")); //returns false
console.log(Boolean({})); //returns true
console.log(Boolean("Younas Khan")); //returns true

const money = 0;
if (money) {
  console.log("Dont spend all of your money");
} else console.log("You have 0 money, go get a job.");


*/
//prompting value from a user

/* console.log(
  (favoriteValue = Number(prompt("What is your favorite number? :")))
);
console.log(typeof favoriteValue); */

//Equality operatiors === vs ==
/* let favouriteValue;

favouriteValue = Number(prompt("What is your favorite number?: "));
console.log(favouriteValue, typeof favouriteValue);

if (favouriteValue === 23) {
  console.log("Cool, 23 is an amazing number!");
} else if (favouriteValue === 7) {
  console.log("Cool, 7 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}
*/

/* 
let numNeighbours;

numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours == 1) {
  console.log("Only 1 Border");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else console.log("No Borders");

// Boolean Logic AND, OR, NOt operators
const hasDrivingLicense = true;
const hasGoodVision = true;

console.log(hasDrivingLicense && hasGoodVision); //returns true when all values are true
console.log(hasDrivingLicense || hasGoodVision); //is true when any 1 value is true
console.log(!hasDrivingLicense); //returns opposite

/*
if (hasDrivingLicense && hasGoodVision) {
  console.log("Sarah is able to drive");
} else console.log("Sarah is not able to drive, someone else should drive.");

*/

/*
const driverIsTired = false;
if (hasDrivingLicense && hasGoodVision && !driverIsTired) {
  console.log("Sarah is able to drive");
} else console.log("Sarah is not able to drive, someone else should drive.");
*/

/*
const myLanguage = prompt("What is your mother tongue:");
const myCountry = prompt("What is the name of your country : ");
const myPeople = Number(
  prompt("How many people live (In Millions) in your country :")
);
const landOrIsland = prompt("Is your country an Island?: ");

console.log(myLanguage, myCountry, myPeople, landOrIsland);

if (myCountry === "Pakistan" || myLanguage === "Urdu") {
  console.log("Congratulations, guessed the wright country");
} else console.log("Sorry, try again");

*/

//Challenge 3

const TeamDolphinsScore1 = 96;
const TeamDolphinsScore2 = 108;
const TeamDolphinsScore3 = 89;

const TeamKoalaScore1 = 88;
const TeamKoalaScore2 = 91;
const TeamKoalaScore3 = 110;

const AverageScoreOfTeamDolphin =
  (TeamDolphinsScore1 + TeamDolphinsScore2 + TeamDolphinsScore3) / 3;
console.log(
  `The average score of Team Dolphin is : ${AverageScoreOfTeamDolphin}`
);

const AverageScoreOfTeamKoala =
  (TeamKoalaScore1 + TeamDolphinsScore2 + TeamDolphinsScore3) / 3;
console.log(`The average score of Team Koala is : ${AverageScoreOfTeamKoala}`);

if (AverageScoreOfTeamDolphin > AverageScoreOfTeamKoala) {
  console.log(`Team Dolphin is the Winner of the Tournament.`);
} else if (AverageScoreOfTeamDolphin === AverageScoreOfTeamKoala) {
  console.log(
    `Team Dolphin and Team Koala have same number of average Scores. So the Tournament is tied.`
  );
} else console.log(`Team Koala is the winner of the Tournament`);

const TeamDolphinsScore1Bonus = 90;
const TeamDolphinsScore2Bonus = 100;
const TeamDolphinsScore3Bonus = 10;

const TeamKoalaScore1Bonus = 101;
const TeamKoalaScore2Bonus = 10;
const TeamKoalaScore3Bonus = 10;

let TeamWinCriteria = 100;

const AvgTeamDolphins =
  (TeamDolphinsScore1Bonus +
    TeamDolphinsScore2Bonus +
    TeamDolphinsScore3Bonus) /
  3;
console.log(`Team Dolphin scored ${AvgTeamDolphins} points.`);

const AvgTeamKoala =
  (TeamKoalaScore1Bonus + TeamKoalaScore2Bonus + TeamKoalaScore3Bonus) / 3;
console.log(`Team Koala scored ${AvgTeamKoala} points.`);

if (AvgTeamDolphins > AvgTeamKoala && AvgTeamDolphins >= TeamWinCriteria) {
  console.log(
    `Congratulations, Team Dolphins Won and scored ${AvgTeamDolphins} points.`
  );
} else if (AvgTeamKoala > AvgTeamDolphins && AvgTeamKoala >= TeamWinCriteria) {
  console.log(
    `Congratulations, Team Koala Won and scored ${AvgTeamKoala} points.`
  );
} else if (
  AvgTeamDolphins === AvgTeamKoala &&
  AvgTeamDolphins >= TeamWinCriteria &&
  AvgTeamKoala >= TeamWinCriteria
) {
  console.log(`Both teams have scored equal points. So both team are winner.`);
} else
  console.log(
    `Both teams are unable to reach minimum criteria of ${TeamWinCriteria} points.`
  );

//Switch case

const day = "Tuesday";

switch (day) {
  case "Monday": //"day === monday"
    console.log("Plan a course structure.");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Prepare theory and exams.");
    break;
  case "Wednesday":
    console.log("Learn Programming language.");
    break;
  case "Thurdsay":
    console.log("Write code examples.");
    break;
  case "Friday":
    console.log("Record videos.");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Not a valid day!!");
}

let myday = "Tuesday";
if (myday === "Monday") {
  console.log("Buhahahahah.");
} else if (myday === "Tuesday") {
  console.log("Prepare theory and exams.");
} else if (myday === "Wednesday") {
  console.log("Prepare theory and exams.");
} else if (myday === "Thursday") {
  console.log("Write code examples.");
} else if (myday === "Friday") {
  console.log("Record videos.");
} else if (myday === "Saturday") {
  console.log("Enjoy the weekend!");
} else if (myday === "Sunday") {
  console.log("Enjoy the weekend!");
} else console.log("Not a valid day!!");

// Conditional or Ternary Operator (If else statement in 1 Line)
const age = 16;

const drink =
  age >= 18
    ? `You are allowed to smoke! ` /*if statement */
    : `You are not adult.`; /*else block */
console.log(drink);

const drink2 = age >= 18 ? `You can drink wine 😉` : `You can drink water 💧`;
console.log(drink2);

console.log(
  `I would like to drink ${
    age >= 18 ? `You can drink wine 😉` : `You can drink water 💧`
  }`
);

//coding challenge 4 Bill Calculator

const billValue = 40;
//const tipPercentage = 15;
//let TipCalculator = (tipPercentage / 100) * billValue;

// console.log(TipCalculator);

const Tip =
  billValue >= 50 && billValue <= 300
    ? `${(15 / 100) * billValue}`
    : `${(20 / 100) * billValue}`;

// console.log(Tip);

// console.log(billValue);

console.log(typeof Tip);
console.log(typeof billValue);

console.log(
  `Your Food Bill is ${billValue}, and tip is ${Tip}, hence total Bill including Tip is: ${
    billValue + Number(Tip)
  }
}`
);

const TeamDolphin = [90, 100, 10];
const TeamKoala = [101, 10, 10];

function calcAvg(TeamDolphin) {
  let sum = 0;
  for (let i = 0; i < TeamDolphin.length; i++) {
    sum += TeamDolphin[i];
  }
  return sum / TeamDolphin.length;
}

const AverageDolphin = calcAvg(TeamDolphin);
console.log(AverageDolphin);
