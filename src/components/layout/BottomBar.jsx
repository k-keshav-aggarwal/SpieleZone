import { Link } from 'react-router-dom';
import { Info, ShieldCheck, Mail } from 'lucide-react';

export default function BottomBar() {
    return (
        <footer className="bar">
            <div>
            <Link
                    title="About Shadowveil Studio"
                    to="/about-us"
                    description="testing meta component for links"
                >
                    <Info className="w-4 h-4" />
                    About Us
                </Link>
            </div>
            <div>
            <Link
                    title="Read our privacy policy"
                    to="/privacy-policy"
                >
                    <ShieldCheck className="w-4 h-4" />
                    Privacy Policy
                </Link>
            </div>
            <div>
                <Link
                    title="Talk to Shadowveil StudioZ"
                    to="/reach-us"
                >
                    <Mail className="w-4 h-4" />
                    Contact Us
                </Link>
            </div>
        </footer>
    );
}
