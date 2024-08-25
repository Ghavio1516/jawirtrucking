'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center bg-blue-600 p-4 z-50 shadow-md">
      <div className="flex flex-col">
        <Link href="/" legacyBehavior>
          <a>
            <img
              src="/logo.png"
              alt="Jawir Trucking Logo"
              className="h-16 w-auto sm:h-20 md:h-15"
            />
          </a>
        </Link>
      </div>

      <ul className="hidden md:flex gap-6 m-0 p-0">
        <li className="text-white text-lg">
          <Link href="/" legacyBehavior>
            <a>Beranda</a>
          </Link>
        </li>
        <li className="text-white text-lg">
          <Link href="/mitra" legacyBehavior>
            <a>Mitra</a>
          </Link>
        </li>
        <li className="text-white text-lg">
          <Link href="/contact-us" legacyBehavior>
            <a>Kontak</a>
          </Link>
        </li>
        <li className="text-white text-lg">
          <Link href="/tentang-kami" legacyBehavior>
            <a>Tentang Kami</a>
          </Link>
        </li>
      </ul>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-600 text-white transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul className="flex flex-col mt-16">
          <li className="text-white text-lg p-4 border-b border-blue-500">
            <Link href="/" legacyBehavior>
              <a onClick={toggleMenu}>Beranda</a>
            </Link>
          </li>
          <li className="text-white text-lg p-4 border-b border-blue-500">
            <Link href="/mitra" legacyBehavior>
              <a onClick={toggleMenu}>Mitra</a>
            </Link>
          </li>
          <li className="text-white text-lg p-4 border-b border-blue-500">
            <Link href="/contact-us" legacyBehavior>
              <a onClick={toggleMenu}>Kontak</a>
            </Link>
          </li>
          <li className="text-white text-lg p-4 border-b border-blue-500">
            <Link href="/tentang-kami" legacyBehavior>
              <a onClick={toggleMenu}>Tentang Kami</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
