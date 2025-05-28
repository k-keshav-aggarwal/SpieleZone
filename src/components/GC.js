import React, { useState, useEffect } from "react";
import "./gc1.css";
import wordList from "../words.json";

const GhostCode = () => {
    const [words, setWords] = useState([]);
    const [currentWord, setCurrentWord] = useState("");
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if (gameOver) return;

        const speed = Math.max(3000 - score * 200, 1000); // Faster spawn rate

        const interval = setInterval(() => {
            const newWord = {
                text: wordList[Math.floor(Math.random() * wordList.length)],
                position: 0, // Tracking position
                id: Math.random(),
            };

            setWords((prevWords) => [...prevWords, newWord]); 
        }, speed);

        return () => clearInterval(interval);
    }, [score, gameOver]);

    useEffect(() => {
        if (gameOver) return;

        const moveInterval = setInterval(() => {
            setWords((prevWords) => {
                const updatedWords = prevWords.map((word) => ({
                    ...word,
                    position: word.position + 5,
                }));

                if (updatedWords.some((word) => word.position >= 400)) {
                    setGameOver(true);
                    return [];
                }

                return updatedWords;
            });
        }, 100);

        return () => clearInterval(moveInterval);
    }, [words, gameOver]);

    const handleInput = (event) => {
    const typedWord = event.target.value.toLowerCase(); // Convert input to lowercase
    setCurrentWord(typedWord);

    if (words.some((word) => word.text.toLowerCase() === typedWord)) { // Convert words to lowercase
        setWords(words.filter((word) => word.text.toLowerCase() !== typedWord));
        setScore(score + 1);
        setCurrentWord("");
    }
};


    const restartGame = () => {
        setWords([]);
        setScore(0);
        setGameOver(false);
        setCurrentWord("");
    };

    return (
        <div className="game-container">
            <h1>GhostCode</h1>
            <h2>Type the words before they reach the bottom!</h2>

            {gameOver ? (
                <div className="game-over">
                    <h2>Game Over!</h2>
                    <p>Your final score: {score}</p>
                    <button onClick={restartGame}>Restart</button>
                </div>
            ) : (
                <>
                    <div className="game-screen">
                        {words.map((word) => (
                            <div key={word.id} className="falling-word" style={{ top: `${word.position}px` }}>
                                {word.text}
                            </div>
                        ))}
                    </div>
                    <input type="text" value={currentWord} onChange={handleInput} placeholder="Type here..." autoFocus />
                    <p>Score: {score}</p>
                </>
            )}
        </div>
    );
};

export default GhostCode;
