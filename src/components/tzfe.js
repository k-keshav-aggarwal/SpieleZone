import React, { useState, useEffect } from 'react';
import './Tzfe.css';

const Tzfe = () => {
    const [board, setBoard] = useState(createBoard());
    let touchStartX = 0;
    let touchStartY = 0;

    function createBoard() {
        const initialBoard = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        addNewTile(initialBoard);
        addNewTile(initialBoard);
        return initialBoard;
    }

    function addNewTile(board) {
        let added = false;
        while (!added) {
            const row = Math.floor(Math.random() * 4);
            const col = Math.floor(Math.random() * 4);
            if (board[row][col] === 0) {
                board[row][col] = Math.random() > 0.5 ? 2 : 4;
                added = true;
            }
        }
    }

    const handleKeyPress = (e) => {
        let newBoard = [...board];
        if (e.key === 'ArrowUp') {
            newBoard = moveUp(newBoard);
        } else if (e.key === 'ArrowDown') {
            newBoard = moveDown(newBoard);
        } else if (e.key === 'ArrowLeft') {
            newBoard = moveLeft(newBoard);
        } else if (e.key === 'ArrowRight') {
            newBoard = moveRight(newBoard);
        }

        if (JSON.stringify(newBoard) !== JSON.stringify(board)) {
            addNewTile(newBoard);
            setBoard(newBoard);
        }
    };

    const handleTouchStart = (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;

        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal swipe
            if (deltaX > 50) {
                handleKeyPress({ key: 'ArrowRight' });
            } else if (deltaX < -50) {
                handleKeyPress({ key: 'ArrowLeft' });
            }
        } else {
            // Vertical swipe
            if (deltaY > 50) {
                handleKeyPress({ key: 'ArrowDown' });
            } else if (deltaY < -50) {
                handleKeyPress({ key: 'ArrowUp' });
            }
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);
        const boardElement = document.querySelector('.board');
        if (boardElement) {
            boardElement.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
        }
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
            if (boardElement) {
                boardElement.removeEventListener('touchmove', (e) => e.preventDefault());
            }
        };
    }, [board]);

    const moveUp = (board) => {
        const newBoard = rotateLeft(board);
        const movedBoard = moveLeft(newBoard);
        return rotateRight(movedBoard);
    };

    const moveDown = (board) => {
        const newBoard = rotateRight(board);
        const movedBoard = moveLeft(newBoard);
        return rotateLeft(movedBoard);
    };

    const moveLeft = (board) => {
        const newBoard = [];
        for (let i = 0; i < 4; i++) {
            let b = board[i].filter(val => val !== 0);
            for (let j = 0; j < b.length - 1; j++) {
                if (b[j] === b[j + 1]) {
                    b[j] *= 2;
                    b[j + 1] = 0;
                }
            }
            b = b.filter(val => val !== 0);
            while (b.length < 4) {
                b.push(0);
            }
            newBoard.push(b);
        }
        return newBoard;
    };

    const moveRight = (board) => {
        const newBoard = [];
        for (let i = 0; i < 4; i++) {
            let b = board[i].filter(val => val !== 0);
            for (let j = b.length - 1; j > 0; j--) {
                if (b[j] === b[j - 1]) {
                    b[j] *= 2;
                    b[j - 1] = 0;
                }
            }
            b = b.filter(val => val !== 0);
            while (b.length < 4) {
                b.unshift(0);
            }
            newBoard.push(b);
        }
        return newBoard;
    };

    const rotateLeft = (board) => {
        const newBoard = [];
        for (let i = 0; i < 4; i++) {
            const row = [];
            for (let j = 0; j < 4; j++) {
                row.push(board[j][3 - i]);
            }
            newBoard.push(row);
        }
        return newBoard;
    };

    const rotateRight = (board) => {
        const newBoard = [];
        for (let i = 0; i < 4; i++) {
            const row = [];
            for (let j = 0; j < 4; j++) {
                row.push(board[3 - j][i]);
            }
            newBoard.push(row);
        }
        return newBoard;
    };

    return (
        <>
            <div className="tzfe-container">
                <h1>2048 Game</h1>
                <div className="board">
                    {board.map((row, rowIndex) => (
                        <div key={rowIndex} className="row">
                            {row.map((tile, colIndex) => (
                                <div key={colIndex} className={`tile tile-${tile}`}>
                                    {tile !== 0 ? tile : ''}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div>By Satviky</div>
            </div>
        </>
    );
};

export default Tzfe;
