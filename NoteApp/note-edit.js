const noteId = location.hash.substring(1);
const notes = getData();
const noteTitle = document.getElementById('note-title');
const noteText = document.getElementById('note-body');
const removeN = document.getElementById('remove-note')
const back = document.getElementById('back');

const note = notes.find((note)=>{
    return noteId === note.id;
})

if(note === undefined){
    location.assign('/index.html');
}

noteTitle.value = note.title;
noteText.value = note.body;

noteTitle.addEventListener('input',(e)=>{
    note.title = e.target.value;
    savedNotes(notes);
})

noteText.addEventListener('input',(e)=>{
    note.body = e.target.value;
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