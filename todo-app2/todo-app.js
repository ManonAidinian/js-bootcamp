// ➜  js-bootcamp git:(master) live-server todo-app

const todos = [
  {
    text: "laundery",
    completed: true,
  },
  {
    text: "groceries",
    completed: false,
  },
  {
    text: "waxing",
    completed: true,
  },
  {
    text: "honda",
    completed: false,
  },
  {
    text: "cat food",
    completed: false,
  },
];

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
  todos.push({
    text: event.target.elements.todo.value,
    completed: false,
  });
  renderTodos(todos, filters);
  event.target.elements.todo.value = "";
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

document.querySelector("#searchtodo").addEventListener("input", (event) => {
  filters.searchText = event.target.value;
  renderTodos(todos, filters);
});
