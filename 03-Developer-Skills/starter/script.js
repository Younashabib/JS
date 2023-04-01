// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

*/

//if 1 array

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function calcTempAmplitude(temperatures) {
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 0; i < temperatures.length; i++) {
    const currentTemp = temperatures[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(max, min);
  return max - min;
}
const amplitude = calcTempAmplitude(temperatures); //returns 17
console.log(amplitude);

//if 2 arrays

const temperature1 = [3, -2, -6, -1, 9, -13, 17, 15, 14, 9, 5];
const temperature2 = [12, 8, -2, -7, "error", 21, -13, 27, 35, 24, -10, 36];

//finding maximum temperature in array 1 : temperature1
const maxiTemperature1 = Math.max(...temperature1);
console.log(`The maximum temperature in array 1 is: ${maxiTemperature1}.`);

//finding minimum temperature in array 1 : temperature1
const minTemperature1 = Math.min(...temperature1);
console.log(`The maximum temperature in array 1 is: ${minTemperature1}.`);
//ignoring error values in array temperature 2:

for (let i = 0; i < temperature2.length; i++) {
  if (typeof temperature2 !== "number") continue;
  const minTemperature2 = Math.min(...temperature2);
  console.log(minTemperature2);
}
/*

const dayList = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

console.log(dayList);

function currentDay(dayList) {
  let day = dayList[0];
  for (let i = 0; i <= dayList.length; i++) {
    if (dayList[i] > day) {
      day = dayList[i];
    }
  }
  console.log(day);
}

currentDay(dayList);
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    units: "celcius",
    value: Number(prompt(`Please enter your temperature in degrees celcius:`)), //prompt always return a string
    //to convert string to number, we should use Number
  };
  console.log(measurement);

  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measur100ement.value);

  // to make a table of objects
  //console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin()); */

/*
1. Write a JS code to print numbers from 1 to 10
Function `printNumbers()` prints numbers from 1 to 10 using for loop. */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num = [7, 5, 6, 0, -2, 14, 80, 35, 8, 1];
const emp = [];

function printNumbers() {
  for (let i = 0; i <= numbers.length; i++) {
    emp.push(numbers[i] + num[i]);
  }
}
printNumbers();
console.log(emp);
