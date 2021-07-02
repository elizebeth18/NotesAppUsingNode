// const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes');


const fetchNotes = getNotes();
console.log(fetchNotes);



console.log(chalk.blue.inverse.bold('Success'));
console.log(chalk.hex('#DEADED').underline.inverse('Hello, world!'))

