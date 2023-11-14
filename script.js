document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function createTaskElement(taskText) {
        const listItem = document.createElement("li");
        listItem.classList.add("task-item");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");

        const label = document.createElement("label");
        label.innerText = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "&times;";
        deleteButton.classList.add("delete-button");
        deleteButton.onclick = function () {
            listItem.remove();
        };

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(deleteButton);

        checkbox.onchange = function () {
            label.style.textDecoration = checkbox.checked ? "line-through" : "none";
        };

        return listItem;
    }

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = createTaskElement(taskText);
            taskList.appendChild(listItem);
            taskInput.value = "";
        }
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            addTask();
        }
    }

    document.getElementById("addTaskButton").addEventListener("click", addTask);
    taskInput.addEventListener("keydown", handleKeyPress);
});
