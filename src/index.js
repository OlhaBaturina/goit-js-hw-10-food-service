import './styles.css';
import menu from './menu.json';
import menuCard from './menu-card.hbs';

const menuRef = document.querySelector('ul.js-menu');
const toggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const markup = menuCard(menu);

menuRef.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

defaultTheme();

toggleRef.addEventListener('change', checkedOnToggleTheme);

function checkedOnToggleTheme() {
  if (toggleRef.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
  }

  localStorage.setItem('THEME', bodyRef.classList.value);
  console.log(bodyRef.classList.value);
}

function defaultTheme() {
  if (localStorage.getItem('THEME') !== null) {
    localStorage.getItem('THEME');
  }
  if (bodyRef.classList.value === Theme.DARK) {
    return (toggleRef.checked = true);
  }
}
