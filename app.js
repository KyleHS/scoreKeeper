const p1Button = document.querySelector('#p1Button'); //variable for p1 button
const p2Button = document.querySelector('#p2Button'); //variable for p2 button
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');


let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function () {  //p1 button functionality
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success'); //Winning score will turn green
            p2Display.classList.add('has-text-danger'); //Losing score will turn red
            p1Button.disabled = true;
            p2Button.disabled = true;
    }
    p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', function () {  //p2 button functionality
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
    }
    p2Display.textContent = p2Score;
    }
});

winningScoreSelect.addEventListener('change', function () {
    winningScore= parseInt(this.value);
    reset(); //resets score if we change our winning score with the selector
});

resetButton.addEventListener('click', reset);  //reset button function is called when button is pressed

function reset() {
    p1Score = 0;
    p1Display.textContent = p1Score;
    p2Score = 0;
    p2Display.textContent = p2Score;
    isGameOver = false;
    p1Display.classList.remove('has-text-success', 'has-text-danger'); //takes away green styling
    p2Display.classList.remove('has-text-success', 'has-text-danger');  //takes away red styling
    p1Button.disabled = false;
    p2Button.disabled = false;
}