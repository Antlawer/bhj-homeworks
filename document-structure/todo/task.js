'use strict'

const button = document.querySelector('.tasks__add');
const tasks = document.querySelector('.tasks__list');
const placeHold = document.querySelector('.tasks__input');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const textIn = placeHold.value;

    if (textIn !== '' && textIn.trim() !== '') {
        const div = `
            <div class="task">
                <div class="task__title">
                    ${textIn}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;

        tasks.insertAdjacentHTML('afterBegin', `${div}`);
        placeHold.value = '';
    }

})

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('task__remove')) {
        e.target.closest('.task').remove();
    }
})