export function UI() {}
UI.prototype.hidePreloader = function() {
  document.querySelector('.preloader').style.display = 'none';
};
UI.prototype.showMenu = function() {
  document.querySelector('.navbar').classList.toggle('navbar__show');
};
UI.prototype.videoControls = function() {
  let btn = document.querySelector('.switch__btn');
  if (btn.classList.contains('switch__btn-slide')) {
    btn.classList.remove('switch__btn-slide');
    document.querySelector('.video__item').play();
  } else {
    btn.classList.add('switch__btn-slide');
    document.querySelector('.video__item').pause();
  }
};
UI.prototype.checkEmpty = function(...args) {
  const [ name, lastName, email ] = args;
  if (name === '' && lastName === '' && email === '') {
    return 'Поля не заполнены';
  } else if (name === '' && email === '') {
    return 'Поля имя и email не заполнены';
  } else if (name === '' && lastName === '') {
    return 'Поля имя и фамилия не заполнены';
  } else if (lastName === '' && email === '') {
    return 'Поля фамилия и email не заполнены';
  } else if (name === '') {
    return 'Поле имя не заполнено';
  } else if (lastName === '') {
    return 'Поле фамилия не заполнено';
  } else if (email === '') {
    return 'Поле email не заполнено';
  } else {
    return args;
  }
};
UI.prototype.showFeedback = function(msg, type) {
  const feedback = document.querySelector('.drink__form-feedback');
  if (type === 'error') {
    feedback.classList.add(type);
    feedback.innerText = msg;
    this.removeMessage(type);
    if (feedback.classList.contains('success')) {
      feedback.classList.remove('success');
    }
  } else {
    feedback.classList.add(type);
    feedback.innerText = `${msg[0]} ${msg[1]} добавлен в список`;
    this.removeMessage(type);
    if (feedback.classList.contains('error')) {
      feedback.classList.remove('error');
    }
  }
};
UI.prototype.removeMessage = function(type) {
  setTimeout(() => {
    document.querySelector('.drink__form-feedback').classList.remove(type);
  }, 3000);
};
UI.prototype.addCustomerToTheDOM = function(customer) {
  const images = [ 0, 1, 2, 3, 4, 5 ];
  const random = Math.floor(Math.random() * images.length);
  const div = document.createElement('div');
  div.classList.add('person');
  div.innerHTML = `
    <img class="person__img" src="/img/person-${random}.png" alt=${customer.name} />
    <h4 class="person__name">${customer.name}</h4>
    <h4 class="person__lastname">${customer.lastName}</h4>
  `;
  document.querySelector('.drink__card-list').appendChild(div);
};
UI.prototype.clearFormFields = function() {
  document.querySelector('.input__name').value = '';
  document.querySelector('.input__lastname').value = '';
  document.querySelector('.input__email').value = '';
};
UI.prototype.showModal = function(ev, el) {
  ev.preventDefault();
  if (el !== null) {
    const modal = document.querySelector('.modal');
    const modalItem = document.querySelector('.modal__item');
    modal.classList.add('modal__show');
    modalItem.style.backgroundImage = `url(/img/picture-${el.dataset.id}.jpg)`;
  }
};
UI.prototype.closeModal = function(el) {
  el.classList.remove('modal__show');
};
