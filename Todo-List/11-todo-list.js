const todoList = JSON.parse(localStorage.getItem("TodoList")) || [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const duedate = todoObject.duedate;
    const { name, duedate } = todoObject;
    const html = `
    <p>
    ${name}
    </p>
    <p>
    ${duedate}
    </p>
    <button class="delete-btn" onclick= "
    todoList.splice(${i}, 1);
    renderTodoList()";
    >Delete</button>
    
    `;
    todoListHTML += html;
  }
  document.querySelector(".display").innerHTML = todoListHTML;
}

function addTodo() {
  const inputEl = document.querySelector(".js-name-input");
  const name = inputEl.value;
  const duedateInputEl = document.querySelector(".js-due-date-input");
  const duedate = duedateInputEl.value;

  todoList.push({
    //name: name,
    //duedate: duedate,
    name,
    duedate,
  });
  localStorage.setItem("TodoList", JSON.stringify(todoList));
  inputEl.value = "";

  renderTodoList();
}
