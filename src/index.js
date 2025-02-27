// alert('Restaurant Page');

import { home } from './initial-page-load';
import { menu } from './menu';
import { contact } from './contact';
import './style.css';

const tabSwitcher = (function () {
	// event listeners
	const btn = document.querySelector('nav');
	function handleClick(event) {
		let target = event.target;
		switch (target.id) {
			case 'home':
				console.log('Home menu item was clicked');
				clearPage();
				home();
				break;
			case 'menu':
				console.log('Menu menu item was clicked');
				clearPage();
				menu();
				break;
			case 'about':
				console.log('About menu item was clicked');
				clearPage();
				contact();
				break;
		}
	}
	btn.addEventListener('click', handleClick);
})();

const clearPage = function () {
	// clear DOM
	const Content = document.querySelector('#content');
	while (Content.firstChild) {
		Content.removeChild(Content.lastChild);
	}
};
