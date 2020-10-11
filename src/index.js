import menuCardsTpl from './templates/menu-cards.hbs';
import menu from './js/menu.json';
import './css/styles.css';

const refs = {
  menuContainer: document.querySelector('.js-menu'),
};

// Создание и рендер разметки
const menuCardsMarkup = createMenuCardsMarkup(menu);

refs.menuContainer.insertAdjacentHTML('beforeend', menuCardsMarkup);

function createMenuCardsMarkup(menu) {
  return menuCardsTpl(menu);
}
