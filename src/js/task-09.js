function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

function onChangeBackgroundColor() {
  const colorNameEl = getRandomHexColor();
  colorName.textContent = colorNameEl;
  body.style.background = colorNameEl;
}

btn.addEventListener('click', onChangeBackgroundColor);

