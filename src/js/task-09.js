function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(getRandomHexColor());

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

function onChangeBackgroundColor() {
  return body.style.background = getRandomHexColor();
}

function colorNameValue() {
  const colorNameEl = `<li>50</li>`;
  colorName.textContent(colorNameEl);
  return colorName;
}
console.log(colorNameEl);


btn.addEventListener('click', onChangeBackgroundColor);

// const btnChangeColor = document.querySelector('.change-color');
// const backgroundColorValue = document.querySelector('.color');
// const backgroundColorBody = document.querySelector('body');
// btnChangeColor.addEventListener('click', event => {
//   const color = getRandomHexColor();
//   backgroundColorValue.textContent = color;
//   backgroundColorBody.style.backgroundColor = color;
// });
