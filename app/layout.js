import { GeistSans } from 'geist/font/sans'; // or mono

import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Ashib Ullah | Portfolio",
  description: "Portfolio website of Ashib Ullah",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ fontFamily: GeistSans }}>
        <Navbar />
        {children}  
        <Footer />
      </body>
    </html>
  );
}
