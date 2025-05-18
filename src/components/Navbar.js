import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <nav className='bar'>
            <div><Link title='Link to Homepage' to="/">Home</Link></div>
            <div><Link title='2048 game' to="/tzfe">2048</Link></div>
            <div><Link title='Nostalgic Snake game' to="/snake">Snake Game</Link></div>
            <div><Link title='Not so Classic Hangman' to="/hm">Hangman</Link></div>
        </nav>
    );
}