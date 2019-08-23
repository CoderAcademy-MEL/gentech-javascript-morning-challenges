Core:
// Create a function called buildStairway.
// This function will take a height and a type of stair as input, and will return the stairway
// If the height is zero or less than zero, return an empty array

"use strict";

const height = 3;
const type = "#";

const height1 = 5;
const type1 = "*";

const height2 = 0;
const type2 = "$";

const height3 = -2;
const type3 = "A";

// Write function here

console.log(buildStairway(height, type));
// ["#", "_", "_"],
// ["#", "#", "_"],
// ["#", "#", "#"];

console.log(buildStairway(height1, type1));
// ["*", "_", "_", "-", "-"],
// ["*", "*", "_", "-", "-"],
// ["*", "*", "*", "-", "-"],
// ["*", "*", "*", "*", "-"],
// ["*", "*", "*", "*", "*"];

console.log(buildStairway(height2, type2));
// [];

console.log(buildStairway(height3, type3));
// []