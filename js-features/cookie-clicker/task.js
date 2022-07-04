const image = document.getElementById('cookie');
const count = document.getElementById('clicker__counter');

image.onclick = function() {
    if (image.width === 200) {
        image.width = 150;
    } else {
        image.width = 200;
    }

    count.textContent = Number(count.textContent) + 1;
}