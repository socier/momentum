const todoForm = document.getElementById("todo-form");
const todoUL = document.getElementById("todo-ul");
const todoInput = todoForm.querySelector("input");

let todos = [];

function saveTodos() {
  localStorage.setItem("TODOS", JSON.stringify(todos));
}

function removeTodo(event) {
  const li = event.target.parentElement;
  todos = todos.filter(
    todo => todo.id !== parseInt(li.id)
  );
  li.remove();
  saveTodos();
}

function addTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const remove = document.createElement("a");
 
  span.innerText = newTodo.text + "  ";
  remove.innerText = "x"
  remove.addEventListener("click", removeTodo);
 
  li.id = newTodo.id;
  li.appendChild(span);
  li.appendChild(remove);

  todoUL.appendChild(li);
}

todoForm.addEventListener("submit", event => {
  event.preventDefault();
  const text = todoInput.value;
  const todo = {
    id: Date.now(),
    text: text
  };
  todos.push(todo);
  addTodo(todo);
  saveTodos();
  todoInput.value = "";
}); 


const saved = localStorage.getItem("TODOS");

if (saved) {
  const todos = JSON.parse(saved);
  todos.forEach(addTodo);
}
