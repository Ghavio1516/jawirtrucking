'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-blue-600 p-4">
      <div className="flex flex-col">
        <Link href="/" legacyBehavior>
          <a className="text-white text-xl font-bold">Jawir Trucking</a>
        </Link>
        <p className="text-gray-300 text-sm">Jawa Timur Trucking</p>
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
      {menuOpen && (
        <ul className="md:hidden flex flex-col absolute top-16 right-0 bg-blue-600 w-full">
          <li className="text-white text-lg p-4">
            <Link href="/" legacyBehavior>
              <a onClick={toggleMenu}>Beranda</a>
            </Link>
          </li>
          <li className="text-white text-lg p-4">
            <Link href="/mitra" legacyBehavior>
              <a onClick={toggleMenu}>Mitra</a>
            </Link>
          </li>
          <li className="text-white text-lg p-4">
            <Link href="/tentang-kami" legacyBehavior>
              <a onClick={toggleMenu}>Tentang Kami</a>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
