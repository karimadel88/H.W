// Todos containt two chars text(string) and complated(boolean)
const todos = getSavedData();

// Filters ==> SearchText and hideComplated
const filters = {
    searchText : '',
    hideCompleted: false
}

// self render
renderTodos(todos,filters);

// to search aoutomatic when input text in search field
document.getElementById('search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos,filters);
})

// To Hide Complated todos
document.getElementById('check-box').addEventListener('change',(e)=>{
    filters.hideCompleted = e.target.checked;
    renderTodos(todos,filters);
})

// To Add new Todo
document.getElementById('new-todo').addEventListener('submit',(e)=>{
    e.preventDefault();
    todos.push({
        text : e.target.elements.text.value,
        completed : false
    })
    savedDate(todos)
    renderTodos(todos,filters);
    e.target.elements.text.value = ''
})