const score = document.getElementById('dead');
const gameOver = document.getElementById('lost');
const pole = document.querySelectorAll('.hole');
const rat = document.querySelector('.hole_has-mole');

for (i = 1; i < pole.length; i++) {
    const hole = document.getElementById(`hole${i}`);
    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            score.textContent = Number(score.textContent) + 1;
            if (score.textContent >= 10) {
                alert('Победа');
                score.textContent = 0;
                gameOver.textContent = 0;
            }
        } else {
            gameOver.textContent = Number(gameOver.textContent) + 1;
            if (gameOver.textContent >= 5) {
                alert('Поражение');
                score.textContent = 0;
                gameOver.textContent = 0;
            }
        }
    }
}
