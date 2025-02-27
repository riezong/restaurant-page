const home = function () {
	const Content = document.querySelector('#content');

	// Hero
	const hero = document.createElement('div');
	hero.setAttribute('id', 'hero');
	const headline = document.createElement('h1');
	headline.setAttribute('class', 'headline');
	headline.textContent = 'Restaurant Page';
	hero.append(headline);
	const bio = document.createElement('p');
	bio.setAttribute('class', 'bio');
	bio.textContent = 'Lorem Ipsum';
	hero.appendChild(bio);
	Content.appendChild(hero);

	// Food Categories
	const foodCategories = document.createElement('div');
	foodCategories.setAttribute('id', 'foodCategories');
	let foodCategoriesList = [
		'appetisers',
		'bread',
		'breakfast',
		'pizza',
		'dessert',
		'soups',
	];
	for (const item of foodCategoriesList) {
		const category = document.createElement('div');
		category.setAttribute('class', 'category');
		const categoryIcon = document.createElement('div');
		const categoryText = document.createElement('p');
		categoryText.textContent = 'item';
		category.appendChild(categoryIcon);
		category.appendChild(categoryText);
		foodCategories.appendChild(category);
	}
	Content.appendChild(foodCategories);

	// Food Recipes
	const foodRecipes = document.createElement('div');
	foodRecipes.setAttribute('id', 'foodRecipes');
	let foodRecipesList = ['chicken', 'beef', 'fish'];
	const recipes = document.createElement('ul');
	recipes.setAttribute('class', 'recipes');
	for (const item of foodRecipesList) {
		const recipe = document.createElement('li');
		recipe.textContent = 'recipe';
		recipes.appendChild(recipe);
	}
	foodRecipes.appendChild(recipes);
	Content.appendChild(foodRecipes);
};
home();

export { home };
