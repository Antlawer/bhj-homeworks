'use strict'

const form = document.getElementById('signin__form');
const signin = document.querySelector('.signin');
const btn = document.querySelector('#signin__btn');
const welcome = document.querySelector('#welcome');
const userId = document.querySelector('#user_id');
let user = localStorage.userId;

if (user) {
    userActive();
} else {
    signin.classList.add('signin_active');
}

function userActive () {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = `${user}`;
};

btn.addEventListener('click', (event) => {
    const formData = new FormData(form);
    const xhr =new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.responseType = 'json';
    xhr.send(formData);
    xhr.onload = () => {
        if (xhr.status === 200) {
            if (!xhr.response.success) {
                alert('неверный логин/пароль');
            } else {
                user = xhr.response.user_id;
                userActive();
            };
        };
    };
    event.preventDefault();
});