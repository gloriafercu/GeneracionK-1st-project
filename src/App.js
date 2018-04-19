function startApp() {

	'use strict';
	var moveButton = document.getElementById('button');
	var firstContainer = document.querySelector('.first-container');
	var secondContainer = document.querySelector('.second-container');
	var firstText = document.querySelector('.first-text');
	var secondText = document.querySelector('.second-text');
	var position = true;

	function moveText() {
		if (position) {
			secondContainer.appendChild(firstText);
			position = false;
		} else {
			firstContainer.appendChild(firstText);
			position = true;
		}
	}
	moveButton.addEventListener('click', moveText);
}