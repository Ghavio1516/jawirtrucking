'use client';
import Head from 'next/head';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState(null); // State for expanded box

  useEffect(() => {
    // Set window width on client-side
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Initial width
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const items = [
    { src: "/Pickup.png", alt: "Pickup", text: "Pickup", weight: "Beban Maksimum : 1 ton", price: "Surabaya - Malang : Rp. 740.000" },
    { src: "/Blindvan.png", alt: "Blind Van", text: "Blind Van", weight: "Beban Maksimum : 1 ton", price: "Madiun - Mojokerto : Rp. 890.400" },
    { src: "/CDEOpen.png", alt: "CDE Open", text: "CDE Open", weight: "Beban Maksimum : 2 ton", price: "Blitar - Jember : Rp. 2.145.600" },
    { src: "/CDEBox.png", alt: "CDE Box", text: "CDE Box", weight: "Beban Maksimum : 2 ton", price: "Tuban - Lumajang : Rp. 2.487.500" },
    { src: "/CDDOpen.png", alt: "CDD Open", text: "CDD Open", weight: "Beban Maksimum : 4 ton", price: "Banyuwangi - Probolinggo : Rp. 2.307.200" },
    { src: "/CDDBox.png", alt: "CDD Box", text: "CDD Box", weight: "Beban Maksimum : 4 ton", price: "Surabaya - Madiun : Rp. 2.136.500" }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - (windowWidth < 640 ? 1 : 3) : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - (windowWidth < 640 ? 1 : 3) ? 0 : prevIndex + 1
    );
  };

  const handleBoxClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle the clicked box
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative flex flex-col min-h-screen text-black font-roboto">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Jawir Trucking</title>
        <meta name="description" content="Jawir Trucking" />
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
        <div className="relative flex flex-col justify-center items-center h-screen z-10">
          <h1 
            className="text-4xl md:text-6xl text-white text-center" 
            style={{ 
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
              fontFamily: 'Oswald, sans-serif' 
            }}
          >
            Satu per Satu Menyambung Jawa Timur <br /> Dengan Jawir Trucking.
          </h1>
          <button 
            onClick={() => scrollToSection('layanan')} 
            className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg shadow-lg hover:bg-blue-600"
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
      <div id="layanan" className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <div className="background-image-3"></div>
        </div>
        <div className="relative flex flex-col justify-center items-start h-screen z-10 p-10">
          <h1 className="text-4xl md:text-6xl text-white mb-5 font-oswald" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Layanan Jawir Trucking
          </h1>
          <p className="text-white mb-8 max-w-lg font-roboto">

            Selamat datang di Jawir Trucking!<br /><br />
            Kami percaya layanan truk berkualitas berhak diakses oleh semua orang. Baik anda individu dengan kebutuhan logistik pribadi, maupun perusahaan yang memerlukan solusi logistik skala menengah hingga besar. <br /><br />
            Selain memastikan layanan digital yang lancar untuk semua. Nama kami mencerminkan komitmen mendalam untuk menghubungkan tidak hanya kota-kota besar, tetapi hingga tingkat kabupaten dan kecamatan. Menjembatani cakupan komprehensif di seluruh wilayah Jawa Timur.
          </p>
          <button 
            onClick={() => scrollToSection('armada-kami')} 
            className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg shadow-lg hover:bg-blue-600"
          >
            Armada Kami
          </button>
        </div>
      </div>

      <div id="armada-kami" className="w-full flex justify-center items-center flex-col bg-white py-12">
        <h2 className="text-center font-bold text-4xl mb-4 font-oswald">Armada Kami</h2>
        <p className="text-center text-lg mb-8 max-w-2xl font-roboto">
          Jawir Trucking menawarkan berbagai jenis armada untuk memenuhi semua kebutuhan pengiriman Anda. 
          Dari kendaraan kecil untuk pengiriman cepat hingga truk besar untuk pengangkutan barang berat, 
          kami memiliki solusi yang tepat untuk individu maupun perusahaan di seluruh Jawa Timur.
        </p>
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out transform"
            style={{ 
              transform: `translateX(-${currentIndex * 100 / (windowWidth < 640 ? 1 : 3)}%)` 
            }}
          >
            {items.map((item, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 flex-grow-0 ${windowWidth < 640 ? 'w-full' : 'w-1/3'} px-2 transition-transform transform ${expandedIndex === index ? 'scale-110' : 'scale-100'} cursor-pointer`}
                onClick={() => handleBoxClick(index)}
              >
                <div className="bg-white p-5 rounded-lg shadow-lg flex flex-col items-center transition-all duration-300">
                  <img src={item.src} alt={item.alt} className="w-full h-48 object-contain mb-4" />
                  <p className="text-center font-bold text-lg font-roboto">{item.text}</p>
                  <p className="text-center text-sm font-roboto text-gray-600">{item.weight}</p>
                  {expandedIndex === index && (
                    <p className="text-center text-sm font-roboto text-gray-800 mt-2">{item.price}</p>
                  )}
                  {expandedIndex !== index && (
                    <p className="text-center text-xs font-roboto text-gray-500 mt-2">Klik untuk menampilkan contoh quote harga</p>
                  )}
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
      <div className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <div className="background-image-2"></div>
        </div>
        <div className="relative flex flex-col justify-center items-center h-screen z-10">
          <h1 className="text-4xl md:text-6xl text-red-500 text-center mb-5 font-oswald" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Ingin Menjadi Mitra Jawir Trucking?
          </h1>
          <Link href="/mitra" legacyBehavior>
            <a className="bg-blue-500 text-white px-5 py-3 rounded-lg text-lg shadow-lg hover:bg-blue-600 font-roboto">
              Pelajari Kemitraan
            </a>
          </Link>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .background-image-1 {
          position: absolute;
          inset: 0;
          z-index: -1;
          background-image: url('/peta.png');
          background-size: cover;
          background-repeat: no-repeat;
          opacity: 0.5;
          animation: slideBackground1 20s linear infinite alternate;
        }

        .background-image-2 {
          position: absolute;
          inset: 0;
          z-index: -1;
          background-image: url('/KandangTruck3.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          opacity: 0.5;
          animation: slideBackground2 20s linear infinite alternate;
        }

        .background-image-3 {
          position: absolute;
          inset: 0;
          z-index: -1;
          background-image: url('/KandangTruck4.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          opacity: 0.5;
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

        .carousel-item {
          transition: transform 0.5s ease-in-out;
        }

        .carousel-item:hover {
          transform: scale(1.05);
        }

        .font-oswald {
          font-family: 'Oswald', sans-serif;
        }
      `}</style>
    </div>
  );
}
