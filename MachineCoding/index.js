document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.querySelector(".todo-form");
  const todoInput = document.querySelector(".todo-input");
  const todoList = document.querySelector(".todo-list");
  const todoSubmit = document.querySelector(".todo-submit");

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText !== " ") {
      addTodo(todoText);
    } else {
      alert("Please Enter Some Task");
    }
  });

  function addTodo(text) {
    const todoItem = document.createElement("li");
    const editButton = document.createElement("button");
    const removeButton = document.createElement("button");

    todoItem.innerHTML = text;
    editButton.innerHTML = "✎";
    removeButton.innerHTML = "⤬";

    todoItem.appendChild(editButton);
    todoItem.appendChild(removeButton);

    todoList.appendChild(todoItem);
    todoInput.value = "";
  }
});
