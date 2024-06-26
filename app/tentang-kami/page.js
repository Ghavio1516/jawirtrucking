'use client';
import Head from 'next/head';
import Navbar from "../../components/Navbar";
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { useEffect } from 'react';

const TentangKami = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = window.matchMedia('(max-width: 768px)').matches;
      const imageElement = document.querySelector('.background-image');

      if (isMobile && imageElement) {
        imageElement.classList.add('animate-background');
      }
    }
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen text-black">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tentang Kami</title>
        <meta name="description" content="Halaman Tentang Kami" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="relative flex-1 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="background-image"></div>
        </div>
        <div className="relative flex flex-col justify-center items-center h-full min-h-[70vh] z-10 px-5 md:px-10 py-10 md:py-20">
          <h1 className="text-2xl sm:text-4xl font-bold text-white text-center mb-4 sm:mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            TENTANG KAMI
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-red-500 text-center leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Di JAWIR TRUCKING, kami berdedikasi untuk melayani masyarakat Jawa Timur dengan sistem digitalisasi yang inovatif. Sebagai perusahaan trucking yang bangga berasal dari Jawa Timur, kami hadir untuk menjembatani kebutuhan dan penawaran, menciptakan koneksi yang lebih baik antara pelanggan dan pengemudi. Terinspirasi oleh kemajuan di provinsi-provinsi terdepan di Indonesia, kami berkomitmen untuk membawa kemajuan yang sama ke Jawa Timur. Dengan semangat gotong royong dan dedikasi untuk kesejahteraan bersama, kami percaya bahwa dengan menghubungkan lebih banyak permintaan dan penawaran, kita dapat berkontribusi pada perekonomian Jawa Timur yang lebih baik dan lebih kuat. Bersama JAWIR TRUCKING, kita membangun masa depan yang lebih cerah untuk semua.
            <br/><br/> #IndonesiaMaju #JawaTimurMaju #JawirManis😋
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center bg-gray-100 p-5 md:p-10">
        <a href="mailto:info@jawirtrucking.com" className="flex flex-col items-center bg-white shadow-md p-5 m-2 md:m-5 w-full md:w-80 rounded">
          <AiOutlineMail className="text-4xl mb-3 text-blue-500" />
          <h2 className="text-lg sm:text-xl font-bold mb-3">Email Kami</h2>
          <p className="text-center">info@jawirtrucking.com</p>
        </a>
        <a href="https://wa.me/6281234567890" className="flex flex-col items-center bg-white shadow-md p-5 m-2 md:m-5 w-full md:w-80 rounded">
          <AiOutlineWhatsApp className="text-4xl mb-3 text-green-500" />
          <h2 className="text-lg sm:text-xl font-bold mb-3">WhatsApp Kami</h2>
          <p className="text-center">+62 812-3456-7890</p>
        </a>
      </div>

      <style jsx>{`
        .background-image {
          position: absolute;
          inset: 0;
          z-index: -1; /* Mengatur lapisan di belakang elemen utama */
          background-image: url('/KandangTruck1.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          opacity: 0.5;
          animation: slideBackground 20s linear infinite alternate;
        }

        @keyframes slideBackground {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default TentangKami;
