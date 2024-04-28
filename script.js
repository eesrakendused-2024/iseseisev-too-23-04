let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function makeMove(row, col) {
    if (board[row][col] === '' && !checkWinner()) {
        board[row][col] = currentPlayer;
        renderBoard();
        if (checkWinner()) {
            document.getElementById('status').innerText = `Mängija ${currentPlayer} võitis!`;
        } else if (isBoardFull()) {
            document.getElementById('status').innerText = "Viik!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function renderBoard() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            document.getElementById('board').rows[row].cells[col].innerText = board[row][col];
        }
    }
}

function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
            return true;
        }
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
            return true;
        }
    }
    // Check diagonals
    if ((board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) ||
        (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer)) {
        return true;
    }
    return false;
}

function isBoardFull() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === '') {
                return false;
            }
        }
    }
    return true;
}

renderBoard();

function resetGame() {
    init();
    renderBoard();
    document.getElementById('status').innerText = '';
}

// Mängu algväärtuste seadistamine
function init() {
    currentPlayer = 'X';
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
}

//Koodiga aitas ka chat-gpt.
