document.addEventListener("DOMContentLoaded", () => {
  // Select elements
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get the input value
    const taskInput = document.querySelector("#new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      // Create a new list item
      const taskItem = document.createElement("li");

      // Create a span to hold just the task text
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;

      // Create delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "❌";
      deleteButton.addEventListener("click", () => taskItem.remove());

      // Append elements to task item
      taskItem.appendChild(taskSpan);
      taskItem.appendChild(deleteButton);

      // Append the task to the list
      taskList.appendChild(taskItem);

      // Clear the input field
      taskInput.value = "";
    }
  });
});
