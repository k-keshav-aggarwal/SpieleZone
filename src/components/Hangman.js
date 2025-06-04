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
    const [remainingAttempts, setRemainingAttempts] = useState(9);
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
        const jsonLd = {
            "@context": "https://schema.org",
            "@type": "Game",
            "name": "Hangman",
            "applicationCategory": "Word game",
            "operatingSystem": "All",
            "url": "https://spielezone.com/hm",
            "author": {
                "@type": "Organization",
                "name": "Shadowveil Studio"
            },
            "description": "Play Hangman online at Spiele Zone. Guess the word before you run out of chances!",
            "image": "https://spielezone.com/assets/og-hangman.png"
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(jsonLd);
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);
    import { useEffect } from 'react';

const AdWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = '//pl26835984.profitableratecpm.com/d590a7eeede627e92ad37ac6c3ed8e9a/invoke.js';

    document.getElementById('ad-container')?.appendChild(script);
  }, []);

  return <div id="ad-container"><div id="container-d590a7eeede627e92ad37ac6c3ed8e9a"></div></div>;
};

export default AdWidget;


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
        <>
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
                <AdWidget />
            </div>
        </>
    );
};

export default Hangman;
