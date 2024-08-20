'use client';
import Head from 'next/head';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Mitra = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items = [
    { 
      src: "/ketentuanarmada.png", 
      alt: "Truck", 
      description: (
        <div>
          <p className="list-disc pl-5 text-left">kami mencari calon mitra yang memiliki armada truk dan kapabilitas untuk menyupiri armada tersebut. Berikut berbagai jenis kendaraan yang kami anggap cocok untuk bergabung dengan Jawir Trucking:</p>
          <ul className="list-disc pl-5 text-left">
            <li>Pickup</li>
            <li>Blind Van</li>
            <li>CDE Open / Box</li>
            <li>CDD Open / Box</li>
          </ul>
        </div>
      ) 
    },
    { 
      src: "/peta.png", 
      alt: "Peta", 
      description: (
        <p className="text-left">
          Kami mencari calon mitra yang berdomisili di Jawa Timur, sehingga dapat beroperasi dengan efisien dan mendukung jaringan logistik lokal kami.
        </p>
      ) 
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? items.length - 1 : prevIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === items.length - 1 ? 0 : prevIndex + 1);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative flex flex-col min-h-screen text-black">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mitra</title>
        <meta name="description" content="Halaman Mitra" />
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
      <div className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <div className="background-image-1"></div>
        </div>
        <div className="relative flex flex-col justify-center items-center h-screen z-10 px-4">
          <h1 
            className="text-4xl md:text-6xl text-white text-center" 
            style={{ 
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
              fontFamily: 'Oswald, sans-serif' 
            }}
          >
            Ingin Bergabung Menjadi Mitra <br /> Jawir Trucking?
          </h1>
          <p className="text-lg text-white mt-4 max-w-2xl text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
            Bergabung dengan Jawir Trucking dan jadilah pelopor dalam solusi logistik modern dengan solusi pengiriman yang lebih efisien dan terintegrasi di seluruh Jawa Timur.
          </p>
          <button 
            onClick={() => scrollToSection('ketentuan-mitra')} 
            className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-blue-600"
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>


      <div id="ketentuan-mitra" className="w-full flex justify-center items-center flex-col bg-white py-12">
  <div className="w-full max-w-7xl mx-auto px-4"> {/* Added px-4 for padding */}
    <h2 className="text-left font-bold text-4xl mb-4 font-oswald">
      Ketentuan Bermitra
    </h2>
    <p className="text-left text-lg mb-8 font-roboto">
      Untuk memenuhi beragam kebutuhan logistik pelanggan kami, ketahui ketentuan bermitra berikut.
    </p>
    <div className="relative w-full">
      <div className="relative flex overflow-hidden w-full">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute w-full'}`}
          >
            <div className="bg-white p-5 rounded-lg shadow-lg flex items-center w-full">
              <Image src={item.src} alt={item.alt} width={windowWidth < 640 ? 150 : 400} height={windowWidth < 640 ? 150 : 300} className="object-contain w-2/5" />
              <div className="ml-4 w-3/5 font-roboto">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handlePrevClick} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-300 rounded-full shadow-lg">
        &lt;
      </button>
      <button onClick={handleNextClick} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-3 bg-gray-300 rounded-full shadow-lg">
        &gt;
      </button>
    </div>
  </div>
</div>


      <div className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <div className="background-image-2"></div>
        </div>
        <div className="relative flex justify-center items-center h-screen z-10 px-4">
          <div className="text-center">
            <h1 
              className="text-4xl font-oswald font-bold text-white mb-6" 
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
            >
              Anda Adalah Mitra yang Kami Cari!!
            </h1>
            <p className="text-lg font-roboto text-white mb-8">
              Bergabunglah dengan Jawir Trucking dan menjadi bagian dari revolusi logistik di Jawa Timur. <br/> Kami mencari mitra dengan komitmen dan visi yang sama untuk memperluas jaringan transportasi yang efisien dan handal. 
              <br/><br/> Hubungi kami melalui E-mail atau kontak Departemen HR kami untuk informasi lebih lanjut :
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="mailto:hr@jawirtrucking.id" 
                className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-blue-600 flex items-center gap-2"
              >
                <img src="/mail.png" alt="Email Icon" className="w-6 h-6" />
                Hubungi Kami
              </a>
              <a 
                href="https://wa.me/6285183005400" 
                className="bg-green-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-green-600 flex items-center gap-2"
              >
                <img src="/whatsapp.png" alt="WhatsApp Icon" className="w-6 h-6" />
                Hubungi Kami
              </a>
            </div>

          </div>
        </div>
      </div>



      <Footer />

      <style jsx>{`
        .background-image-1 {
          position: absolute;
          inset: 0;
          z-index: -1;
          background-image: url('/KandangTruck2.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          opacity: 0.45;
          animation: slideBackground1 20s linear infinite alternate;
        }

        .background-image-2 {
          position: absolute;
          inset: 0;
          z-index: -1;
          background-image: url('/KandangTruck4.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          opacity: 0.45;
          animation: slideBackground2 20s linear infinite alternate;
        }

        @keyframes slideBackground1 {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 0;
          }
        }

        @keyframes slideBackground2 {
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

export default Mitra;
