import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="flex flex-col items-center mb-4 w-full md:w-1/3 md:border-r md:border-white md:pr-4">
            <Link href="/#armada-kami" className="mb-2 hover:underline text-center text-xl">
              Armada
            </Link>
            <Link href="/tentang-kami" className="mb-2 hover:underline text-center text-xl">
              Tentang Kami
            </Link>
          </div>
          <div className="flex flex-col items-center mb-4 w-full md:w-1/3 px-4">
            <Image src="/logo.png" alt="Jawir Trucking Logo" width={200} height={200} />
          </div>
          <div className="flex flex-col items-center mb-4 w-full md:w-1/3 md:border-l md:border-white md:pl-4">
            <p className="mb-2 text-xl">Ingin Menjadi Mitra?</p>
            <Link href="/contact-us" className="hover:underline text-center text-xl">
              Kontak
            </Link>
            <p className="mt-4 text-center text-lg">
              PT JAWA TIMUR TRUCKING <br />
              NIB : 2808240078292
            </p>
          </div>
        </div>
        <div className="border-t border-white mt-8"></div>
        <div className="flex flex-wrap justify-center mt-4 space-x-4">
          <a href="https://www.instagram.com/jawir.trucking/" className="flex items-center space-x-2 hover:underline text-xl">
            <AiOutlineInstagram className="text-2xl" />
            <span className="hidden md:inline">jawir.trucking</span>
          </a>
          <a href="https://wa.me/6285183005400" className="flex items-center space-x-2 hover:underline text-xl">
            <AiOutlineWhatsApp className="text-2xl" />
            <span className="hidden md:inline">(+62)851-8300-5400</span>
          </a>
          <a href="https://www.facebook.com/people/Jawir-Trucking/61561186393034/" className="flex items-center space-x-2 hover:underline text-xl">
            <AiOutlineFacebook className="text-2xl" />
            <span className="hidden md:inline">Jawir Trucking</span>
          </a>
          <a href="https://www.linkedin.com/company/jawa-timur-trucking" className="flex items-center space-x-2 hover:underline text-xl">
            <AiOutlineLinkedin className="text-2xl" />
            <span className="hidden md:inline">PT Jawa Timur Trucking</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
