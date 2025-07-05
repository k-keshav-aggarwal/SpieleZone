import { Link } from 'react-router-dom';
import { Info, ShieldCheck, Mail } from 'lucide-react';

export default function BottomBar() {
    return (
        <footer className="bar">
            <div>
            <Link
                    title="About Shadowveil Studio"
                    to="/about-us"
                    className="footer-comp"
                
                >
                    <Info className="w-4 h-4" />
                    About Us
                </Link>
            </div>
            <div>
            <Link
                    title="Read our privacy policy"
                    to="/privacy-policy"
                    className="footer-comp"
                >
                    <ShieldCheck className="w-4 h-4" />
                    Privacy Policy
                </Link>
            </div>
            <div>
                <Link
                    title="Talk to Shadowveil StudioZ"
                    to="/reach-us"
                    className="footer-comp"
                >
                    <Mail className="w-4 h-4" />
                    Contact Us
                </Link>
            </div>
        </footer>
    );
}
