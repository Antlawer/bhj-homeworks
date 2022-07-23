'use strict'

const text = `<div class="tooltip"></div>`;

document.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.classList.contains('has-tooltip')) {
        const tool = document.querySelector('.tooltip');

        if (tool) {
            tool.remove();
        }

        event.target.insertAdjacentHTML('afterEnd', `${text}`);
        const textAdded = event.target.nextElementSibling;
        textAdded.innerText = `${event.target.title}`;
        textAdded.classList.add('tooltip_active');
    }
})