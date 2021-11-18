const fs = require('fs)

const getNotes = function () {
    return "Your notes..."
}

// add notes
const addNote = function (title, body) {
    const notes = loadNotes()

    notes.push({
        title: title,
        body: body
    })

    console.log(notes)
}

// save notes
const saveNotes = function () {
    //continue here - section 4/video 19
}


// load notes
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}