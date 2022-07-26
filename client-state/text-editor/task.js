'use strict'

const textField = document.getElementById('editor');

textField.addEventListener('input', () => {
    localStorage.setItem('text', textField.value)
})

textField.value = localStorage.getItem('text');
