// alert('Restaurant Page');

import { initialPageLoad } from './initial-page-load';
import { menu } from './menu';
import { contact } from './contact';

const tabSwitcher = (function () {
	// event listeners
	const btn = document.querySelector('nav');
	function handleClick(event) {
		let target = event.target;
		switch (target.id) {
			case 'home':
				console.log('Home menu item was clicked');
				break;
			case 'menu':
				console.log('Menu menu item was clicked');
				break;
			case 'about':
				console.log('About menu item was clicked');
				break;
		}
	}
	btn.addEventListener('click', handleClick);

	// clear DOM
	// render DOM
})();
