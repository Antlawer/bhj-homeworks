'use strict'

const interest = document.querySelectorAll('.interest');

for (let el of interest) {
    const checkedInterest = el.querySelector('.interest__check');
    checkedInterest.addEventListener('change', () => {
        if (checkedInterest.checked) {
            trFal(el, true);
        } else {
            trFal(el, false);
        }
    })
}

function trFal(el, value) {
    const trueInterest = el.querySelectorAll('.interest__check');
    for (let i of trueInterest) {
        i.checked = value;
    }
}