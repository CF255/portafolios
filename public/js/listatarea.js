const dateNumber = document.getElementById('datenumber');
const dateText = document.getElementById('datetext');
const datemonth = document.getElementById('datemonth');
const dateyear = document.getElementById('dateyear');

const taskscontainer = document.getElementById('taskscontainer')


const setDate = () =>{
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', {day: 'numeric'});
    dateText.textContent = date.toLocaleString('es', {weekday: 'long'});
    datemonth.textContent = date.toLocaleString('es', {month: 'short'});
    dateyear.textContent = date.toLocaleString('es', {year: 'numeric'});
};

const addNewTask = event =>{
    event.preventDefault();
    const {value} = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundborder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    taskscontainer.prepend(task);
    event.target.reset();
}

const changeTaskState = event =>{
    event.target.classList.toggle('done');
}

const order = () =>{
    const done = [];
    const todo = [];
    taskscontainer.childNodes.forEach( el =>{
        el.classList.contains('done') ? done.push(el) : todo.push(el)
    })
    return [...todo, ...done]
}

const renderorderedtasks = () =>{
    order().forEach(el => taskscontainer.appendChild(el))
}

setDate();