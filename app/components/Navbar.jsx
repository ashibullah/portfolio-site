"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "backdrop-blur-md bg-white/10 shadow-md"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link href={'/'}  className="text-2xl font-bold ">
                    Ashib<span className="text-red-600">Ullah</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-md font-light">
                    <li><Link href="/" className="hover:text-red-600">Home</Link></li>
                    <li><Link href="#about" className="hover:text-red-600">About</Link></li>
                    <li><Link href="#projects" className="hover:text-red-600">Projects</Link></li>
                    <li><Link href="#contact" className="hover:text-red-600">Contact</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-3xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="md:hidden flex flex-col bg-white/80 backdrop-blur-lg shadow-md px-6 py-4 gap-4 text-lg font-medium">
                    <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
                    <li><Link href="#about" onClick={() => setOpen(false)}>About</Link></li>
                    <li><Link href="#projects" onClick={() => setOpen(false)}>Projects</Link></li>
                    <li><Link href="#contact" onClick={() => setOpen(false)}>Contact</Link></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
