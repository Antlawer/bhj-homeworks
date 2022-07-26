'use strict'

const pop = document.querySelector('.modal');

pop.classList.add('modal_active');

pop.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal__close')) {
        pop.classList.remove('modal_active');
        document.cookie = 'closed=ok';
    }
})

if (document.cookie.length > 0) {
    pop.classList.remove('modal_active');
}