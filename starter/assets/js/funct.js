///// ajouter

// Update function
function updateTask(index) {
    if (index === null) return;
    let title = document.getElementById("title").value;
    const type = document.querySelector('input[name="flexRadioDefault"]:checked')?.nextElementSibling.innerText;
    let priority = document.getElementById("priority").value;
    let status = document.getElementById("status").value;
    let date = document.getElementById("date").value;
    let description = document.getElementById("description").value;
  
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks[index] = { title, type, priority, status, date, description };
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("modal-task").style.display = "none";
  
    Swal.fire({
      title: 'Task Updated!',
      text: `Task updated with succes`,
      icon: 'info',
      confirmButtonText: 'Got it!'
    });
    displayTasks();
  }

  
///// delete
function deleteTask(TaskIndex) {
    if (TaskIndex !== null) {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      tasks.splice(TaskIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      // document.getElementById("modal-task").style.display = "none";
    }
  }
/////// function display ///////

function displayTasks() {

    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    const taskContainer = document.querySelector("#task-display-container");
    const inprogresstasks = document.querySelector("#in-progress-tasks");
    const donetasks = document.querySelector("#done-tasks");
    const question = document.querySelector("#question");


    donetasks.innerHTML ="";
    inprogresstasks.innerHTML = "";
    taskContainer.innerHTML = "";
  
    savedTasks.forEach((task, index) => {
  
      const taskHtml = `
    <button class="btn test d-flex animate__animated animate__jackInTheBox justify-content-center align-items-start border" id="draggable" onclick="clicktaskModal(${index})">
      <div class="d-flex justify-content-center align-items-center gap-3">
        <div id="question"><i class="fa-regular fa-circle-question" style="color: #05a777;"></i></div>
        <div class="d-flex flex-column justify-content-center align-items-start">
          <div class="fs-6">${task.title}</div>
          <div class="text text-secondary" style="font-size: smaller;">#${index + 1} created on ${task.date}</div>
          <div class="text" style="font-size: smaller;" title="${task.description}">
            ${task.description}
          </div>
          <div class="mt-2">
            <span class="btn-primary p-1 rounded" style="font-size: smaller;">${task.priority}</span>
            <span class="btn-secondary p-1 rounded" style="font-size: smaller;">${task.type}</span>
          </div>
        </div>
      </div>
    </button>
  `;
           if(task.status == "To Do")
           {
            taskContainer.innerHTML += taskHtml;
           }else if(task.status == "In Progress")
           {
            inprogresstasks.innerHTML += taskHtml;
           }else if(task.status == "Done")
           {
            donetasks.innerHTML += taskHtml;
           }
    });
  }
  // Call displayTasks on page load to show saved tasks
  window.onload = displayTasks;
  
  ////////////// button save

  document.getElementById("btn-save").addEventListener("click", function (e) {
    e.preventDefault();
  
    // Get form values
    let title = document.getElementById("title").value;
    const type = document.querySelector('input[name="flexRadioDefault"]:checked')?.nextElementSibling.innerText;
    let priority = document.getElementById("priority").value;
    let status = document.getElementById("status").value;
    let date = document.getElementById("date").value;
    let description = document.getElementById("description").value;
  
    // Error elements
    let errorTitle = document.getElementById("titelerror");
    let radiobtn = document.getElementById("radiobtn-error");
    let priorityError = document.getElementById("priority-error");
    let statusError = document.getElementById("status-error");
    let dateError = document.getElementById("date-error");
    let descriptionError = document.getElementById("description-error");
  
    // Validation
  
    if (title === '') {
      errorTitle.style.display = "block";
      errorTitle.style.color = "red";
      return;
    }
    if (!type) {
      radiobtn.style.display = "block";
      radiobtn.style.color = "red";
      return;
    }
    if (priority === "Please select") {
      priorityError.style.display = "block";
      priorityError.style.color = "red";
      return;
    }
    if (status === "Please select") {
      statusError.style.display = "block";
      statusError.style.color = "red";
      return;
    }
    let datee = new Date();
    if (date === '' || new Date(date) < datee) {
      dateError.style.display = "block";
      dateError.style.color = "red";
      return;
    }
    if (description === '') {
      descriptionError.style.display = "block";
      descriptionError.style.color = "red";
      return;
    }
  
    // Create an object for the new task
    const taskData = {
      title,
      type,
      priority,
      status,
      date,
      description
    };
  
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push(taskData);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  
    // swet alert
    Swal.fire({
      title: 'Task Added!',
      icon: 'success',
      confirmButtonText: 'Nice!'
    });
  
    taskk.style.display = "none";
    displayTasks();
  
  
  });