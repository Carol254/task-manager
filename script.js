

function onSubmit(event){
    event.preventDefault();

    let formData = new FormData(document.getElementById('taskForm'));
    let taskDiv = document.createElement('div');

    for(let [name,value] of formData.entries()){
        let p = document.createElement('p');
        p.textContent = name + ': ' + value;
        taskDiv.appendChild(p);
    }

 
    let tasksDiv = document.getElementById('tasks');
    tasksDiv.appendChild(taskDiv);

    document.getElementById('task-form').style.display = 'none';
    tasksDiv.style.display = '';

}

document.getElementById('taskForm').addEventListener('submit',onSubmit);

function newTask(){
    document.getElementById('task-form').style.display = '';
    document.getElementById('tasks').style.display = 'none';
    
    let form = document.getElementById('taskForm');


    form.querySelectorAll('input, textarea').forEach(element => {
        element.value = '';
    });
}