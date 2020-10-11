import menuCardsTpl from './templates/menu-cards.hbs';
import menu from './js/menu.json';
import './css/styles.css';

const refs = {
  menuContainer: document.querySelector('.js-menu'),
  toggleTheme: document.querySelector('#theme-switch-toggle'),
};

// Создание и рендер разметки
const menuCardsMarkup = createMenuCardsMarkup(menu);

refs.menuContainer.insertAdjacentHTML('beforeend', menuCardsMarkup);

function createMenuCardsMarkup(menu) {
  return menuCardsTpl(menu);
}

// Функционал изменения темы

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.toggleTheme.addEventListener('change', onToggleThemeChange);

selectedTheme();

function onToggleThemeChange() {
  if (refs.toggleTheme.checked) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function selectedTheme() {
  const storageTheme = localStorage.getItem('theme');
  if (storageTheme === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    refs.toggleTheme.checked = true;
  }
}
