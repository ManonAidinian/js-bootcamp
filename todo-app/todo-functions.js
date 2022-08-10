//fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

//save todos
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

//render filtered todos
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });
  const incomplete = filteredTodos.filter((todo) => !todo.completed);
  document.querySelector("#todos").innerHTML = "";
  document.querySelector("#todos").appendChild(generateSummaryDOM(incomplete));

  filteredTodos.forEach((todo) => {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo));
  });
};

//generate todoDOM
const generateTodoDOM = (todo) => {
  const todoElement = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todo.completed;
  todoElement.appendChild(checkbox);
  checkbox.addEventListener("change", () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  const textElement = document.createElement("span");
  textElement.textContent = todo.text;
  todoElement.appendChild(textElement);

  const button = document.createElement("button");
  button.textContent = "x";
  todoElement.appendChild(button);
  button.addEventListener("click", () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoElement;
};

//generate summary DOM
const generateSummaryDOM = (incomplete) => {
  const summary = document.createElement("h3");
  summary.textContent = `You have ${incomplete.length} todos left`;
  return summary;
};

//remove todo by its ID
const removeTodo = (todoId) => {
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

//toggle to do complete/uncomplete
const toggleTodo = (todoId) => {
  const todo = todos.find((todo) => todo.id === todoId);
  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
};
