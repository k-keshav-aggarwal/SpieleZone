import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <footer className='bar'>


        <Link to="/about-us">About us</Link>

        <Link to="/privacy-policy">Privacy Policy</Link>


    </footer>
    );
}