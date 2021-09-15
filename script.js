import { getList, removeLocalS } from "./modules/data.mjs";

// empty Array
let todoItems = [];
let root = document.getElementById('root');

let headerTmp = `<header><h2>Igor's Todo Lista</h2></header>`;

root.insertAdjacentHTML("afterbegin", headerTmp);


// Form
let form = document.createElement('form'); // created form element
form.classList.add('todo-input'); // adding class name to form
root.appendChild(form); // appending form to root

// Input field
let newInput = document.createElement('input'); // created input element
newInput.setAttribute('type', 'text'); // setting the attribute for input field
newInput.classList.add('input-field'); // setting class
form.appendChild(newInput); // appending input to form

// Button
let btn = document.createElement('button'); // creating button
//btn.setAttribute('type', 'submit'); // setting attribute to submit
btn.classList.add('todo-button'); // adding class to it
btn.innerText = 'Lägg till';
form.appendChild(btn); // appending btn to form



// Listan med li items

let todoTmp = `<div class="todo-container"><ul class="todo-list" >`;
todoTmp += `</ul></div>`;
root.insertAdjacentHTML('beforeend', todoTmp);

// Todo lista

let todoList = document.querySelector('.todo-list');


// Funktioner för att lägga todo punkt
function addItem(e) {
 e.preventDefault();
 if (newInput.value == '') {
  alert('Lägg till en todo punkt');
 } else {
  //Todo div
  let todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // Create Li
  let li = document.createElement('li');
  li.innerText = newInput.value;
  li.id = newInput.value;
  console.log(li.id);
  li.classList.add('todo-item');
  todoDiv.appendChild(li);
  // Kolla om det finns Local Storage och sedan lägger jag till ett item som argument, se data.mjs
  getList(newInput.value);
  // Completed button
  let completedBtn = document.createElement('button');
  completedBtn.innerText = 'Klar';
  completedBtn.classList.add('completed-btn');
  todoDiv.appendChild(completedBtn);
  // Append child to list
  todoList.appendChild(todoDiv);
  // Adding todo item inside the empty array
  todoItems.push(newInput.value);
  //console.log(todoItems);
  // Clear input value
  newInput.value = '';
 }
}
// Funktion för att ta bort todo punkt
function removeItem(e) {
 let item = e.target;
 // Delete todo
 if (item.classList[0] === 'completed-btn') {
  let todo = item.parentElement;
  todo.remove();
 }
 removeLocalS(item.previousElementSibling.id);
}

// Eventlistener
btn.addEventListener('click', addItem);
todoList.addEventListener('click', removeItem);

