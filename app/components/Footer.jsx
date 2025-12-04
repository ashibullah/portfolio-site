'use client'

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

                {/* About */}
                <div>
                    <h2 className="text-2xl font-bold mb-2">Ashib Ullah</h2>
                    <p className="text-gray-400">
                        I am a passionate developer creating modern, responsive web experiences.
                    </p>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Follow Me</h3>
                    <div className="flex gap-4 text-gray-400 text-lg">
                        <a href="https://facebook.com/ashibullahbhai" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com/ashibullah" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                            <FaTwitter />
                        </a>
                        <a href="https://linkedin.com/in/ashibullah" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://github.com/ashibullah" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                            <FaGithub />
                        </a>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Contact</h3>
                    <div className="flex flex-col gap-2 text-gray-400">
                        <a href="mailto:ashibullah.dev@gmail.com" className="flex items-center gap-2 hover:text-red-600">
                            <FiMail /> ashibullah.dev@gmail.com
                        </a>
                        <a href="tel:+8801867443860" className="flex items-center gap-2 hover:text-red-600">
                            <FiPhone /> +880 1867 443 860
                        </a>
                    </div>
                </div>

            </div>

            <div className="mt-10 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} Ashib Ullah. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
