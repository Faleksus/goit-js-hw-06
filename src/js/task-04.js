let counter = 0;

const count = document.querySelector('#value');

const btnIncrement = document.querySelector('[data-action="increment"]');

const btnDecrement = document.querySelector('[data-action="decrement"]');

function onBtnIncrement() {
    return count.textContent = ++counter;
}

btnIncrement.addEventListener('click', onBtnIncrement);

function onBtnDecrement() {
    return count.textContent = counter--;
}

btnDecrement.addEventListener('click', onBtnDecrement);
