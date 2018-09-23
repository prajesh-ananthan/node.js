/**
 * Callback function is a call after function
 *
 */

let getUser = (id, callback) => {
  let user = {
    id: id,
    name: "Vikram"
  };

  // Set a delay
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, user => {
  console.log(user);
});
