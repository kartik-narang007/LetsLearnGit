var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')
//form submit event
form.addEventListener('submit', addItem);
filter.addEventListener('keyup', filterItems)
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

//filter Items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    //Convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        }
        else{item.style.display = 'none'}    
    })
    }
