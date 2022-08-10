//Create a new list item when clicking on new task
//Selectors
let todoInput = document.querySelector('.todo-input');
let addtodoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');





//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
addtodoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);


/*Sort function*/

function sortList(){
    
    var list, i , switching, listitems, shouldSwitch;
    list = document.getElementById('todoSort');
    switching= true;

    while (switching) {
        switching=false;
        listitems =list.getElementsByTagName("li");

        for (i=0 ;i<(listitems.lenght-1); i++){
            shouldSwitch =false;
            if(listitems[i].innerHTML.toLowerCase()>listitems[i+1].innerHTML.toLowerCase)
            shouldSwitch=true;
            break;

        }
    }
    listitems[i].parentNode.insertBefore(listitems[i+1], listitems[i]);
    switching =true;
}



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

function getTodos() {

    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {
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

/* EDIT LIST ITEMS*/
let todolistitem; // Element being edited

let listActions = {
  editItem: function() {
    currentElement.innerHTML = currentElement.innerHTML.replace(currentElement.innerText, editInput.value);
    editInput.value = '';
  }
}

let modalControls = {
  editModal: function(i)  {
    // *i* is *this* in *modalControls.editModal(this)*
    modalContainer.style.display = 'block';
    currentElement = i.parentElement;
    modalContainer.getElementsByTagName('input')[0].value = currentElement.innerText;
  }
}