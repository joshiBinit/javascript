const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Load tasks from local storage
document.addEventListener('DOMContentLoaded', loadTasks);

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create a new task element
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = '✓';
    completeButton.onclick = function() {
        listItem.classList.toggle('completed');
        saveTasks(); // Save tasks after toggling completion
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '×';
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
        saveTasks(); // Save tasks after deletion
    };

    const taskButtons = document.createElement('div');
    taskButtons.className = 'task-buttons';
    taskButtons.appendChild(completeButton);
    taskButtons.appendChild(deleteButton);

    listItem.appendChild(taskButtons);
    taskList.appendChild(listItem);

    taskInput.value = ''; // Clear the input field
    saveTasks(); // Save tasks after adding
}

function saveTasks() {
    const tasks = [];
    const taskItems = document.querySelectorAll('#taskList li');
    taskItems.forEach(item => {
        const taskText = item.childNodes[0].textContent;
        const completed = item.classList.contains('completed');
        tasks.push({ text: taskText, completed: completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Save tasks to local storage
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task.text;
        if (task.completed) {
            listItem.classList.add('completed');
        }

        const completeButton = document.createElement('button');
        completeButton.textContent = '✓';
        completeButton.onclick = function() {
            listItem.classList.toggle('completed');
            saveTasks(); // Save tasks after toggling completion
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '×';
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
            saveTasks(); // Save tasks after deletion
        };

        const taskButtons = document.createElement('div');
        taskButtons.className = 'task-buttons';
        taskButtons.appendChild(completeButton);
        taskButtons.appendChild(deleteButton);

        listItem.appendChild(taskButtons);
        taskList.appendChild(listItem);
    });
}
