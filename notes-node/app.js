console.log("Starting app");

// Load the module's functionality
const fs = require('fs');
const os = require('os');

// Using require to require notes file
const notes = require('./notes.js');

var user = os.userInfo();

// Write file
// fs.appendFile('greetings.txt', 'Hello World!', function (err) {
//     if (err) {
//         console.log('Unable to write file!');
//     }
// });

// Print user info
var user = os.userInfo();
console.log(user);

var result = notes.addNote();
console.log(result);

// fs.appendFile('greetings.txt', 'Hello ' + user.username + '! You are ' + notes.age + ' years old.');
// fs.appendFile('anothergreeting.txt', `Hello ${user.username}! You are ${notes.age} years old! 
// You are from ${notes.location}.`);

console.log('Result:', notes.add(-9, 2));