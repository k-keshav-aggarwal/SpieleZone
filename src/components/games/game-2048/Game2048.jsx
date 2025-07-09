import { useState, useEffect, useCallback } from 'react';
import './Game2048.css';

const rotateLeft = (board) => board[0].map((_, i) => board.map(row => row[3 - i]));
const rotateRight = (board) => board[0].map((_, i) => board.map(row => row[i]).reverse());

const moveLeft = (board) => {
    return board.map(row => {
        const nonZero = row.filter(val => val !== 0);
        for (let i = 0; i < nonZero.length - 1; i++) {
            if (nonZero[i] === nonZero[i + 1]) {
                nonZero[i] *= 2;
                nonZero[i + 1] = 0;
            }
        }
        const merged = nonZero.filter(val => val !== 0);
        return [...merged, ...Array(4 - merged.length).fill(0)];
    });
};

const moveRight = (board) =>
    moveLeft(board.map(row => row.reverse())).map(row => row.reverse());

const moveUp = (board) =>
    rotateRight(moveLeft(rotateLeft(board)));

const moveDown = (board) =>
    rotateLeft(moveLeft(rotateRight(board)));

const changeInBoard = (a, b) => JSON.stringify(a) !== JSON.stringify(b);

const isGameOver = (board) => {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === 0) return false;
            if (j < 3 && board[i][j] === board[i][j + 1]) return false;
            if (i < 3 && board[i][j] === board[i + 1][j]) return false;
        }
    }
    return true;
};

const addNewTile = (board) => {
    const emptyTiles = [];
    board.forEach((row, i) =>
        row.forEach((val, j) => {
            if (val === 0) emptyTiles.push([i, j]);
        })
    );
    if (emptyTiles.length === 0) return;
    const [row, col] = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    board[row][col] = Math.random() > 0.5 ? 2 : 4;
};

const createBoard = () => {
    const board = Array(4).fill().map(() => Array(4).fill(0));
    addNewTile(board);
    addNewTile(board);
    return board;
};

const Game2048 = () => {
    const [board, setBoard] = useState(createBoard());
    const [gameOver, setGameOver] = useState(false);
    const [rating, setRating] = useState(0);
    const [rated, setRated] = useState(false);
    const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
    const [resetting, setResetting] = useState(false);
    const [showResetMsg, setShowResetMsg] = useState(false);

    const handleKeyPress = useCallback((e) => {
        if (gameOver) return;

        let newBoard = board.map(row => [...row]);
        const key = e.key.toLowerCase();

        if      (e.key === 'ArrowUp'    || key === 'w') newBoard = moveUp(newBoard);
        else if (e.key === 'ArrowDown'  || key === 's') newBoard = moveDown(newBoard);
        else if (e.key === 'ArrowLeft'  || key === 'a') newBoard = moveLeft(newBoard);
        else if (e.key === 'ArrowRight' || key === 'd') newBoard = moveRight(newBoard);
        else return;


        if (changeInBoard(board, newBoard)) {
            addNewTile(newBoard);
            setBoard(newBoard);
            if (isGameOver(newBoard)) setGameOver(true);
        }
    }, [board, gameOver]);

    const handleTouchStart = (e) => {
        setTouchStart({
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
        });
    };

    const handleTouchEnd = useCallback((e) => {
        if (gameOver) return;
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const deltaX = endX - touchStart.x;
        const deltaY = endY - touchStart.y;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            handleKeyPress({ key: deltaX > 50 ? 'ArrowRight' : 'ArrowLeft' });
        } else {
            handleKeyPress({ key: deltaY > 50 ? 'ArrowDown' : 'ArrowUp' });
        }
    }, [touchStart, handleKeyPress, gameOver]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [handleKeyPress, handleTouchEnd]);

    const handleReset = () => {
        setResetting(true);
        setTimeout(() => {
            setBoard(createBoard());
            setGameOver(false);
            setRating(0);
            setRated(false);
            setResetting(false);
            setShowResetMsg(true);
            setTimeout(() => setShowResetMsg(false), 2000);
        }, 300);
    };

    const handleStarClick = (value) => {
        setRating(value);
        setRated(true);
    };

    return (
        <div className="game-2048-container">
            <h1 className="mario-title">2048 Mario Edition</h1>

            {showResetMsg && (
                <div className="reset-toast">✨ New Game Started!</div>
            )}

            <div className="board-wrapper">
                <div className={`board ${resetting ? 'resetting' : ''}`}>
                    {board.map((row, i) => (
                        <div className="row" key={i}>
                            {row.map((val, j) => (
                                <div className={`tile tile-${val}`} key={j}>
                                    {val !== 0 ? val : ''}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {gameOver && (
                    <div className="game-overlay">
                        <p>Game Over!</p>
                        <button onClick={handleReset} className="reset-button">🔄 Reset Game</button>
                        {!rated ? (
                            <div className="emoji-rating">
                                {[1, 2, 3, 4, 5 , 6 , 7].map((num, i) => (
                                    <span
                                        key={i}
                                        className={`emoji ${rating >= num ? 'selected' : ''}`}
                                        onClick={() => handleStarClick(num)}
                                    >
                                        {['👎', '😠', '😕', '😐', '😃', '😆', '❤️'][i]}
                                    </span>
                                ))}
                            </div>
                        ) : <p>Thank you for rating!</p>}
                    </div>
                )}
            </div>

            <div className="footer">
                <p>By Satviky</p>
                <p>UI/UX by Keshav</p>
            </div>
        </div>
    );
};

export default Game2048;
