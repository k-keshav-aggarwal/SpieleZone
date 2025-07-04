import React from 'react';
import { Mail, MessageCircle, Gamepad2 } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-2xl mt-10">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h1>
            <p className="text-gray-600 mb-6">
                For the fastest response, please reach out via email using the contacts below.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">📧 Our Emails</h2>
            <ul className="mb-6 space-y-2 text-blue-600 underline">
                <li>
                    <a
                        href="mailto:it10800222125@gmail.com"
                        title="Reach Shadowveil Studioz via Email"
                        className="flex items-center gap-2"
                    >
                        <Mail className="w-4 h-4" />
                        Shadowveil StudioZ
                    </a>
                </li>
                <li>
                    <a
                        href="mailto:satvikgupta_it.aec@yahoo.com"
                        title="Reach Satvik Gupta via email"
                        className="flex items-center gap-2"
                    >
                        <Mail className="w-4 h-4" />
                        Satviky
                    </a>
                </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">💬 Discord</h2>
            <ul className="mb-6 text-blue-600 underline">
                <li>
                    <a
                        href="https://discord.com/users/1070314800615276555"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Talk to Shadowveil StudioZ"
                        className="flex items-center gap-2"
                    >
                        <MessageCircle className="w-4 h-4" />
                        Discord ID
                    </a>
                </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-2">🛠 Dev Note</h3>
            <p className="flex items-center gap-2 text-gray-600">
                <Gamepad2 className="w-5 h-5 text-purple-600" />
                We accept new game requests through emails and Discord.
            </p>
        </div>
    );
};

export default ContactUs;