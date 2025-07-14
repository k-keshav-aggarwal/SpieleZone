import { Link } from 'react-router-dom';
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
  return (
    <>
      <nav className={styles.navbar}>
        <Link title="Link to Homepage" to="/">Home</Link>
        <Link title="2048 game" to="/tzfe" onClick={() => trackGameStart('2048')}>2048</Link>
        <Link title="Nostalgic Snake game" to="/Snake" onClick={() => trackGameStart('Snake')}>Snake Game</Link>
        <Link title="Not so Classic Hangman" to="/HangMan" onClick={() => trackGameStart('hangman')}>Hangman</Link>
        <Link title="New and Unique typing game" to="/ghost-code">Ghost Code</Link>
        <Link title="Simple Old School Memory Test" to="/memory" onClick={() => trackGameStart('hangman')}>Memory Puzzle</Link>
      </nav>

      <nav className={styles.pnavbar}>
        <button onclick="myFunction()" class="dropbtn">Dropdown</button>
        <div id="myDropdown" class="dropdown-content">
          <Link title="Link to Homepage" to="/">Home</Link>
          <Link title="2048 game" to="/tzfe" onClick={() => trackGameStart('2048')}>2048</Link>
          <Link title="Nostalgic Snake game" to="/Snake" onClick={() => trackGameStart('Snake')}>Snake Game</Link>
          <Link title="Not so Classic Hangman" to="/HangMan" onClick={() => trackGameStart('hangman')}>Hangman</Link>
          <Link title="New and Unique typing game" to="/ghost-code">Ghost Code</Link>
          <Link title="Simple Old School Memory Test" to="/memory">Memory Puzzle</Link>
        </div>
      </nav>

    </>
  );
}
