'use client';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen text-black font-roboto">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-bold font-oswald text-gray-800 mb-6">
            Anda Adalah Mitra yang Kami Cari!!
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 font-roboto">
            Bergabunglah dengan Jawir Trucking dan menjadi bagian dari revolusi logistik di Jawa Timur. Kami mencari mitra dengan komitmen dan visi yang sama untuk memperluas jaringan transportasi yang efisien dan handal.
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-10 font-roboto">
            Hubungi kami melalui E-mail atau kontak Departemen HR kami untuk informasi lebih lanjut:
            </p>
            <div className="flex justify-center gap-4">
  <button 
    onClick={() => window.location.href = 'mailto:hr@jawirtrucking.id'} 
    className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-blue-600 flex items-center gap-2"
  >
    <img src="/mail.png" alt="Email Icon" className="w-6 h-6" />
    Hubungi Kami
  </button>
  <button 
    onClick={() => window.location.href = 'https://wa.me/6285183005400'} 
    className="bg-green-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-green-600 flex items-center gap-2"
  >
    <img src="/whatsapp.png" alt="WhatsApp Icon" className="w-6 h-6" />
    Hubungi Kami
  </button>
</div>

        </div>
        </div>
        <Footer />
    </div>
  );
}
