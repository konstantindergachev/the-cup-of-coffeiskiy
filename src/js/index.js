import '../scss/main.scss';
import { Customer } from './model/Customer';
import { UI } from './ui/ui';

const eventListeners = () => {
  const ui = new UI();
  //preloader
  window.addEventListener('load', ui.hidePreloader);
  //menu
  document.querySelector('.menu').addEventListener('click', ui.showMenu);
  //control the video
  document
    .querySelector('.switch__container')
    .addEventListener('click', ui.videoControls);
  //submit the form
  document.forms[0].addEventListener('submit', (ev) => {
    ev.preventDefault();
    const name = document.querySelector('.input__name').value.trim();
    const lastName = document.querySelector('.input__lastname').value.trim();
    const email = document.querySelector('.input__email').value.trim();

    const values = ui.checkEmpty(name, lastName, email);
    if (!Array.isArray(values)) {
      ui.showFeedback(values, 'error');
    } else {
      ui.showFeedback(values, 'success');

      const customer = new Customer(name, lastName, email);
      ui.addCustomerToTheDOM(customer);
      ui.clearFormFields();
    }
  });
  const magnifierLink = document.querySelector('.work__container');
  magnifierLink.addEventListener('click', (ev) => {
    const element = ev.target.closest('.work__magnifier');
    ui.showModal(ev, element);
  });
  const modalClose = document.querySelector('.modal__close');
  modalClose.addEventListener('click', () => {
    ui.closeModal(modalClose.parentNode);
  });
};

eventListeners();
