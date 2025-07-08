//your code here
const input = document.getElementById("newTodoInput");
const addButton = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", function () {
  const todoText = input.value.trim();

  if (todoText === "") {
    return;
  }
  const li = document.createElement("li");
  li.textContent = todoText;

  todoList.appendChild(li);
  input.value = "";
});

