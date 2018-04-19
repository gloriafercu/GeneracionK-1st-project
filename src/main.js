function startApp() {
	'use strict';
	var buttonAdd = document.querySelector('.add');
	var buttonRemove = document.querySelector('.remove');
	var list1 = document.querySelector('.list1');
	var list2 = document.querySelector('.list2');

	function addUserList() {
		list2.innerHTML = list1.innerHTML;
		list1.innerHTML = '';
	}
	buttonAdd.addEventListener('click', addUserList);

	function removeUserList() {
		list1.innerHTML = list2.innerHTML;
		list2.innerHTML = '';
	}
	buttonRemove.addEventListener('click', removeUserList);

}