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

