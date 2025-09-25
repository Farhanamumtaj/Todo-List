let todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];
displayItems();
    
function addItems(){
    const nameElement = document.querySelector('.js-name-input');
    const dateElement = document.querySelector('.js-date-input');
    let name ;
    if(!nameElement.value){
      name = 'No name';
    } else {
      name = nameElement.value;
    }
    let date;
    if(!dateElement.value){
      date = 'No Due Date';
    } else {
      date  = dateElement.value;
    }
    todoArray.push({name, date});
    localStorage.setItem('todoArray', JSON.stringify(todoArray));
    nameElement.value = '';
    dateElement.value = '';
    displayItems();
}

function displayItems(){
  let todoListHTML ='';
  for(let i = 0; i < todoArray.length; i++){
    const todoObject = todoArray[i];
    const {name, date} = todoObject;
    const html = `
      <div>${name}</div> 
      <div>${date}</div>
      <button onclick="
        deleteItems(${i});"
        class="delete-btn">Delete</button>
    `;
    todoListHTML += html;
  }
    document.querySelector('.js-display-div').innerHTML = todoListHTML;
}

function deleteItems(index){
  todoArray.splice(index,1);
  localStorage.setItem('todoArray', JSON.stringify(todoArray));
  displayItems();
}

