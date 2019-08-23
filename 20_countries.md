1. Make sure the countries challenge (react router challenge) from last week is as complete as possible. It will be used in a code along example today. These are the instructions:

- create a new react app
- we'll be using this api for the challenge so read the docs https://restcountries.eu/#api-endpoints-all
- create a router with the following views:
	- /list (lists all country names), each country allows you to click on it with a `<Link />`	
	- /country/:name (lists one country with information, include the image of the flag)
	- /search (a form field that allows you to search for a country, return a list of countries that match this search for every letter typed, hint: use .filter in componentDidMount)

2. Here's a basic js challenge for those that have completed the above.

```js 
// You are given a list of grocery items and their prices in parentheses.
// Write a function that will return an array of the prices only

let list = ["ice cream ($5.99)", "banana ($0.20)", "sandwich ($8.50)", "soup ($1.99)"];
let list1 = [];
let list2 = ["weet-bix ($4.99)", "milk ($3.50)", "bowl ($9.99)", "spoon ($4.95)", "smile ($0.00)"];

// Write function here

console.log(getPrices(list));
// [5.99, 0.2, 8.50, 1.99];

console.log(getPrices(list1));
// [];

console.log(getPrices(list2));
// [4.99, 3.50, 9.99, 4.95, 0.0];
```