'use strict'

const sideBar = document.querySelector('.chat-widget__side-text');
const chat = document.querySelector('.chat-widget');
const chatWrite = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

const robotWords = [
    'hello, who are you?',
    'go away please',
    'don`t wanna talk with you',
    'sht up!!!'
];

sideBar.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
})

chatWrite.addEventListener('keyup', (elem) => {
    if (elem.key === 'Enter' && chatWrite.value !== '') {
        const timeData = new Date();
        messages.innerHTML += `
            <div class="message">
                <div class="message__time">${timeData.getHours()}:${timeData.getMinutes()}</div>
                <div class="message__text">
                    ${chatWrite.value}
                </div>
            </div>
        `;

        chatWrite.value = '';
        const randNumb = Math.floor(Math.random() * robotWords.length);

        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${timeData.getHours()}:${timeData.getMinutes()}</div>
                <div class="message__text">
                    ${robotWords[randNumb]}
                </div>
            </div>
        `;

        const chatContainer = document.querySelector('.chat-widget__messages-container');
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
})