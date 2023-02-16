todoItemsList = []

function processItem(event) {
    event.preventDefault();
    let itemText = document.getElementById("item-text");
    if(itemText.value.trim() === "")
        alert("Empty");
    else
    {
        todoItemsList.push({
                task: itemText.value,
                completed: false
        });
        itemText.value = "";
        renderTask();
    }
}

function renderTask(){
    let checkList = document.getElementById("checklist");
    checkList.innerHTML = "";

    for(let i = 0; i < todoItemsList.length; i++){
        let currentTodoItem = todoItemsList[i];

        let taskItem = document.createElement("li");
        let taskText = document.createElement("span");
        taskText.setAttribute("class", "todo-text-label");

        let removeBtn = document.createElement("a");
        let removeImg = document.createElement("img");

        removeImg.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABa0lEQVR4nO2aS27CQAyG/0s04nGkcBG6bssB6LXoIWDBOQos6MrVVI4URSl4HvEY4U+KxMKJ/MmZ8UQGcBwnlRWAHYALAKp8nTmXNlbi00Dy9M+1jalEuOEK4A3AHPWZA3jnnEhamS8ODhLW+ODcwmt2lzMHz2CPGed2kgR376JVSJqfiyhBXhFjkFfkDmsADdJp+BlSJqnIK8ceEmUavpf4WdVEXgDsOf4YeZwZ3ittwJOtkRSZVInJF3uMTI6Eyq4lkcmVUNt+b8mUkFDtI2MypSTUG2J/Wz0Mfuf0nCqdvV+FEpUwJVLis5n81YpkbGHnnABMbL/9NVFKhrQb4tjCLiFDmkeUW7tTrgxpHRolW2yODGkc42P6RKoM+YfVM3zq1oBcxBjkFTEGPV1FThxoYeQ2ZMm5fUPAjoPDzM4am5jRW9sbhoaZ3QL1WbDED+cmHlNvByPhhxxPd7Rcwm44+pB/GHAcB3/8AsupkxGNr4djAAAAAElFTkSuQmCC");
        removeImg.setAttribute("class", "remove-img");

        removeBtn.appendChild(removeImg);
        removeBtn.onclick = function (){
            todoItemsList.splice(i, 1);
            renderTask();
        }

        taskText.textContent = currentTodoItem.task;

        taskItem.appendChild(removeBtn);
        taskItem.appendChild(taskText);

        if(currentTodoItem.completed){
            taskText.style.textDecoration = "line-through";
            taskText.style.fontWeight = "normal";
        }

        taskItem.onclick = function () {
            currentTodoItem.completed = !currentTodoItem.completed;
            renderTask();
        }
        taskItem.setAttribute("class", "checklist-item");
        checkList.appendChild(taskItem);
    }
}