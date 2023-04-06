console.log(document.title)
// document.title = 123
// console.log(document.all)
// console.log(document.all[10])
// document.all[12].textContent = 'Hello'
var headerTitle = document.getElementById('header-title')
var header = document.getElementById('main-header')
// headerTitle.innerHTML = '<h3>Hello</h3>'
header.style.borderBottom = 'solid 3px black'
var addItems = document.getElementsByClassName('title')
addItems[0].style.fontWeight = 'bold'
addItems[0].style.color = 'green'
var li = document.getElementsByTagName('li')
console.log(li)
console.log(li[1])
li[1].textContent = "Hello 2"
li[1].style.fontWeight = 'bold'
li[1].style.backgroundColor = 'yellow'
for(var i = 0; i < li.length; i++){
    li[i].style.backgroundColor = '#f4f4f4'
}
var item5 = document.getElementsByClassName('item5')
var input = document.querySelector('input')
input.value = 'Hello World'
var submit = document.querySelector('input[type = "submit"]')
submit.value = 'SEND'
var item = document.querySelector('.list-group-items')
item.style.color = 'red';
var lastItem = document.querySelector('.list-group-items:last-child')
lastItem.style.color = 'blue'
var secondItem = document.querySelector('.list-group-items:nth-child(2)')
lastItem.style.color = 'coral'


//querySelectorAll
//works like className and tagName
var titles = document.querySelectorAll('.title')
console.log(titles);
titles[0].textContent = "Hello"

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4'
    even[i].style.backgroundColor = 'ccc'
    
}


