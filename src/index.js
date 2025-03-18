// Wait for the DOM to load before executing
document.addEventListener('DOMContentLoaded', () => {
  displayDate(); // Show current date on page load

  let form = document.querySelector('#create-task-form');
  let taskInput = document.querySelector('#new-task-description');
  let taskList = document.querySelector('#tasks'); 

  if (!form || !taskInput || !taskList) {
      console.error("Form, input, or task list not found.");
      return;
  }

  form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent page refresh

      let todoInput = taskInput.value.trim();
      if (todoInput === '') {
          alert('Please enter a task!'); // Prevent empty task submission
          return;
      }

      buildToDo(todoInput);
      form.reset(); // Clear input field after submission
  });
});

// Function to create a new task
function buildToDo(todo) {
  let li = document.createElement('li');
  let btn = document.createElement('button');

  btn.addEventListener('click', handleDelete);
  btn.textContent = ' x '; // Delete button
  li.textContent = `${todo} `;
  li.appendChild(btn);

  document.querySelector('#tasks').appendChild(li); 
}

// Function to delete a task
function handleDelete(e) {
  e.target.parentNode.remove();
}

// Function to display the current date
function displayDate() {
  const today = new Date();
  const dateString = today.toDateString();
  document.getElementById('current-date').innerText = `Today's Date: ${dateString}`;
}
