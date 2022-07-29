// ➜  js-bootcamp git:(master) live-server todo-app

let todos = [];

const todosJSON = localStorage.getItem("todos");
if (todosJSON !== null) {
  todos = JSON.parse(todosJSON);
}

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

// -------------------Filter and render to do--------------------

const filters = {
  searchText: "",
  hideCompleted: false,
};

const renderTodos = (todos, filter) => {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text.includes(filter.searchText);
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });

  const incomplete = filteredTodos.filter((todo) => !todo.completed);

  document.querySelector("#todos").innerHTML = "";

  const summary = document.createElement("h3");
  summary.textContent = `You have ${incomplete.length} todos left`;
  document.querySelector("#todos").appendChild(summary);

  filteredTodos.forEach((todoobject) => {
    const todo = document.createElement("p");
    todo.textContent = todoobject.text;
    document.querySelector("#todos").appendChild(todo);
  });
};
renderTodos(todos, filters);

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
    text: textValue,
    completed: false,
  });
  renderTodos(todos, filters);
  event.target.elements.todo.value = "";
  localStorage.setItem("todos", JSON.stringify(todos));
});
