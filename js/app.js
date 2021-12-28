//Define form variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load Event Listeners
loadEventListeners();

function loadEventListeners() {
    //Add Task event
    form.addEventListener('submit', addTask);
}

//Add Task function
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a Task');
    }

    //Create li element
    const li = document.createElement('li');
    // Add Class
    li.className = 'collection-item';
    //Create text node & append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //Create new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    //Add icon HTML
    link.innerHTML = '<i class="fas fa-minus"></i>';
    //Append the link to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);

    //Clear input
    taskInput.value = '';
    e.preventDefault();
}