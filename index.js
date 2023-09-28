

function displayTodoList(){

    let todolistHTML ='';

    for (let i = 0 ; i<todoList.length ; i++){
        const todoObject = (todoList[i]);
        // const name = todoObject.name;
        // const date = todoObject.date;
        const{name , date}= todoObject;
        const html = `<div>${name}</div>
                    <div> ${date} </div>
                    <button onclick=" todoList.splice(${i},1);
                        displayTodoList();
                    " style="color: white;">Delete</button>
                    `;
        todolistHTML += html;
    }
    // console.log(todolistHTML);
    document.querySelector('.to-do-list').innerHTML= todolistHTML;
}



const todoList= [];

function addTodo(){
    const list = document.querySelector(".name");
    const name = list.value;

    const dateInput = document.querySelector(".date");
    const date = dateInput.value;

    todoList.push({name , date}); //input data as a object in the array .
    // console.log(todoList) ;
    list.value = "";

    displayTodoList();
}
