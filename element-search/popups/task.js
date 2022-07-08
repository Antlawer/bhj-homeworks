'use strict'

const openPop = document.querySelector('.modal');
const closePop = document.getElementsByClassName('modal__close');
const successShow = document.getElementsByClassName('show-success');

openPop.classList.add('modal_active');

for (let i = 0; i < closePop.length; i++) {
    const modClose = closePop[i].closest('.modal');
    closePop[i].onclick = function() {
        modClose.classList.remove('modal_active');
    }   
}

const modalSucc = document.getElementById('modal_success');

for (let i = 0; i < successShow.length; i++) {
    successShow[i].addEventListener('click', function() {
        modalSucc.classList.add('modal_active');
    })
}