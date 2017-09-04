console.log("Starting notes.js");

var addNote = (title, body) => {
    console.log('Adding note ==> ', title, body);
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Reading notes from ', title);
    console.log('The secret body of this note');
};

// remove --title='Secrets'
var remove = (title) => {
    console.log('Removing note', title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    remove
}