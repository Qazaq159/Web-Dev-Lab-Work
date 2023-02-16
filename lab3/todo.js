// let todoItems = []
//
// function addTodo(text) {
//     const todo = {
//         text,
//         checked: false,
//         id: Date.now(),
//     };
//
//     todoItems.push(todo);
//     renderTodo(todo);
// }
//
//
// const form = document.querySelector('.js-form');
//
// form.addEventListener('submit', event => {
//    event.preventDefault();
//    const input = document.querySelector('.js-todo-input');
//    const text = input.value.trim();
//    if(text != ''){
//        addTodo(text);
//        input.value = '';
//        input.focus();
//    }
// });
//
// function renderTodo(todo){
//     const list = document.querySelector('.js-todo-list');
//     const isChecked = todo.checked ? 'done': '';
//
//     const node = document.createElement("li");
//
//     node.setAttribute("class", `todo-item ${isChecked}`);
//     node.setAttribute("data-key", todo.id)
//     node.innerHTML = `
//     <input id="${todo.id}" type="checkbox"/>
//     <label for="${todo.id}" class="tick js-tick"></label>
//     <span>${todo.text}</span>
//     <button class="delete-todo js-delete-todo" action="deleteTodo(${todo})">
//     </button>`;
//     list.append(node)
// }

function  crossItem(itemIndex){
    let todoList = document.querySelector("#checklist");
    let item = todoList.querySelector("li")
    // let todoItemList = document.querySelector("#checklist");
    // let item = todoItemList.getElementById(itemIndex);
    // console.log(item.text);
}

function processItem(event) {
    event.preventDefault();
    let todoItemText = document.getElementById("item-text").value;

    let todoItemList = document.querySelector("#checklist");
    let newIndex = todoItemList.getElementsByTagName("li").length;

    let node = document.createElement("li");
    node.setAttribute("class", "checklist-item");
    node.innerHTML = `
        <input type="checkbox" onclick="crossItem(${newIndex})">
        <del id="${newIndex}" style="display: none;">
            <label id="${newIndex}" class="checklist-label">${todoItemText}</label>
        </del>`

    todoItemList.append(node);
}