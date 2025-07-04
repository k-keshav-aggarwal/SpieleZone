import { useState, useEffect, useRef, useCallback } from 'react';
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
    const [rating, setRating] = useState(0);
    const [rated, setRated] = useState(false);
    const eatSoundRef = useRef(null);
    const touchStartRef = useRef({ x: 0, y: 0 });

    const moveSnake = useCallback(() => {
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
            eatSoundRef.current?.play().catch(err => console.error("Failed to play sound:", err));
        } else {
            newSnake.pop();
            newSnake.unshift(head);
        }

        setSnake(newSnake);
    }, [direction, food, gameOver, snake]);

    useEffect(() => {
        const interval = setInterval(moveSnake, 200);
        return () => clearInterval(interval);
    }, [moveSnake]);

    const handleKeyPress = useCallback((e) => {
        const dirMap = {
            ArrowUp: { x: 0, y: -1 },
            ArrowDown: { x: 0, y: 1 },
            ArrowLeft: { x: -1, y: 0 },
            ArrowRight: { x: 1, y: 0 },
            w: { x: 0, y: -1 },
            s: { x: 0, y: 1 },
            a: { x: -1, y: 0 },
            d: { x: 1, y: 0 },
            W: { x: 0, y: -1 },
            S: { x: 0, y: 1 },
            A: { x: -1, y: 0 },
            D: { x: 1, y: 0 }
        };

        const newDir = dirMap[e.key];
        if (!newDir) return;

        if ((newDir.x !== 0 && direction.x === 0) || (newDir.y !== 0 && direction.y === 0)) {
            setDirection(newDir);
        }
    }, [direction]);

    const handleTouchStart = useCallback((e) => {
        touchStartRef.current = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
        };
    }, []);

    const handleTouchEnd = useCallback((e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;

        const deltaX = touchEndX - touchStartRef.current.x;
        const deltaY = touchEndY - touchStartRef.current.y;

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
    }, [direction]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        const boardElement = document.querySelector('.snake-game');
        boardElement?.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
            boardElement?.removeEventListener('touchmove', (e) => e.preventDefault());
        };
    }, [handleKeyPress, handleTouchStart, handleTouchEnd]);

    useEffect(() => {
        const prevTitle = document.title;
        const prevDesc = document.querySelector("meta[name='description']")?.getAttribute('content');

        document.title = 'Snake Game - Spiele Zone by Shadowveil StudioZ';
        let descTag = document.querySelector("meta[name='description']");
        if (!descTag) {
            descTag = document.createElement('meta');
            descTag.name = 'description';
            document.head.appendChild(descTag);
        }
        descTag.setAttribute('content', 'Play the classic Snake game online for free at Spiele Zone by Shadowveil StudioZ!');

        let keywords = document.querySelector("meta[name='keywords']");
        if (!keywords) {
            keywords = document.createElement('meta');
            keywords.name = 'keywords';
            document.head.appendChild(keywords);
        }
        keywords.setAttribute('content', 'Snake Game, Nostlagic Snake Game, Snake Game by Shadowveil StudioZ, Spiele zone snake');

        let canonical = document.querySelector("link[rel='canonical']");
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://spiele-zone.vercel.app/snake');

        return () => {
            document.title = prevTitle;
            if (descTag && prevDesc) descTag.setAttribute('content', prevDesc);
            if (canonical) canonical.setAttribute('href', 'https://spiele-zone.vercel.app/');
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
        if (rated) return <p>Thank you for rating!</p>;

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
            </div>
            <div className="snake-game-container">
                <audio ref={eatSoundRef}>
                    <source src="/audios/gulp.mp3" type="audio/mpeg" />
                </audio>

                <div className="snake-game">
                    {Array.from({ length: GRID_SIZE }, (_, rowIndex) => (
                        <div key={rowIndex} className="s-row">
                            {Array.from({ length: GRID_SIZE }, (_, colIndex) => {
                                const isSnake = snake.some(s => s.x === colIndex && s.y === rowIndex);
                                const isHead = snake[0].x === colIndex && snake[0].y === rowIndex;
                                const isFood = food.x === colIndex && food.y === rowIndex;
                                let className = "cell";

                                if (isSnake) {
                                    className += isHead
                                        ? ` snake-head ${snake[0].direction.x === 1 ? 'right' : snake[0].direction.x === -1 ? 'left' : snake[0].direction.y === 1 ? 'down' : 'up'}`
                                        : " snake-body";
                                } else if (isFood) {
                                    className += " food";
                                }

                                return <div key={colIndex} className={className}></div>;
                            })}
                        </div>
                    ))}
                </div>

                <div className="game-info">
                    <p>Score: {score}</p>
                    {gameOver && (
                        <div className="game-over-overlay">
                            <p>Game Over!</p>
                            <button onClick={handleReset}>Reset Game</button>
                            {renderRating()}
                        </div>
                    )}
                </div>

                <p className='nophone sp-l w-300'>
                    <strong>Snake Game</strong> is a video game which was released somewhere near 1970s in arcade. It stayed popular for a long time ever since...
                    <div>Can you beat your own <strong>high score?</strong></div>
                </p>

                <div className='snake-para w-300 sp-r'>
                    <h3>Snake Game Controls</h3>
                    <h4>For Mobile Phones</h4>
                    <ul>
                        <li><strong>Swipe</strong> to move the snake in respective directions.</li>
                    </ul>
                    <h4>For Windows</h4>
                    <ol>
                        <li>Use Arrow keys or W/A/S/D to control the snake.</li>
                    </ol>
                </div>
            </div>
        </>
    );
};

export default SnakeGame;
