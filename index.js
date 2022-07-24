const input = document.querySelector(".taskInput input");
const button = document.querySelector(".taskInput button");

//user clicks on add new task//
button.onclick=()=>{
    let userData= input.value; //getting user entered value//
    let getLocalStorage=localStorage.getItem("New Todo");
    if(getLocalStorage==null){
        listArr=[];
    }else{
        listArr=JSON.parse(getLocalStorage); //transforming JSON string into a JS object//
    }
    listArr.push("Hello World!"); //pushing or adding user data//
    localStorage.setItem("New Todo", JSON.stringify(listArr));//transforming JS object into a JSON//

}