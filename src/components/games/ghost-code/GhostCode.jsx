import { useState, useEffect } from "react";
import wordList from "../../../assets/words.json";
import styles from "./GhostCode.module.css";

const GhostCode = () => {
  const [words, setWords] = useState([]);
  const [currentWord, setCurrentWord] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (gameOver) return;

    const speed = Math.max(3000 - score * 200, 1000);

    const interval = setInterval(() => {
      const newWord = {
        text: wordList[Math.floor(Math.random() * wordList.length)],
        position: 0,
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
    const typedWord = event.target.value.toLowerCase();
    setCurrentWord(typedWord);

    if (words.some((word) => word.text.toLowerCase() === typedWord)) {
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
    <div className={styles.container}>
      <h1 className={styles.title}>GhostCode</h1>
      <h2 className={styles.subtitle}>Type the words before they reach the bottom!</h2>

      {gameOver ? (
        <>
          <h2 className={styles.subtitle}>Game Over!</h2>
          <p className={styles.score}>Your final score: {score}</p>
          <button onClick={restartGame} className={styles.button}>Restart</button>
        </>
      ) : (
        <>
          <div className={styles.gameScreen}>
            {words.map((word) => (
              <div
                key={word.id}
                className={styles.fallingWord}
                style={{ top: `${word.position}px` }}
              >
                {word.text}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={currentWord}
            onChange={handleInput}
            placeholder="Type here..."
            className={styles.input}
            autoFocus
          />
          <p className={styles.score}>Score: {score}</p>
        </>
      )}
    </div>
  );
};

export default GhostCode;