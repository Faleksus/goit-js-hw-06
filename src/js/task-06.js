const refs = {
    userNameElement: document.querySelector('#validation-input'),
  };
  
  refs.userNameElement.addEventListener('blur', event => {
    if (event.currentTarget.value.length === +refs.userNameElement.dataset.length) {
      event.target.classList.remove('invalid');
      event.target.classList.add('valid');
    } else {
      event.target.classList.remove('valid');
      event.target.classList.add('invalid');
    }
  });