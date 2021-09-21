import { getList, removeLocalS } from "./modules/data.mjs";

// empty Array
let todoItems = [];
let root = document.getElementById('root');

let headerTmp = `<header><h2>what-to-do-app</h2></header>`;

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
btn.innerText = 'Lägg till todo';
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
  li.id = Math.floor(Math.random() * 100000);
  li.classList.add('todo-item');
  todoDiv.appendChild(li);
  // Kolla om det finns Local Storage och sedan lägger jag till ett item som argument, se data.mjs
  getList(newInput.value);
  // Completed button
  let completedBtn = document.createElement('button');
  completedBtn.innerText = 'Klar';
  completedBtn.classList.add('completed-btn');
  todoDiv.appendChild(completedBtn);

  // Delete button
  let removeBtn = document.createElement('button');
  removeBtn.innerText = 'Ta bort';
  removeBtn.classList.add('delete-btn');
  todoDiv.appendChild(removeBtn);

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
function handleClickDeleteOrCheck(e) {
 if (e.target.classList[0] == 'completed-btn') {
  checkTodo(e);
 }
 if (e.target.classList[0] == 'delete-btn') {
  deleteTodo(e);
 }

 function checkTodo(e) {
  let item = e.target.parentNode;
  if (item.style.textDecoration == 'line-through') {
   item.style.textDecoration = 'none';
  }
  else {
   item.style.textDecoration = 'line-through';
  }
 }


 function deleteTodo(e) {
  let deleteItem = e.target.parentNode;
  console.log('delete', deleteItem);
  deleteItem.remove();

 }

 // // console.log(e.target.parentNode);
 // console.log(e.target.name);
 // let item = e.target;
 // // Delete todo
 // if (item.classList[0] === 'completed-btn') {
 //  let todo = item.parentElement;
 //  todo.remove();
 // }
 // removeLocalS(item.previousElementSibling.id);
}

// Eventlistener
btn.addEventListener('click', addItem);
todoList.addEventListener('click', handleClickDeleteOrCheck);

// if (completedBtn) {

//  completedBtn.addEventListener('click', (e) => {
//   console.log('klickad completed', e.target);
//  })
// }

// function removeItem(e) {
//  console.log(e.target.parentNode);
//  let item = e.target;
//  // Delete todo
//  if (item.classList[0] === 'completed-btn') {
//   let todo = item.parentElement;
//   todo.remove();
//  }
//  removeLocalS(item.previousElementSibling.id);
// }