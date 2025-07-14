import { Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Navbar.module.css';

function trackGameStart(gameName) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'game_start', {
      game_name: gameName
    });
    console.log('GA4 Event: game_start, Game:', gameName);
  } else {
    console.warn('gtag function not found. GA4 tracking may not be set up correctly.');
  }
}


export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <Link title="Link to Homepage" to="/">Home</Link>
        <Link title="2048 game" to="/tzfe" onClick={() => trackGameStart('2048')}>2048</Link>
        <Link title="Nostalgic Snake game" to="/Snake" onClick={() => trackGameStart('Snake')}>Snake Game</Link>
        <Link title="Not so Classic Hangman" to="/HangMan" onClick={() => trackGameStart('hangman')}>Hangman</Link>
        <Link title="New and Unique typing game" to="/ghost-code">Ghost Code</Link>
        <Link title="Simple Old School Memory Test" to="/memory" onClick={() => trackGameStart('memorypuzzle')}>Memory Puzzle</Link>
      </nav>


      <nav className={styles.pnavbar}>
        <Link title="Link to Homepage" to="/">Home</Link>
        <Link title="Nostalgic Snake game" to="/Snake" onClick={() => trackGameStart('Snake')}>Snake Game</Link>
        <div className={styles.pnbdd}>
          <button className={styles.pnbbtn} onClick={() => setOpen(!open)}  >
            More Games ▾
          </button>
          {open && (
            <div className={styles.pnbmenu}>
              <div className={styles.ddmenu}>
                <a href="/tzfe" className={styles.pnbddls}>2048</a>
              <a href="/HangMan" className={styles.pnbddls}>Hangman</a>
              <a href="/ghost-code" className={styles.pnbddls}>Ghost Code</a>
              <a href="/memory" className={styles.pnbddls}>Memory Puzzle</a>
            </div>
            </div>
          )}
      </div>

    </nav >

    </>
  );
}
