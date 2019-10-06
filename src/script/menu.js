import menuListJson from '../menu.json';
import menuItemsTamplate from '../tamplate/menu-item-form.hbs';

export default function() {
  const menuListContainer = document.querySelector('#menu');

  const menuItems = menuListJson.reduce((acc, item) => {
    return acc + menuItemsTamplate(item);
  }, '');

  menuListContainer.innerHTML = menuItems;
}
