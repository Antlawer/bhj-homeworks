'use strict'

const text = `<div class="tooltip"></div>`;
const list = document.querySelectorAll('.has-tooltip');

list.forEach(element => {
    element.insertAdjacentHTML('afterEnd', `${text}`);
});

document.addEventListener('click', (event) => {
    event.preventDefault();

    if(event.target.nextElementSibling.classList.contains('tooltip_active')){
        event.target.nextElementSibling.classList.remove('tooltip_active');
    } else {
        const tool = document.querySelector('.tooltip_active');

        if (tool) {
            tool.classList.remove('tooltip_active');
        }

  
        if(event.target.classList.contains('has-tooltip')) {
            const textAdded = event.target.nextElementSibling;
            textAdded.innerText = `${event.target.title}`;
            
            const position = event.target.getBoundingClientRect();
            textAdded.style.top = position.top + 20 + 'px';
            textAdded.style.left = position.left + 'px';

            textAdded.classList.add('tooltip_active');
        }
    }
})