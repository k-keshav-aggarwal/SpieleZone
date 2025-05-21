import React, { useState, useEffect } from 'react';
import './Tzfe.css';

const Tzfe = () => {
    const [board, setBoard] = useState(createBoard());
    const [gameOver, setGameOver] = useState(false);
    const [rating, setRating] = useState(0);
    const [rated, setRated] = useState(false);
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
        if (gameOver) return;
        let newBoard = board.map(row => [...row]); // Deep copy
        let moved = false;

        if (e.key === 'ArrowUp') {
            newBoard = moveUp(newBoard);
            moved = didBoardChange(board, newBoard);
        } else if (e.key === 'ArrowDown') {
            newBoard = moveDown(newBoard);
            moved = didBoardChange(board, newBoard);
        } else if (e.key === 'ArrowLeft') {
            newBoard = moveLeft(newBoard);
            moved = didBoardChange(board, newBoard);
        } else if (e.key === 'ArrowRight') {
            newBoard = moveRight(newBoard);
            moved = didBoardChange(board, newBoard);
        }

        if (moved) {
            addNewTile(newBoard);
            setBoard(newBoard);
        }
        if (isGameOver(newBoard)) {
            setGameOver(true);
        }
    };

    const handleTouchStart = (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
        if (gameOver) return;
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;

        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > 50) {
                handleKeyPress({ key: 'ArrowRight' });
            } else if (deltaX < -50) {
                handleKeyPress({ key: 'ArrowLeft' });
            }
        } else {
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
    }, [board, gameOver]);

    // ✅ SEO tags injected dynamically
    useEffect(() => {
        const prevTitle = document.title;
        const prevDesc = document.querySelector("meta[name='description']")?.getAttribute('content');

        // Set new SEO title & description
        document.title = '2048 Online - Spiele Zone by Shadowveil StudioZ';
        let descTag = document.querySelector("meta[name='description']");
        if (!descTag) {
            descTag = document.createElement('meta');
            descTag.name = 'description';
            document.head.appendChild(descTag);
        }
        descTag.setAttribute('content', 'Play the classic 2048 puzzle game online for free at Spiele Zone by Shadowveil StudioZ! Swipe to combine numbers and reach 2048.');

        // Canonical link
        let canonical = document.querySelector("link[rel='canonical']");
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://spiele-zone.vercel.app/tzfe');

        return () => {
            document.title = prevTitle;
            if (descTag && prevDesc) {
                descTag.setAttribute('content', prevDesc);
            }
            if (canonical) {
                canonical.setAttribute('href', 'https://spiele-zone.vercel.app/');
            }
        };
    }, []);

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

    function isGameOver(board) {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (board[i][j] === 0) return false;
            }
        }
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === board[i][j + 1] || board[j][i] === board[j + 1][i]) return false;
            }
        }
        return true;
    }

    function didBoardChange(oldBoard, newBoard) {
        return JSON.stringify(oldBoard) !== JSON.stringify(newBoard);
    }

    const handleReset = () => {
        setBoard(createBoard());
        setGameOver(false);
        setRating(0);
        setRated(false);
    };

    const renderRating = () => {
        if (rated) {
            return <p>Thank you for rating!</p>;
        }

        return (
            <div className="emoji-rating">
                {[1, 2, 3, 4, 5].map((num, i) => (
                    <span
                        key={i}
                        className={`emoji ${rating >= num ? 'selected' : ''}`}
                        onClick={() => handleStarClick(num)}
                        style={{ fontSize: '24px' }}
                    >
                        {['👎', '😕', '😐', '😃', '😆'][i]}
                    </span>
                ))}
            </div>
        );
    };

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
        setRated(true);
    };

    return (
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
            {gameOver && (
                <div className="game-over-overlay">
                    <p>Game Over!</p>
                    <button onClick={handleReset}>Reset Game</button>
                    {renderRating()}
                </div>
            )}
            <div>By Satviky</div>
        </div>
    );
};

export default Tzfe;
