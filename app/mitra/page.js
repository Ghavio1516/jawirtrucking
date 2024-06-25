// pages/mitra.js
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
          <Image
            src="/KandangTruck2.jpg"
            alt="Descriptive text for screen readers"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="relative flex justify-center items-center h-screen z-10">
          <h1 className="text-4xl text-red-500 text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Ingin Bergabung Menjadi Mitra Jawir Trucking?
          </h1>
        </div>
      </div>
      <div className="w-full p-5 bg-white">
        <h2 className="text-center font-bold mb-2 text-3xl">Apakah anda mempunyai salah satu dari armada ini?</h2>
        <div className="flex overflow-x-auto justify-around flex-nowrap">
          <div className="flex flex-col items-center w-64 mb-5">
            <img src="/Pickup.png" alt="Pickup" className="w-3/4 h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">Pickup</p>
          </div>
          <div className="flex flex-col items-center w-64 mb-5">
            <img src="/Blindvan.png" alt="Blind Van" className="w-3/4 h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">Blind Van</p>
          </div>
          <div className="flex flex-col items-center w-64 mb-5">
            <img src="/CDEBox.png" alt="CDE Box" className="w-3/4 h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">CDE Box</p>
          </div>
          <div className="flex flex-col items-center w-64 mb-5">
            <img src="/CDEOpen.png" alt="CDE Open" className="w-3/4 h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">CDE Open</p>
          </div>
          <div className="flex flex-col items-center w-64 mb-5">
            <img src="/CDDBox.png" alt="CDD Box" className="w-3/4 h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">CDD Box</p>
          </div>
          <div className="flex flex-col items-center w-64 mb-5">
            <img src="/CDDOpen.png" alt="CDD Open" className="w-3/4 h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">CDD Open</p>
          </div>
        </div>
      </div>
      <div className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <Image
            src="/KandangTruck4.jpg"
            alt="Descriptive text for screen readers"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="relative flex justify-center items-center h-screen z-10">
          <h1 className="text-4xl text-red-500 text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Berdomisili di Jawa Timur?
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center bg-gray-100 p-10">
        <a href="mailto:info@jawirtrucking.com" className="flex flex-col items-center bg-white shadow-md p-5 m-5 w-80 rounded">
          <AiOutlineMail className="text-4xl mb-3 text-blue-500" />
          <h2 className="text-xl font-bold mb-3">Email Kami</h2>
          <p>info@jawirtrucking.com</p>
        </a>
        <a href="https://wa.me/6281234567890" className="flex flex-col items-center bg-white shadow-md p-5 m-5 w-80 rounded">
          <AiOutlineWhatsApp className="text-4xl mb-3 text-green-500" />
          <h2 className="text-xl font-bold mb-3">WhatsApp Kami</h2>
          <p>+62 812-3456-7890</p>
        </a>
      </div>
    </div>
  );
};

export default Mitra;
