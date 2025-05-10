import React, { useState, useEffect } from 'react';
import './SnakeGame.css';

const SnakeGame = () => {
    const generateFood = () => {
        const x = Math.floor(Math.random() * 20);
        const y = Math.floor(Math.random() * 20);
        return { x, y };
    };

    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    const [food, setFood] = useState(generateFood());
    const [direction, setDirection] = useState({ x: 0, y: 0 });
    let touchStartX = 0;
    let touchStartY = 0;

    useEffect(() => {
        const interval = setInterval(moveSnake, 200);
        return () => clearInterval(interval);
    }, [snake, direction]);

    const moveSnake = () => {
        const newSnake = [...snake];
        const head = { ...newSnake[0] };
        head.x += direction.x;
        head.y += direction.y;

        // Check if the snake eats the food
        if (head.x === food.x && head.y === food.y) {
            newSnake.unshift(head); 
            setFood(generateFood()); 
        } else {
            newSnake.pop(); // Remove the tail if no food is eaten
            newSnake.unshift(head); // Add the new head
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
            // Horizontal swipe
            if (deltaX > 50 && direction.x === 0) {
                setDirection({ x: 1, y: 0 });
            } else if (deltaX < -50 && direction.x === 0) {
                setDirection({ x: -1, y: 0 });
            }
        } else {
            // Vertical swipe
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

    return (
        <div className="snake-game">
        <h1>Snake Game</h1>
            {Array.from({ length: 20 }, (_, rowIndex) => (
                <div key={rowIndex} className="s-row">
                    {Array.from({ length: 20 }, (_, colIndex) => (
                        <div key={colIndex} className={`cell ${snake.some(segment => segment.x === colIndex && segment.y === rowIndex) ? 'snake' :
                                food.x === colIndex && food.y === rowIndex ? 'food' : ''
                            }`}></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SnakeGame;
// Edit
