import React, { useState, useEffect } from 'react';
import './SnakeGame.css';

const GRID_SIZE = 15;

const SnakeGame = () => {
    const generateFood = () => {
        const x = Math.floor(Math.random() * GRID_SIZE);
        const y = Math.floor(Math.random() * GRID_SIZE);
        return { x, y };
    };

    const [snake, setSnake] = useState([{ x: Math.floor(GRID_SIZE / 2), y: Math.floor(GRID_SIZE / 2), direction: { x: 0, y: 0 } }]);
    const [food, setFood] = useState(generateFood());
    const [direction, setDirection] = useState({ x: 0, y: 0 });
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    let touchStartX = 0;
    let touchStartY = 0;

    useEffect(() => {
        const interval = setInterval(moveSnake, 200);
        return () => clearInterval(interval);
    }, [snake, direction, food, gameOver]);

    const moveSnake = () => {
        if (gameOver) return;

        const newSnake = [...snake];
        const head = { ...newSnake[0] };
        head.x += direction.x;
        head.y += direction.y;
        head.direction = direction;

        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
            setGameOver(true);
            return;
        }

        for (let i = 1; i < newSnake.length; i++) {
            if (head.x === newSnake[i].x && head.y === newSnake[i].y) {
                setGameOver(true);
                return;
            }
        }

        if (head.x === food.x && head.y === food.y) {
            newSnake.unshift(head);
            setFood(generateFood());
            setScore(prevScore => prevScore + 10);
        } else {
            newSnake.pop();
            newSnake.unshift(head);
        }
        setSnake(newSnake);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'ArrowUp' && direction.y === 0) {
            setDirection({ x: 0, y: -1 });
        } else if (e.key === 'ArrowDown' && direction.y === 0) {
            setDirection({ x: 0, y: 1 });
        } else if (e.key === 'ArrowLeft' && direction.x === 0) {
            setDirection({ x: -1, y: 0 });
        } else if (e.key === 'ArrowRight' && direction.x === 0) {
            setDirection({ x: 1, y: 0 });
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
            if (deltaX > 50 && direction.x === 0) {
                setDirection({ x: 1, y: 0 });
            } else if (deltaX < -50 && direction.x === 0) {
                setDirection({ x: -1, y: 0 });
            }
        } else {
            if (deltaY > 50 && direction.y === 0) {
                setDirection({ x: 0, y: 1 });
            } else if (deltaY < -50 && direction.y === 0) {
                setDirection({ x: 0, y: -1 });
            }
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);
        const boardElement = document.querySelector('.snake-game');
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
    }, [direction]);

    const handleReset = () => {
        setSnake([{ x: Math.floor(GRID_SIZE / 2), y: Math.floor(GRID_SIZE / 2), direction: {x: 0, y: 0} }]);
        setFood(generateFood());
        setDirection({ x: 0, y: 0 });
        setScore(0);
        setGameOver(false);
    };

    return (
        <div className="snake-game-container">
            <div className="snake-game">
                {Array.from({ length: GRID_SIZE }, (_, rowIndex) => (
                    <div key={rowIndex} className="s-row">
                        {Array.from({ length: GRID_SIZE }, (_, colIndex) => (
                            <div
                                key={colIndex}
                                className={`cell ${snake.some((segment, index) => segment.x === colIndex && segment.y === rowIndex)
                                    ? snake.findIndex(seg => seg.x === colIndex && seg.y === rowIndex) === 0
                                        ? `snake-head ${
                                            snake[0].direction.x === 1 ? 'right' :
                                            snake[0].direction.x === -1 ? 'left' :
                                            snake[0].direction.y === 1 ? 'down' :
                                            'up'
                                        }`
                                        : 'snake-body'
                                    : food.x === colIndex && food.y === rowIndex
                                        ? 'food'
                                        : ''
                                    }`}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="game-info">
                <p>Score: {score}</p>
                {gameOver && (
                    <div className="game-over-overlay">
                        <p>Game Over!</p>
                        <button onClick={handleReset}>Reset Game</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SnakeGame;
