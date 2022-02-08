
const getSavedData = () => {
    const todosStor = localStorage.getItem('todos');
    return todosStor ? JSON.parse(todosStor) : [];
}

const generteTodosDom = (todo)=>{
    const containerEl = document.createElement('div')
    const txtEl = document.createElement('span');
    const checkBox = document.createElement('input')
    const removeBtn = document.createElement('button');
    checkBox.setAttribute('type','checkbox')
    checkBox.checked = todo.completed
    containerEl.appendChild(checkBox);
    checkBox.addEventListener('change',(e)=>{
        toggleTodo(todo.id);
        saveData(todos);
        renderTodos(todos,filters);
    })
    txtEl.textContent = todo.text;
    containerEl.appendChild(txtEl);

    removeBtn.textContent = 'X'
    containerEl.appendChild(removeBtn);
    removeBtn.addEventListener('click',(e)=>{
        removeTodo(todo.id);
        saveData(todos);
        renderTodos(todos,filters);
    })
    return containerEl;
}

const generteSummeryDom = (todos) => {
    const summery = document.createElement('h2');
    summery.textContent = `You have ${todos.length} incomplated`;
    return summery;
}

const renderTodos = (todos,filters) => {
    const root = document.getElementById('root');
    
    // FilterTodos => todo complated but not hide and uncomplated
    const filterdTodos = todos.filter((todo)=>{
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideComplatedMatch = !todo.completed || !filters.hideCompleted;
        return searchTextMatch && hideComplatedMatch;
    })

    // inComplated only
    const incomplatedTodo = filterdTodos.filter((todo)=>{
        return !todo.completed;
    })

    root.innerHTML = '';
    root.appendChild(generteSummeryDom(incomplatedTodo));

    filterdTodos.forEach(todo => {
        const p = generteTodosDom(todo)
        root.appendChild(p);
    });
}

const saveData = (todos) => {
    localStorage.setItem('todos',JSON.stringify(todos));
}

// Remove 
const removeTodo = (todoID) =>{
    const index = todos.findIndex((todo)=>{
        return todo.id === todoID;
    })
    if(index>-1){
        todos.splice(index,1);
    }
}

// Checked
const toggleTodo = (todoID)=>{
    const todo = todos.find((todo) =>{
        return todo.id === todoID;
    })
    if(todo){
        todo.completed = !todo.completed;
    }
}