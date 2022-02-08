// Get Saved Data from storage
const getData = () => {
    const notesStor = localStorage.getItem('notes')
    if(notesStor !== null) {
        return JSON.parse(notesStor)
    }
    else{
        return [];
    }
}

// saved Data
const savedNotes = (notes)=>{
    localStorage.setItem('notes',JSON.stringify(notes));
}

// Generete Notes
const generetNotesDom = (note) => {
    const noteEl = document.createElement('div');
    const btnEl = document.createElement('button');
    const txtEl = document.createElement('a');

    btnEl.textContent = 'X';
    noteEl.appendChild(btnEl);
    btnEl.addEventListener('click',(e)=>{
        removeNote(note.id);
        savedNotes(notes)
        renderNotes(notes,filters);
    })
    if(note.title.length > 0)
        txtEl.textContent = ` ${note.title}`;
    else 
        txtEl.textContent = ' Unnamed';
    
    txtEl.setAttribute('href',`./edit.html#${note.id}`)
    noteEl.appendChild(txtEl);
    return noteEl
}

// Render Notes
const renderNotes = (notes,filters) =>{
    const root = document.getElementById('notes');
    filteredNotes = notes.filter(note=>{
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    root.innerHTML ='';
    
    filteredNotes.forEach(note => {
        const noteEl = generetNotesDom(note);
        root.appendChild(noteEl);
    })
}

// Remove Note ;
const removeNote = (noteId) => {
    const noteIndex = notes.findIndex((note)=>{
        return note.id === noteId;
    })

    if(noteIndex > -1){
        notes.splice(noteIndex,1);
    }
}