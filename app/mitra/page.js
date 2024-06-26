'use client';
import Head from 'next/head';
import Navbar from "../../components/Navbar";
import Image from 'next/image';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';

const Mitra = () => {
  return (
    <div className="relative flex flex-col min-h-screen text-black">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mitra</title>
        <meta name="description" content="Halaman Mitra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <div className="background-image-1"></div>
        </div>
        <div className="relative flex justify-center items-center h-screen z-10 px-4">
          <h1 className="text-2xl sm:text-4xl text-red-500 text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Ingin Bergabung Menjadi Mitra Jawir Trucking?
          </h1>
        </div>
      </div>
      <div className="w-full p-5 bg-white">
        <h2 className="text-center font-bold mb-2 text-xl sm:text-3xl">Apakah anda mempunyai salah satu dari armada ini?</h2>
        <div className="flex flex-col sm:flex-row overflow-x-auto justify-around flex-wrap">
          <div className="flex flex-col items-center w-full sm:w-64 mb-5">
            <img src="/Pickup.png" alt="Pickup" className="w-3/4 h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">Pickup</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-64 mb-5">
            <img src="/Blindvan.png" alt="Blind Van" className="w-3/4 h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">Blind Van</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-64 mb-5">
            <img src="/CDEBox.png" alt="CDE Box" className="w-3/4 h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">CDE Box</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-64 mb-5">
            <img src="/CDEOpen.png" alt="CDE Open" className="w-3/4 h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">CDE Open</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-64 mb-5">
            <img src="/CDDBox.png" alt="CDD Box" className="w-3/4 h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">CDD Box</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-64 mb-5">
            <img src="/CDDOpen.png" alt="CDD Open" className="w-3/4 h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">CDD Open</p>
          </div>
        </div>
      </div>
      <div className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <div className="background-image-2"></div>
        </div>
        <div className="relative flex justify-center items-center h-screen z-10 px-4">
          <h1 className="text-2xl sm:text-4xl text-red-500 text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Berdomisili di Jawa Timur?
          </h1>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center bg-gray-100 p-5 sm:p-10">
        <a href="mailto:info@jawirtrucking.com" className="flex flex-col items-center bg-white shadow-md p-5 m-3 sm:m-5 w-64 sm:w-80 rounded">
          <AiOutlineMail className="text-4xl mb-3 text-blue-500" />
          <h2 className="text-lg sm:text-xl font-bold mb-3">Email Kami</h2>
          <p>info@jawirtrucking.com</p>
        </a>
        <a href="https://wa.me/6281234567890" className="flex flex-col items-center bg-white shadow-md p-5 m-3 sm:m-5 w-64 sm:w-80 rounded">
          <AiOutlineWhatsApp className="text-4xl mb-3 text-green-500" />
          <h2 className="text-lg sm:text-xl font-bold mb-3">WhatsApp Kami</h2>
          <p>+62 812-3456-7890</p>
        </a>
      </div>

      <style jsx>{`
        .background-image-1 {
          position: absolute;
          inset: 0;
          z-index: -1;
          background-image: url('/KandangTruck2.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          opacity: 0.5;
          animation: slideBackground1 20s linear infinite alternate;
        }

        .background-image-2 {
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
      `}</style>
    </div>
  );
};

export default Mitra;
