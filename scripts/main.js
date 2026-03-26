const todo = JSON.parse(localStorage.getItem("todo")) || [];

display();
document.querySelector(".add-button")
.addEventListener("click", () => {
    add();
});
function add() {
    const todoInput = document.querySelector(".todo-input");
    const todoDate = document.querySelector(".todo-date");
    
    if (todo.length > 8) {
        alert("limit reached");
        return;
    }
    
    if (todoInput.value.trim() === '') {
        return;
    }
    
    todo.push({ task: todoInput.value.trim(), date: todoDate.value.trim() });
    
    todoInput.value = '';
    todoDate.value = '';
    
    display();
}

function display() {
    const container = document.querySelector(".list-container");

    if (todo.length === 0) {
        container.innerHTML = '<p>NO RECORDS</p>';
        return; 
    }
    
    let html = '';
    todo.forEach((item) => {
        html += `<div class="task-container">
            <div class="task-text-container">
              <span>${item.task}</span>
            </div>
            <span class="date-text">${item.date || 'no date'}</span>
            <button class="delete-button">delete</button>
        </div>`;
    });

    container.innerHTML = html;
    localStorage.setItem("todo", JSON.stringify(todo));

    deleteTodo();
}

document.querySelector(".delete-all-button")
.addEventListener("click", () => {
    todo.splice(0, todo.length);
    display();
});

function deleteTodo() {
    const deleteButtons = document.querySelectorAll(".delete-button");

    deleteButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            todo.splice(index, 1);
            display();
        });
    });
}