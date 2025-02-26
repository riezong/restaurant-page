// alert('Restaurant Page');

import { initialPageLoad } from './initial-page-load';
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
				initialPageLoad();
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

	// clear DOM
	// render DOM
})();

const clearPage = function () {
	const Content = document.querySelector('#content');
	while (Content.firstChild) {
		Content.removeChild(Content.lastChild);
	}
};
