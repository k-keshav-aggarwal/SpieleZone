import { Link } from 'react-router-dom';
import { Info, ShieldCheck, Mail } from 'lucide-react';

export default function BottomBar() {
    return (
        <footer className="w-full bg-gray-900 text-white py-6">
            <div className="max-w-6xl mx-auto flex justify-center gap-10 items-center">
                <Link
                    title="About Shadowveil Studio"
                    to="/about-us"
                    className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-200"
                >
                    <Info className="w-4 h-4" />
                    About Us
                </Link>

                <Link
                    title="Read our privacy policy"
                    to="/privacy-policy"
                    className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-200"
                >
                    <ShieldCheck className="w-4 h-4" />
                    Privacy Policy
                </Link>

                <Link
                    title="Talk to Shadowveil StudioZ"
                    to="/reach-us"
                    className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-200"
                >
                    <Mail className="w-4 h-4" />
                    Contact Us
                </Link>
            </div>
        </footer>
    );
}
