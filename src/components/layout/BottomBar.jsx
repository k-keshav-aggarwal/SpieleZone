import { Link } from 'react-router-dom';
import { Info, ShieldCheck, Mail } from 'lucide-react';

export default function BottomBar() {
    return (
        <footer className="w-full bg-black text-white py-8 border-t border-gray-800">
            <div className="max-w-6xl mx-auto flex justify-evenly items-center">
                <Link
                    title="About Shadowveil Studio"
                    to="/about-us"
                    className="flex flex-col items-center gap-2 text-[aliceblue] hover:text-[#E6E6FA] transition-colors duration-200"
                >
                    <Info className="w-5 h-5" />
                    <span className="text-sm font-medium">About Us</span>
                </Link>

                <Link
                    title="Read our privacy policy"
                    to="/privacy-policy"
                    className="flex flex-col items-center gap-2 text-[aliceblue] hover:text-[#E6E6FA] transition-colors duration-200"
                >
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-sm font-medium">Privacy Policy</span>
                </Link>

                <Link
                    title="Talk to Shadowveil StudioZ"
                    to="/reach-us"
                    className="flex flex-col items-center gap-2 text-[aliceblue] hover:text-[#E6E6FA] transition-colors duration-200"
                >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm font-medium">Contact Us</span>
                </Link>
            </div>
        </footer>
    );
}
