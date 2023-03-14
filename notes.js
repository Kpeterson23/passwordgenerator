// message to the user

alert("This is the message");

// Collecting true false from the user

var trueFalseAnswer = confirm("This is my true false q");

// Collecting input from user

var inputAnswer = prompt("This is my input question");

// function () {}

// if () {}
//  for () {}

//  let array = []

//  array.push('apple')

//  .split
//  .join
//  .append

var colors = ["blue", "orange", "yellow", "pink"];
var shapes = ["circle", "square"];

var combine = [];

// combine.push(colors);
// combine.push(shapes);

combine = combine.concat(colors);
combine = combine.concat(shapes);

combine = combine.join("");

console.log("Combine: ", combine);
