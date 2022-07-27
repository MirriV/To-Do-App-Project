//Create a new list item when clicking on new task
//Selectors
let todoInput = document.getElementById('inputField');
let todoButton= document.getElementById('addItem');
let todoList=document.getElementById('todo-list');

let toDoContainer = document.getElementById('toDoContainer');

//Event Listeners
addToDoButton.addEventListener('click',addTodo);

//functions

function addTodo(event){
    //Prevent form from refreshing/submitting
    event.preventDefault();
    //Todo Div
    const todoDiv =document.createElement('div');
    todoDiv.classList.add('todo');

//Create LI
const newTodo=document.createElement('li');
newTodo.innerText='hey';
newTodo.classList.add('todo-item');
todoDiv.appendChild(newTodo);
//checked button
const completedButton=document.createElement('button');
completedButton.innerHTML= '<i class="fas fa-check"></i>';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);
//Delete button
const trashButton=document.createElement('button');
trashButton.innerHTML= '<i class="fas fa-check"></i>';
trashButton.classList.add("complete-btn");
todoDiv.appendChild(trashButton);

}






/*addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p')
    paragraph.innerText=inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value=""; //clear input field after adding new task

})*/