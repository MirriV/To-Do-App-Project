//Create a new list item when clicking on new task
//Selectors
let todoInput = document.querySelector('.todo-input');
let addtodoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');

let toDoContainer = document.getElementById('.todo-container');

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
addtodoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
/*todoList.addEventListener('click', completed);*/



//functions

function addTodo(event) {
    //Prevent form from refreshing/submitting
    event.preventDefault();
    //Todo Div to which buttons are appended
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //add to locat storage
    saveLocalTodos(todoInput.value);

    //checked button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Delete button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

 

    //append to list(attaching to actual UL)
    todoList.appendChild(todoDiv);

}

function deleteCheck(e) {
    const item = e.target;

    /*Delete to do*/

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();

    }

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

//SAVE LOCAL TODOS 1
function saveLocalTodos(todo) {
    //check are these todo already saved?
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
    
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function(todo){
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
    
        //Create LI
        const newTodo = document.createElement("li");
        newTodo.innerText = todo;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
    
     
    
        //checked button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        //Delete button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
    
     
    
        //append to list(attaching to actual UL)
        todoList.appendChild(todoDiv);

    });
}
//SORT ALPHABETICALLY
 function Alphabetsort(string){
    var x= string.split("");
    return x.sort().join("");
 }
 console.log(Alphabetsort("todo-list")); /*how to access list of to-do's after they're added and insert them here to be sorted?*/