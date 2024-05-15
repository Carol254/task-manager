// Function to handle form submission
function onSubmit(event){
    event.preventDefault();

    // Get form data
    let formData = new FormData(document.getElementById('taskForm'));
    
    // Convert FormData to JSON
    let taskData = {};
    for(let [name, value] of formData.entries()){
        taskData[name] = value;
    }

    // Get existing tasks from localStorage or initialize as empty array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Add new task data to the tasks array
    tasks.push(taskData);

    // Store tasks array in localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Reset form
    document.getElementById('taskForm').reset();

    // Update UI to show newly added task
    updateTasksUI();
}

// Function to update UI with tasks stored in localStorage
function updateTasksUI() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let tasksDiv = document.getElementById('tasks');
    tasksDiv.innerHTML = ''; // Clear existing tasks

    // Loop through tasks and create HTML elements for each
    tasks.forEach((taskData, index) => {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('card');
        
        // Create paragraphs for each form field
        for(let key in taskData) {
            let p = document.createElement('p');
            p.textContent = `${key}: ${taskData[key]}`;
            taskDiv.appendChild(p);
        }
        
        // Create delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete Task';
        deleteBtn.classList.add('delete-btn', 'btn-primary');
        
        // Add event listener to delete button
        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1); // Remove task from tasks array
            localStorage.setItem('tasks', JSON.stringify(tasks)); // Update localStorage
            updateTasksUI(); // Update UI
        });
        
        // Append delete button to task div
        taskDiv.appendChild(deleteBtn);
        
        // Append task div to tasks container
        tasksDiv.appendChild(taskDiv);
    });

    // Show the main tasks container after updating UI
    document.getElementById('task-form').style.display = 'none';
    document.getElementById('main-tasks').style.display = '';
}

// Event listener for form submission
document.getElementById('taskForm').addEventListener('submit', onSubmit);

// Function to show form for adding new task
function newTask() {
    document.getElementById('task-form').style.display = '';
    document.getElementById('main-tasks').style.display = 'none';
}

// Initial UI update
updateTasksUI();
