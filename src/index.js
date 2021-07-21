import menuContent from './menu.json';
import menuCardTemplate from './templates/product-card.hbs';

const menuRef = document.querySelector('.js-menu');
const menuMarkup = menuCardTemplate(menuContent);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);
