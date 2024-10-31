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