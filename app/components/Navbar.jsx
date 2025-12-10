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
                    ? ""
                    : ""
            }`}
        >
            <div className="mt-5 px-5">
                <div className="max-w-5xl bg-red-950/15 backdrop-blur-xs rounded-xl mx-auto px-6 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href={'/'}  className="text-xl font-[550] ">
                    Ashib<span className="text-red-600">Ullah</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-md font-light">
                    <li><Link href="#home" className="hover:text-red-600">Home</Link></li>
                    <li><Link href="#about" className="hover:text-red-600">About</Link></li>
                    <li><Link href="#projects" className="hover:text-red-600">Projects</Link></li>
                    <li><Link href="#contact" className="hover:text-red-600">Contact</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <ul className="md:hidden flex flex-col items-center bg-black/80 backdrop-blur-lg shadow-md px-6 py-4 gap-2 text-sm ">
                    <li><Link className="hover:text-red-600" href="#home" onClick={() => setOpen(false)}>Home</Link></li>
                    <li><Link className="hover:text-red-600" href="#about" onClick={() => setOpen(false)}>About</Link></li>
                    <li><Link className="hover:text-red-600" href="#projects" onClick={() => setOpen(false)}>Projects</Link></li>
                    <li><Link className="hover:text-red-600" href="#contact" onClick={() => setOpen(false)}>Contact</Link></li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
