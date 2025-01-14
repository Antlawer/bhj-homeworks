'use strict'

const progress = document.getElementById('progress');
const form = document.getElementById('form');


form.addEventListener('submit', (event) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData(form);

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);


    xhr.upload.addEventListener('progress', (ev) => {
        setInterval (() => progress.value = progress.value + 0.1, 100)        
    })

    xhr.send(formData);

    event.preventDefault();
});