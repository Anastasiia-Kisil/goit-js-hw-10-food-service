// Всі константи та імпорти
import './styles.css';
import menuContent from './menu.json';
import menuCardTemplate from './templates/product-card.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const menuRef = document.querySelector('.js-menu');
const bodyMenu = document.querySelector('body');
const checkBox = document.querySelector('#theme-switch-toggle');

// Розмітка карток
const menuMarkup = menuCardTemplate(menuContent);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);

// Перемикання теми
checkBox.addEventListener('change', changeTheme);
function changeTheme(event) {
  bodyMenu.classList.add('dark-theme');
}
