'use strict'

const left = document.querySelector('.slider__arrow_prev');
const right = document.querySelector('.slider__arrow_next');
const allSliders = document.querySelectorAll('.slider__item');
const allDots = document.querySelectorAll('.slider__dot');

let count = 0;

function classesInd(index) {
    const active = document.querySelector('.slider__items').querySelector('.slider__item_active');
    const activeDots = document.querySelector('.slider__dots').querySelector('.slider__dot_active');

    if (active) {
        active.classList.remove('slider__item_active');
    }

    if (activeDots) {
        activeDots.classList.remove('slider__dot_active');
    }

    allSliders[index].classList.add('slider__item_active');
    allDots[index].classList.add('slider__dot_active');
}

right.addEventListener('click', () => {
    count == allSliders.length - 1 ? count = 0 : count++;

    classesInd(count);
})

left.addEventListener('click', () => {
    if (count == 0) {
        count = allSliders.length - 1;
    } else {
        count--;
    }

    classesInd(count);
})

for (let i = 0; i < allDots.length; i++) {
    allDots[i].addEventListener('click', () => {
        count = i;
        classesInd(count);
    })
}