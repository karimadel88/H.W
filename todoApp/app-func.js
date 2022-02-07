const getSavedData = () => {
    const todosStor = localStorage.getItem('todos');
    if(todosStor !== null)
        return JSON.parse(todosStor);
    else
        return [];
}

const generteTodosDom = (todo)=>{
    const containerEl = document.createElement('div')
    const txtEl = document.createElement('span');
    const checkBox = document.createElement('input')
    const removeBtn = document.createElement('button');
    checkBox.setAttribute('type','checkbox')

    containerEl.appendChild(checkBox);

    txtEl.textContent = todo.text;
    containerEl.appendChild(txtEl);

    removeBtn.textContent = 'X'
    containerEl.appendChild(removeBtn);
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

const savedDate = (todos) => {
    localStorage.setItem('todos',JSON.stringify(todos));
}