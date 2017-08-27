console.log("Starting notes.js");

// console.log(module);

module.exports.age = 30;
module.exports.location = 'Seremban';

module.exports.addNote = () => {
    console.log("addNote");
    return "New Note";
};

module.exports.add = (a, b) => {
    console.log("Addition function..")
    return a + b;
}