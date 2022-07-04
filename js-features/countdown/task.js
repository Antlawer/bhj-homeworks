const timer = document.getElementById('timer');

function timeChanger() {
    let timeValue = timer.textContent;
    timeValue -= 1;
    timer.textContent = timeValue;
    if (timeValue === 0) {
        clearInterval(timeInterval);
        alert('Вы победили в конкурсе!');
    }
}

const timeInterval = setInterval(timeChanger, 100);