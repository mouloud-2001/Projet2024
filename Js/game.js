let isJumping = false;

function jump() {
    if (isJumping) return;
    isJumping = true;

    let character = document.getElementById("character");
    let position = 0;
    let intervalUp = setInterval(() => {
        if (position >= 150) {
            clearInterval(intervalUp);
            let intervalDown = setInterval(() => {
                if (position <= 0) {
                    clearInterval(intervalDown);
                    isJumping = false;
                }
                position -= 5;
                character.style.bottom = position + "px";
            }, 20);
        }
        position += 5;
        character.style.bottom = position + "px";
    }, 20);
}

function startGame() {
    let obstacle = document.getElementById("obstacle");
    obstacle.style.animation = "moveObstacle 2s infinite linear";
}

function checkCollision() {
    let character = document.getElementById("character");
    let obstacle = document.getElementById("obstacle");

    setInterval(() => {
        let characterRect = character.getBoundingClientRect();
        let obstacleRect = obstacle.getBoundingClientRect();

        if (
            characterRect.right > obstacleRect.left &&
            characterRect.left < obstacleRect.right &&
            characterRect.bottom > obstacleRect.top &&
            characterRect.top < obstacleRect.bottom
        ) {
            alert("Game Over!");
            obstacle.style.animation = "none";
        }
    }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
    startGame();
    checkCollision();
});
