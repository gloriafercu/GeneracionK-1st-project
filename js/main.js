'use strict';

var buttonAdd = document.querySelector('.add');
var list1 = document.querySelector('.list1');
var list2 = document.querySelector('.list2');


function addUserList() {
list2.innerHTML = list1.innerHTML;
list1.innerHTML = '';
}
buttonAdd.addEventListener('click', addUserList);