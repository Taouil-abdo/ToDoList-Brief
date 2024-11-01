/////moda

let task = document.getElementById("modal-task");

/// button add task for show the modal form

document.getElementById("AddTasck").addEventListener("click", function () {

  if (task.style.display = "none") {
    task.style.display = "flex";
  }
});

/// button close
document.getElementById("close-btnClose").addEventListener("click", function () {

  if (task.style.display = "flex") {
    task.style.display = "none";

  }
});



/// form validation


// document.getElementById("btn-save").addEventListener("click", function (e) {
//   e.preventDefault();
//   let title = document.getElementById("title").value
//   let formCheckInput = document.getElementsByClassName("form-check-input");
//   let priority = document.getElementById("priority").value
//   let status = document.getElementById("status").value
//   let date = document.getElementById("date").value
//   let description = document.getElementById("description").value

//   let errorTitle = document.getElementById("titelerror");
//   let radiobtn = document.getElementById("radiobtn-error");
//   let priorityError = document.getElementById("priority-error");
//   let statusError = document.getElementById("status-error");
//   let dateError = document.getElementById("date-error");
//   let descriptionError = document.getElementById("description-error");


//   if (title == '') {
//     errorTitle.style.display = "block";
//     errorTitle.style.color = "red";
//   }

//   let TypeSelected = false;
//   for (let i = 0; i < formCheckInput.length; i++) {
//     if (formCheckInput[i].checked) {
//       TypeSelected = true;
//       break;
//     }
//   }
//   if (!TypeSelected) {
//     radiobtn.style.display = "block";
//     radiobtn.style.color = "red";
//   }

//   if (priority == "Please select") {
//     priorityError.style.display = "block";
//     priorityError.style.color = "red";
//   }
//   if (status == "Please select") {
//     statusError.style.display = "block";
//     statusError.style.color = "red";

//   }

//   let datee = new Date();
//   if (date == '' || date < datee) {
//     dateError.style.display = "block";
//     dateError.style.color = "red";

//   }
//   if (description == '') {
//     descriptionError.style.display = "block";
//     descriptionError.style.color = "red";

//   }

//   // Create an object for the task
//   const taskData = {
//     title,
//     type,
//     priority,
//     status,
//     date,
//     description
//   };

//   // Store task data in localStorage
//   localStorage.setItem("taskData", JSON.stringify(taskData));
//   alert("Task saved successfully!");

//   // Call function to display the task
//   displayTask();
// });

// Function to display task data in the specified format
// function displayTask() {
//   const savedData = JSON.parse(localStorage.getItem("taskData"));
//   if (!savedData) return;

//   // Target container to display task (adjust selector as needed)
//   const taskContainer = document.querySelector("#task-display-container");
//   taskContainer.innerHTML += `
  
//     <button class="btn d-flex justify-content-center align-items-start border">
//       <div class="d-flex justify-content-center align-items-center gap-3">
//         <div><i class="fa-regular fa-circle-question" style="color: #05a777;"></i></div>
//         <div class="d-flex flex-column justify-content-center align-items-start">
//           <div class="fs-6">${savedData.description}</div>
//           <div class="text text-secondary" style="font-size: smaller;">#6 created on ${savedData.date}</div>
//           <div class="text" style="font-size: smaller;" title="${savedData.description}">
//             ${savedData.description}
//           </div>
//           <div class="mt-2">
//             <span class="btn-primary p-1 rounded" style="font-size: smaller;">${savedData.priority}</span>
//             <span class="btn-secondary p-1 rounded" style="font-size: smaller;">${savedData.type}</span>
//           </div>
//         </div>
//       </div>
//     </button>
//   `;
// }

// // Call displayTask on page load to show saved task data
// window.onload = displayTask;
