'use strict'

const threeSizes = document.querySelector('.book__control');
const text = document.querySelector('.book');

    threeSizes.addEventListener('click', (event) => {
        event.preventDefault();
        const activeClass = document.querySelector('.font-size_active');
        if (activeClass) {
            activeClass.classList.remove('font-size_active');
            text.classList.remove(`book_fs-${activeClass.dataset.size}`)
        }
        
        event.target.classList.add('font-size_active');

        const sizes = event.target.dataset.size;
        if (sizes) {
            text.classList.add(`book_fs-${sizes}`)
        }
    })