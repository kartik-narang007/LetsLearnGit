var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();

    console.log(1);
}

//Delete event
itemList.addEventListener('click', removeItem);

//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// get input value
var newItem = document.getElementById('item').value;
//create new element
var li = document.createElement('li');

//add class
li.className = 'list-group-item';
console.log(li);
//add text node with input value

li.appendChild(document.createTextNode(newItem));

//Create a delete button element
var deleteBtn = document.createElement('button');
//create an Edit Button
var editBtn = document.createElement('button')
//Add classes to Edit Button
editBtn.className = 'btn btn-danger btn-sm float-right edit'
//Append text Node of Edit Button
editBtn.appendChild(document.createTextNode('Edit'))
//Add classes to delete button
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//Append text Node
deleteBtn.appendChild(document.createTextNode('X'));
//Append Button to li
li.appendChild(deleteBtn);
li.appendChild(editBtn)

itemList.appendChild(li);

