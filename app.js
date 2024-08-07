document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', handleTaskActions);

    function addTask(event) {
        event.preventDefault();
        
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }

    function handleTaskActions(event) {
        if (event.target.classList.contains('delete-btn')) {
            deleteTask(event.target);
        } else if (event.target.classList.contains('edit-btn')) {
            editTask(event.target);
        }
    }

    function deleteTask(button) {
        const taskItem = button.parentElement.parentElement;
        taskList.removeChild(taskItem);
    }

    function editTask(button) {
        const taskItem = button.parentElement.parentElement;
        const taskText = taskItem.querySelector('span').textContent;
        taskInput.value = taskText;
        taskList.removeChild(taskItem);
    }
});
