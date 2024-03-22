const addBtn = document.getElementById("input-button");
const taskInput = document.getElementById("do-input");
const list = document.getElementById("listed-items");

getSavingTasksFromLocal();

function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        createTaskLi(task);
        taskInput.value = "";
        saveTasksInLocal();
    } else {
        alert("Do not input anything!!");
    }
}

addBtn.addEventListener("click", addTask)


function createTaskLi(task) {
    const items = document.createElement('li');
    items.textContent = task;


    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'deleteButton';
    deleteBtn.textContent = 'Delete';

    items.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function() {
        list.removeChild(items);
        saveTasksInLocal();
    });

    list.appendChild(items);
}

function saveTasksInLocal() {
    const saveItems = [];
    list.querySelectorAll('li').forEach(function(item) {
        saveItems.push(item.textContent.replace('Delete', " ").trim());
    });
    localStorage.setItem('saveItems', JSON.stringify(saveItems));
}

function getSavingTasksFromLocal() {
    const getItems = JSON.parse(localStorage.getItem('saveItems')) || [];
    getItems.forEach(createTaskLi);

}