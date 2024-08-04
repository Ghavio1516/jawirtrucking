// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineFacebook } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-col items-center mb-4 w-full md:w-auto">
            <Link href="/#armada-kami" className="mb-2 hover:underline text-center">
              Armada
            </Link>
            <Link href="tentang-kami" className="mb-2 hover:underline text-center">
              Tentang Kami
            </Link>
          </div>
          <div className="flex flex-col items-center mb-4 w-full md:w-auto">
            <Image src="/logo.png" alt="Jawir Trucking Logo" width={200} height={200} />
          </div>
          <div className="flex flex-col items-center mb-4 w-full md:w-auto">
            <p className="mb-2">Ingin Menjadi Mitra?</p>
            <Link href="/mitra" className="hover:underline text-center">
              Kontak
            </Link>
          </div>
        </div>
        <div className="border-t border-white mt-8"></div>
        <div className="flex flex-wrap justify-center mt-4 space-x-4">
          <a href="https://www.instagram.com/jawir.trucking/" className="flex items-center space-x-2 hover:underline">
            <AiOutlineInstagram className="text-2xl" />
            <span className="hidden md:inline">jawir.trucking</span>
          </a>
          <a href="https://wa.me/6285183005400" className="flex items-center space-x-2 hover:underline">
            <AiOutlineWhatsApp className="text-2xl" />
            <span className="hidden md:inline">0851-8300-5400</span>
          </a>
          <a href="https://www.facebook.com/people/Jawir-Trucking/61561186393034/" className="flex items-center space-x-2 hover:underline">
            <AiOutlineFacebook className="text-2xl" />
            <span className="hidden md:inline">Jawir Trucking</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
