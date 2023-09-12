document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const taskCount = document.getElementById("taskCount"); // Counter element


    let totalTasks = 0; // Initialize the task count 

       // Function to update the task count
       function updateTaskCount() {
        taskCount.textContent = `Total tasks: ${totalTasks}`;
      }



    // Add a new task
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";
            totalTasks++; // Increment the task count
            updateTaskCount(); // Update the task count display
        }
    });

    // Mark a task as completed
    taskList.addEventListener("click", function (e) {
        if (e.target.tagName === "SPAN") {
            e.target.classList.toggle("completed");
        }
    });

    // Delete a task
    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            const listItem = e.target.parentElement;
            taskList.removeChild(listItem);
            totalTasks--; // Decrement the task count
            updateTaskCount(); // Update the task count display
        }
    });
});
