const fs = require('fs')
const chalk = require('chalk')

const getNotes = function() {
    return 'your Note...'
}
const addNote = function(title, body) {
    const notes = loadNotes()
        //    const duplicationNotes = notes.filter((note) => title === note.title)
    const duplicationNote = notes.find((note) => title === note.title)
    if (!duplicationNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes)
        console.log(chalk.green.inverse('Note is added!'))
    } else {
        console.log(chalk.red.inverse('Title is taken!'))
    }

}

const removeNote = function(title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title
    })
    saveNote(notesToKeep)
    if (notes.length == notesToKeep.length)
        console.log(chalk.red.inverse('No note is founded'))
    else
        console.log(chalk.green.inverse('Removing is done'))
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(i => {
        console.log(chalk.blue.inverse(i.title))
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const targetNote = notes.find((note) => note.title === title)
    if (!targetNote) {
        console.log(chalk.red('There is no note with thid title'))
    } else {
        console.log(chalk.blue.inverse(targetNote.body))
    }

}


const saveNote = function(notes) {

    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const loadNotes = function() {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote

}