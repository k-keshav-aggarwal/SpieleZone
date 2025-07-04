import { Link } from 'react-router-dom';

function trackGameStart(gameName) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'game_start', {
            'game_name': gameName
        });
        console.log('GA4 Event: game_start, Game:', gameName);
    } else {
        console.warn('gtag function not found. GA4 tracking may not be set up correctly.');
    }
}

export default function Navbar() {
    
    return (
        <nav className='bar'>
            <div><Link title='Link to Homepage' to="/">Home</Link></div>
            <div><Link title='2048 game' to="/Game2048" onClick={() => trackGameStart('2048')}>2048</Link></div>
            <div><Link title='Nostalgic Snake game' to="/Snake" onClick={() => trackGameStart('Snake')}>Snake Game</Link></div>
            <div><Link title='Not so Classic Hangman' to="/HangMan" onClick={() => trackGameStart('hangman')}>Hangman</Link></div>
            <div><Link title='New and Unique typing game' to="/ghost-code">Ghost code</Link></div>
        </nav>
    );
}