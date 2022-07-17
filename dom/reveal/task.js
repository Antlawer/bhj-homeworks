'use strict'

const disappear = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {

    disappear.forEach(element => {

        const { top } = element.getBoundingClientRect();
        if (top > 0 && top < window.innerHeight) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        } 
    });
})