// const moment = require("moment");
let notes = getData();
const noteTitle = document.getElementById('note-title');
const noteText = document.getElementById('note-body');
const removeN = document.getElementById('remove-note')
const back = document.getElementById('back');
const noteId = location.hash.substring(1);
const dateEl = document.getElementById('last-edited');

let note = notes.find(note => noteId === note.id)
if(!note) location.assign('/index.html');

noteTitle.value = note.title;
noteText.value = note.body;
dateEl.textContent = generetLastEdited(note.updatedAt);

noteTitle.addEventListener('input',(e)=>{
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    dateEl.textContent = generetLastEdited(note.updatedAt);
    savedNotes(notes);
})

noteText.addEventListener('input',(e)=>{
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    dateEl.textContent = generetLastEdited(note.updatedAt);
    savedNotes(notes);
})

removeN.addEventListener('click',(e)=>{
    removeNote(note.id);
    savedNotes(notes);
    location.assign('/index.html')
})

back.addEventListener('click',(e)=>{
    location.assign('/index.html')
})

window.addEventListener('storage',(e)=>{
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue);
        note = notes.find((note)=>{
            return noteId === note.id;
        })

        if(!note){
            location.assign('/index.html');
        }
        noteTitle.value = note.title;
        noteText.value = note.body;
        dateEl.textContent = generetLastEdited(note.updatedAt);
    }

})
