//^ Selectors

const toDoInputForm = document.getElementById("to-do-input");
const textInput = document.getElementById("text-input");
const addInput = document.getElementById("add-form-input");
const addFormContainer = document.querySelector(".add-form-container");

//^Variables
let toDoList = [];

//&Events

toDoInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newToDo = textInput.value;
  toDoList.push(newToDo);
  localStorage.setItem("Ausgaben", JSON.stringify(toDoList))
  
  toDoInputForm.reset()
  addForm(newToDo);
});

const addForm = (a) => {
  // <form id="aufgaben-form" class="form-inline d-flex gap-3">
  //     <input
  //       type="text"
  //       class="form-control mb-2 mr-sm-2"
  //       id="add-form-input"
  //       readonly
  //     />

  //     <div class="form-check mb-2 mr-sm-2">
  //       <input
  //         class="form-check-input bg-success"
  //         type="checkbox"
  //         id="form-check"
  //       />
  //     </div>
  //   </form>

  const form = document.createElement("form");
  form.id = "aufgaben-form";
  form.className = "form-inline d-flex gap-3";

  const appendInput = (content) => {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "form-control mb-2 mr-sm-2";
    input.id = "add-form-input";
    input.setAttribute("readonly", true);
    input.value = content
    return input;
  };

  const createCheckButton = () => {
    const createDiv = document.createElement("div");
    createDiv.className = 'form-check mb-2 mr-sm-2';

    const inputCheck = document.createElement("input");
    inputCheck.id = "form-check";
    inputCheck.className ="form-check-input bg-success";
    inputCheck.type = "checkbox";
    createDiv.appendChild(inputCheck);

    return createDiv;
  };

  form.append(appendInput(a), createCheckButton());

  addFormContainer.append(form);
};


