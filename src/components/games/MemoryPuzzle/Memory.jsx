import { useState, useEffect, useCallback } from 'react';
import styles from './Memory.module.css';

const GRID_SIZE = 5;
const TOTAL_SQUARES = GRID_SIZE * GRID_SIZE;
const MAX_LEVEL = 10;
const DISPLAY_TIME = 5000; // 5 seconds

const MemoryPuzzle = () => {
    const initializeGrid = () => Array(TOTAL_SQUARES).fill(false);

    const [grid, setGrid] = useState(initializeGrid);
    const [level, setLevel] = useState(1);
    const [sequenceTiles, setSequenceTiles] = useState([]);
    const [currentStep, setCurrentStep] = useState(1);
    const [gameStarted, setGameStarted] = useState(false);
    const [showNumbers, setShowNumbers] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    const generateSequence = (count) => {
        const indices = Array.from({ length: TOTAL_SQUARES }, (_, i) => i);
        const shuffled = indices.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    };

    const startNewLevel = useCallback(() => {
        const newTiles = generateSequence(level);
        setSequenceTiles(newTiles);
        setGrid(initializeGrid());
        setCurrentStep(1);
        setShowNumbers(true);

        setTimeout(() => {
            setShowNumbers(false);
            setGrid(initializeGrid());
        }, DISPLAY_TIME);
    }, [level]);

    const handleSquareClick = useCallback(
        (index) => {
            if (!gameStarted || showNumbers || gameOver || gameWon) return;

            const expectedIndex = sequenceTiles[currentStep - 1];

            if (index === expectedIndex) {
                setGrid((prev) => {
                    const newGrid = [...prev];
                    newGrid[index] = true;
                    return newGrid;
                });

                if (currentStep === sequenceTiles.length) {
                    if (level === MAX_LEVEL) {
                        setGameWon(true);
                        setGameStarted(false);
                    } else {
                        setTimeout(() => {
                            setLevel((prev) => prev + 1);
                        }, 800);
                    }
                } else {
                    setCurrentStep((prev) => prev + 1);
                }
            } else {
                setGameOver(true);
                setGameStarted(false);
            }
        },
        [gameStarted, showNumbers, gameOver, gameWon, sequenceTiles, currentStep, level]
    );

    const startGame = () => {
        setLevel(1);
        setGameStarted(true);
        setGameOver(false);
        setGameWon(false);
    };

    const resetGame = () => {
        setGrid(initializeGrid());
        setGameStarted(false);
        setGameOver(false);
        setGameWon(false);
        setLevel(1);
    };

    useEffect(() => {
        if (gameStarted && !gameOver && !gameWon) {
            startNewLevel();
        }
    }, [level, gameStarted, gameOver, gameWon, startNewLevel]);

    return (
        <div className={styles.memoryContainer}>
            <h1 className={styles.title}>Memory  Game</h1>

            <div className={styles.gameInfo}>
                <div className={styles.score}>Level: {level}</div>
                <div className={styles.controls}>
                    <button
                        className={styles.button}
                        onClick={startGame}
                        disabled={gameStarted}
                    >
                        {gameStarted ? 'Game Started' : 'Start Game'}
                    </button>
                    <button className={styles.button} onClick={resetGame}>
                        Reset
                    </button>
                </div>
            </div>

            <div className={styles.gameBoard}>
                {grid.map((isRevealed, index) => {
                    const number =
                        showNumbers && sequenceTiles.includes(index)
                            ? sequenceTiles.indexOf(index) + 1
                            : '';
                    return (
                        <div
                            key={index}
                            className={`${styles.square} ${
                                isRevealed ? styles.revealed : ''
                            }`}
                            onClick={() => handleSquareClick(index)}
                        >
                            <span className={styles.squareContent}>{number}</span>
                        </div>
                    );
                })}
            </div>

            {!gameStarted && !gameOver && !gameWon && (
                <div className={styles.instructions}>
                    <p>Click "Start Game" to begin!</p>
                    <p>Remember the tile positions and click in the correct order!</p>
                </div>
            )}

            {gameOver && (
                <div className={styles.instructions}>
                    <h1 style={{ color: 'red' }}>Game Over!</h1>
                    <p>Click "Start Game" to try again.</p>
                </div>
            )}

            {gameWon && (
                <div className={styles.instructions}>
                    <p style={{ color: 'green' }}>🎉 You won the game! Great memory!</p>
                </div>
            )}
        </div>
    );
};

export default MemoryPuzzle;
