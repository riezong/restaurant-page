const initialPageLoad = function () {
	const Content = document.querySelector('#content');
	const headline = document.createElement('h1');
	headline.setAttribute('class', 'headline');
	headline.textContent = 'Restaurant Page';
	Content.append(headline);
	const bio = document.createElement('p');
	bio.setAttribute('class', 'bio');
	bio.textContent = 'Lorem Ipsum';
	Content.appendChild(bio);
};
initialPageLoad();

export { initialPageLoad };
