const refs = {
    userNameElement: document.querySelector('#validation-input'),
  };
  
  refs.userNameElement.addEventListener('blur', e => {
    if (e.currentTarget.value.length === +refs.userNameElement.dataset.length) {
      e.target.classList.remove('invalid');
      e.target.classList.add('valid');
    } else {
      e.target.classList.remove('valid');
      e.target.classList.add('invalid');
    }
  });