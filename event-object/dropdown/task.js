'use strict'

const listParent = document.querySelector('.dropdown__list');
const valueName = document.querySelector('.dropdown__value');

valueName.addEventListener('click', () => {
    listParent.classList.toggle('dropdown__list_active');
    
})

listParent.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.closest('.dropdown__item')) {
        valueName.textContent = event.target.textContent;
        listParent.classList.remove('dropdown__list_active');
    }
})