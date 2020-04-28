const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
yargs.version('1.1.0')
    // add command
yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function(argv) {
        //   console.log(notes.getNotes)
        notes.addNote(argv.title, argv.body)
            //    console.log(argv.body)
    }
})


// remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        // console.log('Removing the note')
        notes.removeNote(argv.title)
    }
})

// read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'title note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.readNote(argv.title)
    }
})

// list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function() {
        notes.listNotes()
    }
})


yargs.parse()