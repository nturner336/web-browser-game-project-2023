document.addEventListener("DOMContentLoaded", () => {
    // Execute Javascrip logic once DOM loaded.

    // first player as 'X' = current 
    let currentPlayer = 'X';

    const blocks = document.querySelectorAll('.block');
    const restartButton = document.getElementById('restart-button'); 
    const winningCombos = [
        [1, 2, 3], // Top Row Win
        [4, 5, 6], // Mid Row Win
        [7, 8, 9], // Lower Row Win
        [1, 4, 7], // Column 1 Win
        [2, 5, 8], // Column 2 Win
        [3, 6, 9], // Column 3 Win
        [1, 5, 9], // Diagonal-Left to Right Win
        [3, 5, 7]  // Diagonal-Right to Left Win
    ];

    const checkYesWin = () => {
        return winningCombos.some(combo => {
            return combo.every(i => {
                return blocks[i - 1].innerText === currentPlayer; // Fixed the index and block.innerText check
            });
        });
    };

    const checkNoWin = () => {
        return [...blocks].every(block => {
            return block.innerText === 'X' || block.innerText === 'O'; // Fixed the logical condition
        });
    };

    // User clicks on a block to place X or O
    const onClick = (e) => {
        const block = e.target; console.log(e)
        if (block.innerText !== '') return;

        block.innerText = currentPlayer;
        if (checkYesWin()) {
            alert(`Player ${currentPlayer} Wins!`);
            return;
        }
        if (checkNoWin()) {
            alert('No Winner');
            return;
        }

        console.log(BEFORE,currentPlayer)
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        console.log(AFTER,currentPlayer)
    };

    const restartGame = () => {
        currentPlayer = 'X';
        blocks.forEach(block => block.innerText = ''); // Reset grid
    };

    blocks.forEach(block => block.addEventListener('click', onClick)); // Use forEach to add event listeners to all blocks
    restartButton.addEventListener('click', restartGame);
});
