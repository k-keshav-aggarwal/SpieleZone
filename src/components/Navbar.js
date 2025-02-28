import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
        <nav className='bar'>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/tzfe">2048</Link></div>
            <div><Link to="/snake">Snake Game</Link></div>
            <div><Link to="/hm">Hangman</Link></div>

        </nav>
    );
}