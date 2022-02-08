// Get Saved Data from storage
const getData = () => {
    const notesStor = localStorage.getItem('notes')
    try{
        return (notesStor) ? JSON.parse(notesStor): [];
    }catch(e){
        return [];
    }
   
}

// saved Data
const savedNotes = notes => localStorage.setItem('notes',JSON.stringify(notes));

// Generete Notes
const generetNotesDom = (note) => {
    const noteEl = document.createElement('div');
    const btnEl = document.createElement('button');
    const txtEl = document.createElement('a');

    btnEl.textContent = 'X';
    noteEl.appendChild(btnEl);
    btnEl.addEventListener('click',(e)=>{
        removeNote(note.id);
        savedNotes(notes);
        renderNotes(notes,filters);
    })
    
    if(note.title.length > 0)
        txtEl.textContent = ` ${note.title}`;
    else 
        txtEl.textContent = ' Unnamed Note';
    
    txtEl.setAttribute('href',`./edit.html#${note.id}`)
    noteEl.appendChild(txtEl);

    return noteEl
}

// Sorting
const sortNotes = (notes,sortBy)=>{
    if(sortBy === "byEdited"){
        return notes.sort((a,b)=>{
            if(a.updatedAt > b.updatedAt) return -1;
            else if (a.updatedAt < b.updatedAt) return 1;
            else return 0;
        })
    }
    else if(sortBy === "byCreated"){
        return notes.sort((a,b)=>{
            if(a.createdAt > b.createdAt) return 1;
            else if (a.createdAt < b.createdAt) return -1;
            else return 0;
        })
    }else{
        return notes.sort((a,b)=>{
            if(a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            else if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
            else return 0;
        })
    }
    
}

// Render Notes
const renderNotes = (notes,filters) =>{
    const root = document.getElementById('notes');
    notes = sortNotes(notes,filters.sortBy);
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

// Generete last edited message
const generetLastEdited = (timestemp) => {
    return `Last Edited from ${moment(timestemp).fromNow()}`
}