'use strict'

const rotator = document.querySelectorAll('.rotator');

    function funcRotat(array) {
        array.forEach(element => {
            const act = element.querySelector('.rotator__case_active');
            act.style.color = act.dataset.color;
            if(act === element.lastElementChild) {
                element.firstElementChild.classList.add('rotator__case_active');
            } else {
                act.nextElementSibling.classList.add('rotator__case_active');
            }

            act.classList.remove('rotator__case_active');

            clearInterval(timer);
            timer = setInterval(funcRotat, act.dataset.speed, rotator);
        });
    }


   let timer = setInterval(funcRotat, 1000, rotator);

