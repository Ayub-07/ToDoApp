let savedTodoList = localStorage.getItem("todolist");
let todolist = JSON.parse(savedTodoList) || [
  // {
  //   item : 'Buy Milk',
  //   dueDate : '05/07/2025'
  // },
  //   {
  //   item : 'Go to GYM',
  //   dueDate : '05/07/2025'
  // }
];
showItems();

function addTodo() {
  let inputElement = document.querySelector('.input-box');
  let dateElement = document.querySelector('#todo-date');
  let todoitem = inputElement.value;
  let tododate = dateElement.value;
  todolist.push({ item: todoitem, dueDate: tododate });
  localStorage.setItem("todolist", JSON.stringify(todolist));
  inputElement.value = '';
  dateElement.value = '';

  showItems();
}


function showItems(){
  let containerElement = document.querySelector('.todo-container');
  let data = '';
  for(let i=0;i<todolist.length;i++){
    // let item = todolist[i].item;
    // let dueDate = todolist[i].dueDate; 
    let {item,dueDate} = todolist[i];
    data += `
      <span> ${item} </span>
      <span> ${dueDate} </span>
      <button onclick="deleteTodo(${i})" class ='btn-delete'> DELETE </button>
 `

  }
  if(todolist.length==0){
    containerElement.innerHTML =  `<p style="text-align:center; color:#555; font-style:italic; font-size:18px; ">No Pending TODOs </p>`;
    
  }
  else{
    containerElement.innerHTML = data;
  }
}

function deleteTodo(index) {
  todolist.splice(index, 1);
  localStorage.setItem("todolist", JSON.stringify(todolist));
  showItems();
}