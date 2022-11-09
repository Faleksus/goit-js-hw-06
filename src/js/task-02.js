const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);
function createIngredientsEl() {
  const ingredientsList = ingredients.map(el => {
    const list = document.createElement('li');
    list.className = 'item';
    list.textContent = el;
    return list;
  });
  return ingredientsEl.append(...ingredientsList); 
}
createIngredientsEl()



// const dish = document.querySelector('#ingredients')

// const liArr = []

// ingredients.forEach(el => {
// 	const list = document.createElement('li')
// 	list.className = 'item'
// 	list.textContent = el
// 	liArr.push(list)
// })

// dish.append(...liArr)
// console.log(dish);