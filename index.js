//Create a new list item when clicking on new task
//Selectors
let todoInput = document.querySelector('.todo-input');
let addtodoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');

let toDoContainer = document.getElementById('.todo-container');

//Event Listeners
addtodoButton.addEventListener('click', addTodo);

//functions

function addTodo(event) {
    //Prevent form from refreshing/submitting
    event.preventDefault();
    //Todo Div to which buttons are appended
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //checked button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Delete button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list(attaching to actual UL)
    todoList.appendChild(todoDiv);

}






/*addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p')
    paragraph.innerText=inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value=""; //clear input field after adding new task

})*/