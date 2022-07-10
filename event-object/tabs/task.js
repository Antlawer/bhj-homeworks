'use strict'

const tabContent = document.querySelectorAll('.tab__content');
const tabsList = document.querySelectorAll('.tab');

for (let i = 0; i < tabsList.length; i++) {
    tabsList[i].addEventListener('click', (event) => {
        document.querySelector('.tab_active').classList.remove('tab_active');
        document.querySelector('.tab__content_active').classList.remove('tab__content_active');
        event.target.classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
    })
}
