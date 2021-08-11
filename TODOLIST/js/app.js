//UI
const form = document.getElementById('task-form');
const taskinput = document.getElementById('task');
const filter = document.getElementById('filter');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');

function addtask(e){

    if(taskinput.value === ''){
        window.alert("Add a Task");
    }

    // console.log(taskinput.value);
    const li = document.createElement('li');

    // add class
    // li.classList.add('collection-item');
    li.className = 'collection-item';

    // create text node append to li
    li.appendChild(document.createTextNode(taskinput.value));

    console.log(li);

    e.preventDefault();
}

//Event Listener
//add task

form.addEventListener('submit',addtask);