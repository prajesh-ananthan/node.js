console.log("Starting app");

// Load the module's functionality
const fs = require('fs');
const os = require('os');
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

fs.appendFile('greetings.txt', 'Hello ' + user.username + '!');