// All const and import
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

// Markup
const menuMarkup = menuCardTemplate(menuContent);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);

// Checked theme
checkBox.addEventListener('change', changeTheme);
function changeTheme(event) {
  const checedTheme = checkBox.checked;
  if (checedTheme) {
    bodyMenu.classList.add('dark-theme');
  } else {
    bodyMenu.classList.add('light-theme');
    bodyMenu.classList.remove('dark-theme');
  }
}

// Lokalstorage

checkBox.addEventListener('change', reloadTheme);
function reloadTheme(event) {
  const checkedTheme = checkBox.checked;

  if (checkedTheme) {
    localStorage.setItem('theme', 'dark-theme');
  } else {
    localStorage.removeItem('theme');
    localStorage.setItem('theme', 'light-theme');
  }
}

const checkedDarkTheme = localStorage.getItem('theme');

if (checkedDarkTheme === Theme.DARK) {
  bodyMenu.classList.add(Theme.DARK);
  checkBox.checked = true;
}
