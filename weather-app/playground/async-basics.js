/**
 * The app is gonna continue to run while it waits for something to happen
 */

console.log("Starting...");

setTimeout(() => {
  console.log("Inside of callback method...");
}, 2000);

console.log("Finishing up...");
