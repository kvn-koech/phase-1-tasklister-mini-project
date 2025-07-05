document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    
    // Get the input value
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;
    
    // Create new task element
    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;
    
    // Add task to the list
    taskList.appendChild(newTask);
    
    // Clear the input field
    taskInput.value = "";
  });
});
