import './styles.css';
import menu from './menu.json';
import menuCard from './menu-card.hbs';

const menuRef = document.querySelector('ul.js-menu');
const toggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const markup = menuCard(menu);

menuRef.insertAdjacentHTML('beforeend', markup);

// Добавь функционал изменения темы при нажатии (событие change)
// на чекбокс #theme-switch-toggle в тулбаре.

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять
// на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы.
//  Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить
// свойство checked у чекбокса #theme-switch-toggle в true,
//  чтобы ползунок сдвинулся в правильное положение.
// Для удобства хранения списка тем используй такое перечисление.

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

toggleRef.addEventListener('change', checkedOnToggleTheme);

function checkedOnToggleTheme(evt) {
  if (toggleRef.checked) {
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
  }
}
