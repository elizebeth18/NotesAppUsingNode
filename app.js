// const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes');

//yargs version
yargs.version('1.1.0');

//create "add" command using yargs
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    //to pass arguments to yargs.command
    //the "builder" object is required
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body);
    }
})

//create "remove" command using yargs
yargs.command({
    command: 'remove',
    describe: 'To delete a note',
    //to pass arguments to yargs.command
    //the "builder" object is required
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
})

//create "list" command using yargs
yargs.command({
    command: 'list',
    describe: 'To list notes',
    handler: function(){
        console.log('To list notes');
    }
})

//create "read" command using yargs
yargs.command({
    command: 'read',
    describe: 'To read the notes',
    handler: function(){
        console.log('To read the notes');
    }
})

//console.log(yargs.parse());
yargs.parse();
