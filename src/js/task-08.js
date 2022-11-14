
form.addEventListener('submit', event => {
    event.preventDefault();
    const resultObj = {};
  
    const data = new FormData(event.target);
    //   console.log('event.target', event.target);
    //   console.log('event.currentTarget', event.currentTarget);
  
    for (let i = 0; i < event.target.elements.length; i++) {
      const element = event.target.elements[i];
      // console.log('element', element);
      if (element.name && data.has(element.name)) {
        if (element.value === '') {
          alert('Всі поля повинні бути заповнені');
          return;
        }
        resultObj[element.name] = data.get(element.name);
      }
    }
    console.log(resultObj);
    event.target.reset();
  });