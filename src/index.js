import './styles.css';
import menu from './menu.json';
import menuCard from './menu-card.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuRef = document.querySelector('ul.js-menu');
const toggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const markup = menuCard(menu);

// Рендерим разметку
menuRef.insertAdjacentHTML('beforeend', markup);

// Слушатель на переключатель тем
toggleRef.addEventListener('change', checkedOnToggleTheme);

// вызываем функцию с дефолтной темой
defaultTheme();

// Добавляем переключнение классов
function checkedOnToggleTheme() {
  if (toggleRef.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('THEME', 'dark-theme');
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('THEME', 'light-theme');
  }
}

// Возвращаем данные чекбокса из localStorage
function defaultTheme() {
  bodyRef.setAttribute('class', localStorage.getItem('THEME') || Theme.LIGHT);

  // Устанавливаем положение переключателя
  if (localStorage.getItem('THEME') === Theme.DARK) {
    toggleRef.checked = 'true';
  }
}
