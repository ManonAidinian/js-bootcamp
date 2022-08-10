const todos = getSavedTodos();

const filters = {
  searchText: "",
  hideCompleted: false,
};

renderTodos(todos, filters);

// -------------------Search to do---------------------------

document.querySelector("#searchtodo").addEventListener("input", (event) => {
  filters.searchText = event.target.value;
  renderTodos(todos, filters);
});

// -------------------Checkbox-------------------------------

document
  .querySelector("#hide-completed")
  .addEventListener("change", (event) => {
    filters.hideCompleted = event.target.checked;
    renderTodos(todos, filters);
  });

// -------------------Add to do with form--------------------

document.querySelector("#todo-form").addEventListener("submit", (event) => {
  event.preventDefault();
  let textValue;
  if (event.target.elements.todo.value.length > 0) {
    textValue = event.target.elements.todo.value;
  } else {
    textValue = "untitled but still to do";
  }
  todos.push({
    id: uuidv4(),
    text: textValue,
    completed: false,
  });
  event.target.elements.todo.value = "";
  saveTodos(todos);
  renderTodos(todos, filters);
});
