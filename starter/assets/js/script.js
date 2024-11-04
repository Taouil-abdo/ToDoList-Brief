
// global variables

let taskk = document.getElementById("modal-task");
let hiddeenbtn = document.querySelectorAll(".hiddeen");
let btnSave = document.querySelector("#btn-save");
let TaskIndex = null;

/// button add task for show the modal form

document.getElementById("AddTasck").addEventListener("click", function () {
  taskk.style.display = "flex";
});

/// button close
document.getElementById("close-btnClose").addEventListener("click", function () {
  taskk.style.display = "none";
});

// button deleteTask
document.getElementById("btn-delete").addEventListener("click", function () {
  deleteTask(TaskIndex);
});

// button updateTask

document.getElementById("btn-update").addEventListener("click", function () {
  updateTask(TaskIndex);
});

function clicktaskModal(index) {
  TaskIndex = index; // selected index of the task

  // Populate the modal with task details
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const task = tasks[index];

  document.getElementById("title").value = task.title;
  document.getElementById("priority").value = task.priority;
  document.getElementById("status").value = task.status;
  document.getElementById("date").value = task.date;
  document.getElementById("description").value = task.description;

  // Display hidden buttons in the modal and 
  //  display modal 
  taskk.style.display = "flex";
  // Display hidden buttons update and delete
  for (let i = 0; i < hiddeenbtn.length; i++) {
    hiddeenbtn[i].style.display = "block";
  }
  // hide the save button
  btnSave.style.display = "none";
}






// let inProgressTasks = document.getElementById("in-progress-tasks");
// let draggable = document.querySelector(".test");
// draggable.addEventListener("drag", function() {
//     console.log("Dragging the box!");
// });

// // Drop event
// inProgressTasks.addEventListener("dragover", function(event) {
//     event.preventDefault(); // Allow drop
// });

// inProgressTasks.addEventListener("drop", function(event) {
//     event.preventDefault(); // Prevent default behavior
//     const x = event.clientX - inProgressTasks.offsetLeft;
//     const y = event.clientY - inProgressTasks.offsetTop;
//     draggable.style.left = x + 'px';
//     draggable.style.top = y + 'px';

// });

