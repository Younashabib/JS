'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [15, 18, 20];

console.log(arr); //returns (3) [15, 18, 20]

const a = arr[0]; //retrieving element 1, returns 15
const b = arr[1]; //retrieving element 2, returns 18
const c = arr[2]; //retrieving element 3, returns 20
console.log(a, b, c); //retrieving all values of an array, returns 15 18 20
console.log(arr); //returns (3) [15, 18, 20]

//method to retrive all element at one time

const [x, y, z] = arr;
console.log(x, y, z); //retrieving all values of an array abc replaced with xyz, returns 15 18 20

//Taking elements out of objects

console.log(restaurant.name); // returns Classico Italiano
console.log(restaurant.location); // returns Via Angelo Tavanti 23, Firenze, Italy

//Taking elements out of arrays and objects
console.log(restaurant.categories); //returns array (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
console.log(restaurant.categories[0]); // returns Italian
console.log(restaurant.categories[1]); // returns Pizzeria
console.log(restaurant.categories[2]); // returns Vegetarian
console.log(restaurant.categories[3]); // returns Organic
console.log(restaurant.categories[4]); // returns undefined /null

/*
const [first, second] = restaurant.categories;
console.log(first, second); //returns Italian Pizzeria
*/
console.log(restaurant.categories);
const [first, , second] = restaurant.categories; //gave intentional space at second place to grab 3rd element
console.log(first, second); //returns Italian Vegetarian

//lets consider a scenario where main category for the day is Pizzeria and secondary category is Vegetarian
console.log(restaurant.categories);
let [, mainCategory, secondaryCategory] = restaurant.categories; //gave intentional space in 1st place to grab 2nd and 3rd element
console.log(mainCategory, secondaryCategory); //returns Pizzeria Vegetarian (Pizzeria as maoin category here)

//let now Vegetarian be the maincategory and Pizzeria be second category (swapping/switching the values)

[mainCategory, secondaryCategory] = [secondaryCategory, mainCategory];
console.log(mainCategory, secondaryCategory); //returns Vegetarian Pizzeria (Vegetarian as main category here)
console.log(restaurant.categories);

//lets consider a scenario where now main category
console.log(restaurant.starterMenu); //returns array (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
console.log(restaurant.starterMenu[0]); // returns Focaccia
console.log(restaurant.starterMenu[1]); // returns Bruschetta
console.log(restaurant.starterMenu[2]); // returns Garlic Bread
console.log(restaurant.starterMenu[3]); // returns Caprese Salad
console.log(restaurant.starterMenu[4]); // returns null/undefined
console.log(restaurant.mainMenu); //returns array (3) ['Pizza', 'Pasta', 'Risotto']
