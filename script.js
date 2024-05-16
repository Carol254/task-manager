
function onSubmit(event){
    event.preventDefault();

    let formData = new FormData(document.getElementById('taskForm'));
    
    let taskData = {};
    for(let [name, value] of formData.entries()){
        taskData[name] = value;
    }

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.push(taskData);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    document.getElementById('taskForm').reset();

    updateTasksUI();
}


function updateTasksUI() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let tasksDiv = document.getElementById('tasks');
    tasksDiv.innerHTML = '';
  
    tasks.forEach((taskData, index) => {
        let taskDiv = document.createElement('div');
        taskDiv.classList.add('card');
        
      
        for(let key in taskData) {
            let p = document.createElement('p');
            p.textContent = `${key}: ${taskData[key]}`;
            taskDiv.appendChild(p);
        }
        
        let deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete Task';
        deleteBtn.classList.add('delete-btn', 'btn-primary');
        
        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1); 
            localStorage.setItem('tasks', JSON.stringify(tasks)); 
            updateTasksUI(); 
        });
        
      
        taskDiv.appendChild(deleteBtn);
        
        tasksDiv.appendChild(taskDiv);
    });

    document.getElementById('task-form').style.display = 'none';
    document.getElementById('main-tasks').style.display = '';
}


document.getElementById('taskForm').addEventListener('submit', onSubmit);

function newTask() {
    document.getElementById('task-form').style.display = '';
    document.getElementById('main-tasks').style.display = 'none';
}


updateTasksUI();

