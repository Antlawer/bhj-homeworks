'use strict'

const products = document.querySelector('.products');
const basket = document.querySelector('.cart__products');

products.addEventListener('click', (e) => {
    e.preventDefault();
    // +- значение

    if (e.target.closest('.product__quantity-controls')) {
        const value = e.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');

        if (e.target.classList.contains('product__quantity-control_dec')) {
            value.textContent = Number(value.textContent) - 1;
            if (value.textContent < 1) {
                value.textContent = 1;
            }
        }
        if (e.target.classList.contains('product__quantity-control_inc')) {
            value.textContent = Number(value.textContent) + 1;
        }
    }
  
    //кнопка добавить


        // for (let element of basketValue) {
        //     if (element.dataset.id === ind) {
        //         let textCount = element.querySelector('.cart__product-count').textContent;
        //         return textCount = Number(textCount) + Number(val);
        //     } 
        // }

    if (e.target.classList.contains('product__add')) {
        const id = e.target.closest('.product').dataset.id;
        const img = e.target.closest('.product').querySelector('.product__image').getAttribute('src');
        const val = e.target.closest('.product__quantity').querySelector('.product__quantity-value').textContent;
        const checkId = document.querySelector(`.cart__product[data-id="${id}"]`)

        if(!checkId) {
            const basketDiv = `
                <div class="cart__product" data-id="${id}">
                    <img class="cart__product-image" src="${img}">
                    <div class="cart__product-count">${val}</div>
                </div>
            `;

        basket.insertAdjacentHTML('afterBegin', `${basketDiv}`);
        } else {
            const finderId = checkId.querySelector('.cart__product-count');
            finderId.textContent = Number(finderId.textContent) + Number(val);
        }
    }
})