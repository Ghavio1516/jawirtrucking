'use client';
import Head from 'next/head';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap"
        />
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        />
      </Head>
      <Navbar />
      <div className="relative flex-1 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="background-image">
            <div className="overlay"></div>
          </div>
        </div> 
        {/* h-full */}
        <div className="relative flex flex-col justify-center items-center h-screen min-h-[70vh] z-10 px-5 md:px-10 py-10 md:py-20">      
          <h1 className="text-2xl sm:text-4xl font-oswald font-bold text-white text-center mb-4 sm:mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            TENTANG KAMI
          </h1>
          <p className="text-base sm:text-lg lg:text-xl font-roboto font-bold text-white text-center leading-relaxed" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Di JAWIR TRUCKING, kami berdedikasi untuk melayani masyarakat Jawa Timur dengan sistem digitalisasi yang inovatif. Sebagai perusahaan trucking yang bangga berasal dari Jawa Timur, kami hadir untuk menjembatani kebutuhan dan penawaran, menciptakan koneksi yang lebih baik antara pelanggan dan pengemudi. Terinspirasi oleh kemajuan di provinsi-provinsi terdepan di Indonesia, kami berkomitmen untuk membawa kemajuan yang sama ke Jawa Timur. Dengan semangat gotong royong dan dedikasi untuk kesejahteraan bersama, kami percaya bahwa dengan menghubungkan lebih banyak permintaan dan penawaran, kita dapat berkontribusi pada perekonomian Jawa Timur yang lebih baik dan lebih kuat. <br/><br/> Bersama JAWIR TRUCKING, kita membangun masa depan yang lebih cerah untuk semua.
            <br/><br/> #IndonesiaMaju #JawaTimurMaju #JawirManis😋
          </p>
        </div>
      </div>
      <Footer />

      <style jsx>{`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5); /* Ubah nilai alpha untuk mengatur transparansi */
        }
        .background-image {
          position: absolute;
          inset: 0;
          z-index: -1; /* Mengatur lapisan di belakang elemen utama */
          background-image: url('/peta.png');
          background-size: cover;
          background-repeat: no-repeat;
          opacity: 1.0;
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
