

function displayTodoList(){

    let todolistHTML ='';

    for (let i = 0 ; i<todoList.length ; i++){
        const todoObject = (todoList[i]);
        // const name = todoObject.name;
        // const date = todoObject.date;
        const{name , date}= todoObject;
        const html = `<div>${name}</div>
                    <div> ${date} </div>
                    <button onclick="deleteTodo(${i})" style="color: white;">Delete</button>
                    <button onclick="updateTodoPopup(${i})" style="color: white;">Update</button>
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

    if (!name) {
        alert("Task name cannot be empty.");
        return;
    }

    if (!isValidDate(date)) {
        alert("Please enter a valid date in YYYY-MM-DD format.");
        return;
    }

    todoList.push({name , date}); //input data as a object in the array .
    // console.log(todoList) ;
    list.value = "";
    dateInput.value = "";

    displayTodoList();
    console.log("hii");
}




function deleteTodo(index) {
    todoList.splice(index, 1);
    displayTodoList();
}

function updateTodoPopup(index) {
    closePopup();// Ensure only one popup exists at a time

    const popup = document.createElement("div");
    popup.classList.add("popup-container");
    popup.innerHTML = `
        <div class="popup">
            <label>Task Name:</label>
            <input type="text" class="input" id="update-name" value="${todoList[index].name}">
            <label>Date:</label>
            <input type="date" class="input" id="update-date" value="${todoList[index].date}">
            <div class="popup-button">
            <button class = "btn-update" onclick="applyUpdate(${index})">Save</button>
            <button class = "btn-update" onclick="closePopup()">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(popup);
}

function applyUpdate(index) {
    const newName = document.getElementById("update-name").value;
    const newDate = document.getElementById("update-date").value;

    if (!isValidDate(newDate)) {
        alert("Please enter a valid date in YYYY-MM-DD format.");
        return;
    }

    todoList[index] = { name: newName, date: newDate };
    closePopup();
    displayTodoList();
}

function closePopup() {
    const existingPopup = document.querySelector(".popup-container");
    if (existingPopup) {
        existingPopup.remove();
    }
}

function isValidDate(dateString) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
}



