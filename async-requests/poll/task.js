'use strict'

const questionDiv = document.querySelector('.poll__title');
const answerDiv = document.querySelector('.poll__answers');
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200){
        const val = JSON.parse(xhr.response);
        const valinsider = val.data;
        const valinsiderIn = valinsider.answers;

        questionDiv.insertAdjacentHTML('afterBegin', `${valinsider.title}`);

        valinsiderIn.forEach(element => {
            const divAnswer = `
                <button class="poll__answer">
                    ${element}
                </button>
            `;

            answerDiv.insertAdjacentHTML('afterBegin', `${divAnswer}`);
        });
    }
});

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

answerDiv.addEventListener('click', (event) => {
    if (event.target.classList.contains('poll__answer')) {
        alert('Спасибо, ваш голос засчитан!');
    }
})