import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <footer className='bar'>

            <Link title='About Shadowveil Studio' to="/about-us">About Us</Link>

            <Link title='Read our privacy policy' to="/privacy-policy">Privacy Policy</Link>

            <Link title='Talk to Shadowveil StudioZ' to="/reach-us">Contact Us</Link>

        </footer>
    );
}