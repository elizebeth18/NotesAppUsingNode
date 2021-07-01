const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes');


const fetchNotes = getNotes();
console.log(fetchNotes);

console.log("Valid e-mail :"+validator.isEmail('elizebeth18.jilu@example.com'));
console.log("Valid e-mail :"+validator.isEmail('example.com'));
console.log("Valid URL :"+validator.isURL('https://mead.io'));
console.log("Valid URL :"+validator.isURL('htclea/mead.io'));

console.log(chalk.bold.green('Success'));
console.log(chalk.hex('#DEADED').underline('Hello, world!'))

