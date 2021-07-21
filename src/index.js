import './styles.css';
import menuContent from './menu.json';
import menuCardTemplate from './templates/product-card.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Розмітка карток
const menuRef = document.querySelector('.js-menu');
const menuMarkup = menuCardTemplate(menuContent);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);

// Перемикання теми
