import './styles.css';
import menu from './menu.json';
import menuCard from './menu-card.hbs';

const menuRef = document.querySelector('.js-menu');

const markup = menuCard(menu);

menuRef.insertAdjacentElement('beforeend', markup);
