'use client';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen text-black font-roboto">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold font-oswald text-gray-800 mb-4">
            Kontak Kami
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-6 font-roboto">
            Jawir Trucking adalah pilihan terbaik untuk kebutuhan logistik Anda di Jawa Timur. <br/><br/> Hubungi kami sekarang untuk informasi lebih lanjut!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-16 mb-10">
          <div className="text-center">
            <img src="/mail.png" alt="Email Logo" className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-4">E-mail</h3>
            <div className="flex flex-col items-center">
              <button 
                onClick={() => window.location.href = 'mailto:hr@jawirtrucking.id'} 
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-blue-700 flex items-center gap-2 mb-4"
              >
                <AiOutlineMail className="w-6 h-6" />
                Departemen HR
              </button>
              <button 
                onClick={() => window.location.href = 'mailto:info@jawirtrucking.id'} 
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-blue-700 flex items-center gap-2"
              >
                <AiOutlineMail className="w-6 h-6" />
                Informasi & Pemesanan
              </button>
            </div>
          </div>

          <div className="text-center">
            <img src="/whatsapp.png" alt="WhatsApp Logo" className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-4">WhatsApp</h3>
            <div className="flex flex-col items-center">
              <button 
                onClick={() => window.location.href = 'https://wa.me/6285183005400'} 
                className="bg-green-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-green-600 flex items-center gap-2 mb-4"
              >
                <AiOutlineWhatsApp className="w-6 h-6" />
                Departemen HR
              </button>
              <button 
                onClick={() => window.location.href = 'https://wa.me/6285183005400'} 
                className="bg-green-500 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-green-600 flex items-center gap-2"
              >
                <AiOutlineWhatsApp className="w-6 h-6" />
                Informasi & Pemesanan
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
