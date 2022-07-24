'use strict'

const item = document.querySelector('#items');
const img = document.getElementById('loader');
const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        img.classList.remove('loader_active');
        const val = JSON.parse(xhr.response);
        const rubl = val.response.Valute
console.log(rubl)
        for (let i in rubl) {

            const div = `
                <div class="item">
                    <div class="item__code">
                        ${rubl[i].CharCode}
                    </div>
                    <div class="item__value">
                        ${rubl[i].Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>
            `;

            item.insertAdjacentHTML('afterBegin', `${div}`);
        }
    }
})

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

