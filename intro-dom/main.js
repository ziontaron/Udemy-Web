const todos = JSON.parse(localStorage.getItem("todos")) || [];
const render = () => {
  const todoList = document.getElementById("todo-list");
  const todosTemplate = todos.map((t) => "<li>" + t + "</li>");
  todoList.innerHTML = todosTemplate.join("");
  const elementos = document.querySelectorAll("#todo-list li");
  elementos.forEach((elemento, i) => {
    elemento.addEventListener("click", () => {
      console.log(elemento, i);
      elemento.parentNode.removeChild(elemento);
      todos.splice(i, 1);
      actualizatodos(todos);
      render();
    });
  });
};
const actualizatodos = (todos) => {
  const todosString = JSON.stringify(todos);
  localStorage.setItem("todos", todosString);
};
window.onload = () => {
  render();
  const form = document.getElementById("todo-form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const todo = document.getElementById("todo");
    const todoText = todo.value;
    todo.value = "";
    console.log(todoText);
    todos.push(todoText);
    actualizatodos(todos);
    render();
  };
};
