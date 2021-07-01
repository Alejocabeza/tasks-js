
let form = document.getElementById('formtask');

function saveTasks(e){
  e.preventDefault();
  let title = document.getElementById('title').value;
  let desc = document.getElementById('desc').value;
  
  const task = {
    title,
    desc
  }
  
  if(localStorage.getItem('tasks') === null){
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }else{
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }


  getTasks();
  form.reset();
}

function getTasks(){
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let newTasks = document.getElementById('tasks');

  newTasks.innerHTML = "";

  for(let i = 0; i < tasks.length; i++){
    let title = tasks[i].title;
    let desc = tasks[i].desc;
    newTasks.innerHTML += `<div class="card mb-2">
        <div class="card-body">
          <p>${title} - ${desc}</p>
          <a class="btn btn-danger" onclick="deleteTasks('${title}')">Delete</a>
        </div>
      </div>`
  }
}

function deleteTasks (title){
 let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++){
    if(tasks[i].title == title){
      tasks.splice(i, 1);
    }
  }
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

getTasks();



form.addEventListener('submit', saveTasks);



