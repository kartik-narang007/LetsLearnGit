// console.log(document.title)
// // document.title = 123
// // console.log(document.all)
// // console.log(document.all[10])
// // document.all[12].textContent = 'Hello'
// var headerTitle = document.getElementById('header-title')
// var header = document.getElementById('main-header')
// // headerTitle.innerHTML = '<h3>Hello</h3>'
// header.style.borderBottom = 'solid 3px black'
// var addItems = document.getElementsByClassName('title')
// addItems[0].style.fontWeight = 'bold'
// addItems[0].style.color = 'green'
// var li = document.getElementsByTagName('li')
// console.log(li)
// console.log(li[1])
// li[1].textContent = "Hello 2"
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'yellow'
// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4'
// }
// var item5 = document.getElementsByClassName('item5')
// var input = document.querySelector('input')
// input.value = 'Hello World'
// var submit = document.querySelector('input[type = "submit"]')
// submit.value = 'SEND'
// var item = document.querySelector('.list-group-items')
// item.style.color = 'red';
// var lastItem = document.querySelector('.list-group-items:last-child')
// lastItem.style.color = 'blue'
// var secondItem = document.querySelector('.list-group-items:nth-child(2)')
// lastItem.style.color = 'coral'


// //querySelectorAll
// //works like className and tagName
// var titles = document.querySelectorAll('.title')
// console.log(titles);
// titles[0].textContent = "Hello"

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = 'ccc'
    
// }


//traversing the dom//

var itemList = document.querySelector('#items')

//parent node property
//parent node means ye jis container me hai ya jis tag me hai vo node
//div.container > (forms), (ul#items > li,li,li,li) to yaha items id vaale ul ka parent node div.container hoga na ki forms kyoki forms iska sibling hoga.
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'

// //
// console.log(itemList.parentNode.parentNode);


//parentElement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentElement.parentElement);


//childNodes
// console.log(itemList.childNodes);
// //ul ke children yaani sb li's show krega.

//children

console.log(itemList.children)
console.log(itemList.children[1])
itemList.children[1].style.backgroundColor = 'yellow'

// //firstchild

// console.log(itemList.firstChild);

//firstElementChild

console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent = 'Hello_world'

//create a div
var newdiv = document.createElement('div')

//add class name
newdiv.className = 'hello'

//add id
newdiv.id = 'hello1'


//add eventlistener
newdiv.setAttribute('title', 'Hello Div')

//create text node

var newDivText = document.createTextNode('Hello World!')

//Add Text to Div
newdiv.appendChild(newDivText)
console.log(newdiv)


var form = document.querySelector('form')
var h2 = document.querySelector('title1')
form.insertBefore(newdiv, h2);
