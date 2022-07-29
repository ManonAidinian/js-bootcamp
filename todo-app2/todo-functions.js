//fetch existing todos from localStorage
const getSavedtodos = () => {
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
const renderTodos = (todos, filter) => {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filter.searchText.toLowerCase());
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
  const todoElement = document.createElement("p");
  todoElement.textContent = todo.text;
  return todoElement;
};

//generate summary DOM
const generateSummaryDOM = (incomplete) => {
  const summary = document.createElement("h3");
  summary.textContent = `You have ${incomplete.length} todos left`;
  return summary;
};
