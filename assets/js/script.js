let btnRef = document.querySelectorAll('.button-option');
let popupRef = document.querySelector('.popup');
let msgRef = document.getElementById('message');
let newGameBtn = document.getElementById('new-game');
let restartBtn = document.getElementById('restart');

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6]
];

let xTurn = true;
let count = 0;

const winChecker = () => {
    //check if there is a winner
};

btnRef.forEach((element) => {
    element.addEventListener('click', () => {
        if (xTurn) {
            xTurn = false;
            element.innerText = 'X';
            element.disabled = true;
        } else {
            xTurn = true;
            element.innerText = 'O';
            element.disabled = true;
        }

        count++;

        if (count === 9) {
            //its a draw
        }

        winChecker();
    });
});