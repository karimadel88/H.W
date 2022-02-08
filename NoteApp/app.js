let notes = getData();
const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes,filters);

document.getElementById('create-note').addEventListener('click', e => {
    const id = uuidv4();
    const timestemp = moment().valueOf();
    notes.push({
        id : id,
        title:'',
        body:'',
        createdAt: timestemp,
        updatedAt: timestemp
    })
    savedNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.getElementById('search-text').addEventListener('input',e =>{
    filters.searchText = e.target.value;
    renderNotes(notes,filters);

})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.sortBy = e.target.value;
    renderNotes(notes,filters);

})

window.addEventListener('storage',e => {
    if(e.key === 'notes'){
        notes = JSON.parse(e.newValue);
        renderNotes(notes,filters)
        
    }
})