import { useState, useEffect } from "react";
import wordList from "../../../assets/words.json";
import "./GhostCode.css";

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

    // ✅ SEO tags injected dynamically
    useEffect(() => {
        const prevTitle = document.title;
        const prevDesc = document.querySelector("meta[name='description']")?.getAttribute('content');

        // Set new SEO title & description
        document.title = 'Ghost Code || Spiele Zone || Shadowveil StudioZ';
        let descTag = document.querySelector("meta[name='description']");
        if (!descTag) {
            descTag = document.createElement('meta');
            descTag.name = 'description';
            document.head.appendChild(descTag);
        }
        descTag.setAttribute('content', 'Ghostly threats are descending from the veil. Each word you type pushes back the shadows. Can your typing banish them in time?');
        let KeyWords = document.querySelector("meta[name='keywords']");
        if (!KeyWords) {
            KeyWords = document.createElement('meta');
            KeyWords.name = 'keywords';
            document.head.appendChild(KeyWords);
        }
        KeyWords.setAttribute('content', 'Ghost Code, ghost Code by Shadowveil StudioZ, Ghost Code Spiele Zone, Ghost Code typing game');

        // Canonical link
        let canonical = document.querySelector("link[rel='canonical']");
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', 'https://www.spielezone.xyz/ghost-code/play');

        return () => {
            document.title = prevTitle;
            if (descTag && prevDesc) {
                descTag.setAttribute('content', prevDesc);
            }
            if (canonical) {
                canonical.setAttribute('href', 'https://www.spielezone.xyz/');
            }
        };
    }, []);

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
