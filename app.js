
let form = document.getElementById('formtask');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let description = document.getElementById('desc').value;

    const task = {
        title,
        description
    }

    if (localStorage.getItem('tasks') === null) {
        let tasks = [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }

    getTasks();
    form.reset();
});

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let newTasks = document.getElementById('tasks');

    newTasks.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;
        newTasks.innerHTML += `
        <div class="card mb-2">
            <div class="card-body">
              <p>${title} - ${description}</p>
              <a class="btn btn-danger" onclick="deleteTasks('${title}')">Delete</a>
            </div>
        </div>
    `}
}

function deleteTasks(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title == title) {
            tasks.splice(i, 1);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks();
}

getTasks();




