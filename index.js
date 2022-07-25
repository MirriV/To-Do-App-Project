//Create a new list item when clicking on new task

let addToDoButton= document.getElementById('addItem');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

let editButton=document.getElementById('editButton');
let deleteButton=document.getElementById('deleteButton');

addToDoButton.addEventListener('click',function(){
    var paragraph = document.createElement('p')
    paragraph.innerText=inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value=""; //clear input field after adding new task

  

})