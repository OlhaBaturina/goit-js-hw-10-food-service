import './styles.css';
import menu from './menu.json';
import menuCard from './menu-card.hbs';

console.log(menu);
console.log(menuCard(menu));

const menuRef = document.querySelector('.js-menu');
console.log(menuRef);
const markup = menuCard(menu);

menuRef.insertAdjacentHTML('beforeend', markup);
