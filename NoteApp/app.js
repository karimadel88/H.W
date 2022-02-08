// Data Storage

// localStorage.setItem('location','cairo')
// const ins = localStorage.getItem('location')
// console.log(ins)

// localStorage.removeItem('location')
// console.log(ins)

// const user = {
//     name : "karim",
//     age : 15
// }
// const ins = JSON.stringify(user);
// localStorage.setItem('key1',ins);
// // console.log(localStorage.getItem('key1'))
// const insObj = JSON.parse(localStorage.getItem('key1'));
// // console.log(insObj);

const notes = getData();

const filters = {
    searchText: ''
}

renderNotes(notes,filters);

document.getElementById('create-note').addEventListener('click', e => {
    const id = uuidv4();
    notes.push({
        id : id,
        title:'',
        body:''
    })
    savedNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.getElementById('search-text').addEventListener('input',e =>{
    filters.searchText = e.target.value;
    renderNotes(notes,filters);

})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})