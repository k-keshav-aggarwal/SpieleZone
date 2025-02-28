import React, { useState, useEffect } from 'react';
import './Hangman.css';
import words from '../words.json';

const Hangman = () => {
    const getRandomWord = () => {
        const randomIndex = Math.floor(Math.random() * words.length);
        return words[randomIndex];
    };

    const [word, setWord] = useState(getRandomWord());
    const [guesses, setGuesses] = useState([]);
    const [remainingAttempts, setRemainingAttempts] = useState(6);
    const [gameOver, setGameOver] = useState(false);
    const [won, setWon] = useState(false);

    const handleGuess = (letter) => {
        if (!guesses.includes(letter) && remainingAttempts > 0 && !gameOver && !won) {
            setGuesses([...guesses, letter]);
            if (!word.includes(letter)) {
                setRemainingAttempts(remainingAttempts - 1);
            }
        }
    };

    const handleKeyPress = (e) => {
        const letter = e.key.toLowerCase();
        if (letter >= 'a' && letter <= 'z') {
            handleGuess(letter);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [guesses, remainingAttempts]);

    useEffect(() => {
        if (remainingAttempts === 0) {
            setGameOver(true);
        } else if (word.split("").every(letter => guesses.includes(letter))) {
            setWon(true);
        }
    }, [remainingAttempts, guesses, word]);

    const displayWord = word.split("").map(letter => guesses.includes(letter) ? letter : "_").join(" ");

    return (
        <div className="hangman-container">
            <h1>Hangman Game</h1>
            <div className="word">{gameOver ? word : displayWord}</div>
            <div className="attempts">Remaining Attempts: {remainingAttempts}</div>
            <div className="guesses">Guessed Letters: {guesses.join(", ")}</div>
            <div className="keyboard">
                {"abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
                    <button key={letter} onClick={() => handleGuess(letter)} disabled={guesses.includes(letter) || gameOver || won}>
                        {letter}
                    </button>
                ))}
            </div>
            {gameOver && <div className="game-over">Game Over! The word was "{word}".</div>}
            {won && <div className="win">You win! The word was "{word}".</div>}
        </div>
    );
};

export default Hangman;
