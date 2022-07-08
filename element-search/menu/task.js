'use strict'

const menuLink = document.getElementsByClassName('menu__link');

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].onclick = function() {
        const parent = menuLink[i].closest('.menu__item');
        const child = parent.querySelector('.menu_sub');

        if (child) {
            child.classList.toggle('menu_active');
            return false;
        }
    }
}

