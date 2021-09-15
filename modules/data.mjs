// Function to check if there is LS and then adding the itemAdd function to add item to LS
export function getList(item) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  itemAdd(todos, item);
}

// Function to add item to LS
function itemAdd(lsArr, item) {
  lsArr.push(item);
  localStorage.setItem('todos', JSON.stringify(lsArr));
}

// Function to remove local storage value 
export function removeLocalS(id) {
  let localArr = JSON.parse(localStorage.getItem('todos'));

  for (let item in localArr) {
    if (localArr[item] == id) {
      localArr.splice(item, 1);
      localStorage.setItem('todos', JSON.stringify(localArr));
    }
  }
}

// Function for completed items to be stored in a completed local storage array

// export function itemComplete(todo){
//   let completedItems = [];
//   completedItems.push(todo);

// }