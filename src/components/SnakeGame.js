import React, { useState, useEffect, useRef } from 'react';
import './SnakeGame.css';

const GRID_SIZE = 20;

const SnakeGame = () => {
    const generateFood = () => ({
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
    });

    const [snake, setSnake] = useState([
        { x: Math.floor(GRID_SIZE / 2), y: Math.floor(GRID_SIZE / 2), direction: { x: 0, y: 0 } },
    ]);
    const [food, setFood] = useState(generateFood());
    const [direction, setDirection] = useState({ x: 0, y: 0 });
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [rating, setRating] = useState(0);  // Added state for rating
    const [rated, setRated] = useState(false);
    let touchStartX = 0;
    let touchStartY = 0;

    // Sound effect reference
    const eatSoundRef = useRef(null);

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
            gtag('event', 'game_over', {
        'game_name': 'Snake',
        'score': score,
        'reason_ended': 'hit_boundary'
    });
            return;
        }

        for (let i = 1; i < newSnake.length; i++) {
            if (head.x === newSnake[i].x && head.y === newSnake[i].y) {
                setGameOver(true);
                gtag('event', 'game_over', {
            'game_name': 'Snake',
            'score': score, 
            'reason_ended': 'hit_self'
        });
                return;
            }
        }

        if (head.x === food.x && head.y === food.y) {
            newSnake.unshift(head);
            setFood(generateFood());
            setScore(prevScore => prevScore + 10);

            // Play sound when snake eats food
            if (eatSoundRef.current) {
                eatSoundRef.current.play().catch(err => {
                    console.error("Failed to play sound:", err);
                });
            }
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

        if (e.key === 'w' && direction.y === 0) {
            setDirection({ x: 0, y: -1 });
        } else if (e.key === 's' && direction.y === 0) {
            setDirection({ x: 0, y: 1 });
        } else if (e.key === 'a' && direction.x === 0) {
            setDirection({ x: -1, y: 0 });
        } else if (e.key === 'd' && direction.x === 0) {
            setDirection({ x: 1, y: 0 });
        }

        if (e.key === 'W' && direction.y === 0) {
            setDirection({ x: 0, y: -1 });
        } else if (e.key === 'S' && direction.y === 0) {
            setDirection({ x: 0, y: 1 });
        } else if (e.key === 'A' && direction.x === 0) {
            setDirection({ x: -1, y: 0 });
        } else if (e.key === 'D' && direction.x === 0) {
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

    // ✅ SEO tags injected dynamically
    useEffect(() => {
        const prevTitle = document.title;
        const prevDesc = document.querySelector("meta[name='description']")?.getAttribute('content');

        // Set new SEO title & description
        document.title = 'Snake Game - Spiele Zone by Shadowveil StudioZ';
        let descTag = document.querySelector("meta[name='description']");
        if (!descTag) {
            descTag = document.createElement('meta');
            descTag.name = 'description';
            document.head.appendChild(descTag);
        }
        descTag.setAttribute('content', 'Play the classic Snake game online for free at Spiele Zone by Shadowveil StudioZ!');
        let KeyWords = document.querySelector("meta[name='keywords']");
        if (!KeyWords) {
            KeyWords = document.createElement('meta');
            KeyWords.name = 'keywords';
            document.head.appendChild(KeyWords);
        }
        KeyWords.setAttribute('content', 'Snake Game, Nostlagic Snake Game, Snake Game by Shadowveil StudioZ, Spiele zone snake');

        // Canonical link
        let canonical = document.querySelector("link[rel='canonical']");
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://spiele-zone.vercel.app/snake');

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

    const handleStarClick = (selectedRating) => {
        setRating(selectedRating);
        setRated(true);
    };

    const handleReset = () => {
        setSnake([{ x: Math.floor(GRID_SIZE / 2), y: Math.floor(GRID_SIZE / 2), direction: { x: 0, y: 0 } }]);
        setFood(generateFood());
        setDirection({ x: 0, y: 0 });
        setScore(0);
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


    return (
        <>
            <div className='game-name'>
                <h1>Snake Game</h1>
                <h2>One Pixel at a time</h2>
            </div>
            <div className="snake-game-container">
                {/* Hidden Audio Element */}
                <audio ref={eatSoundRef}>
                    <source src="/audios/gulp.mp3" type="audio/mpeg" />
                </audio>

                <div className="snake-game">
                    {Array.from({ length: GRID_SIZE }, (_, rowIndex) => (
                        <div key={rowIndex} className="s-row">
                            {Array.from({ length: GRID_SIZE }, (_, colIndex) => (
                                <div
                                    key={colIndex}
                                    className={`cell ${snake.some((segment, index) => segment.x === colIndex && segment.y === rowIndex)
                                        ? snake.findIndex(seg => seg.x === colIndex && seg.y === rowIndex) === 0
                                            ? `snake-head ${snake[0].direction.x === 1 ? 'right' :
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
                            <button onClick={() => window.location.reload()}>Reset Game</button>
                            {renderRating()}
                        </div>
                    )}
                </div>
                <p className='nophone sp-l w-300'>
                    <strong>Snake Game</strong> is a video game which was released somewhere near 1970s in arcade. It stayed popular for a long time ever since. When it became pre-loaded game on Nokia phone in 1998, Snake found a good fanbase.
                    Player create long thin creature, resembling a snake chasing pixels of 'food' and desperately avoiding the walls and its own tail.  It wasn't just a game; it was a cultural phenomenon, a shared memory for an entire generation, teaching us about strategy, quick reflexes, and the crushing despair of hitting your own body just inches from a new high score.
                    <div>Can you beat your own <strong>high score?</strong></div>
                </p>
                <p className='snake-para w-300 sp-r'>
                    <h3>Snake Game Controls</h3>
                    <h4>For Mobile Phones</h4>
                    <ul>
                        <li>You can <strong>Swipe</strong> the snake to move it in the respective direction.</li>
                    </ul>
                    <h4>For windows</h4>
                    <ol>
                        <li>You can use Arrow keys to move the snake in the respective directions.</li>
                        <li>Alternative keys</li>
                        <ul>
                            <li><strong>W</strong> to move UP</li>
                            <li><strong>A</strong> to move Left</li>
                            <li><strong>D</strong> to move Right</li>
                            <li><strong>S</strong> to move down</li>
                        </ul>
                    </ol>

                </p>
            </div>
        </>
    );
};

export default SnakeGame;

