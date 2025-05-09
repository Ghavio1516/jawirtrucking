'use client';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen text-black font-roboto">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen relative pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 background-image">
          <div className="overlay"></div>
        </div>
        
        {/* Kontak Kami Content */}
        <div className="relative z-10 text-center mb-10 px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-oswald text-white mb-4">
            Kontak Kami
          </h1>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto mb-6 font-roboto">
            Jawir Trucking adalah pilihan terbaik untuk kebutuhan logistik Anda di Jawa Timur. <br/><br/> Hubungi kami sekarang untuk informasi lebih lanjut!
          </p>
        </div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-center gap-16 mb-10">
          <div className="text-center">
            <div className="icon-background-mail mb-4">
              <img src="/mail.png" alt="Email Logo" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">E-mail</h3>
            <div className="flex flex-col items-center">
              <button 
                onClick={() => window.location.href = 'mailto:hr@jawirtrucking.id'} 
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-blue-700 flex items-center gap-2 mb-4"
              >
                <AiOutlineMail className="w-6 h-6" />
                Departemen HR
              </button>
              <button 
                onClick={() => window.location.href = 'mailto:operational@jawirtrucking.id'} 
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:bg-blue-700 flex items-center gap-2"
              >
                <AiOutlineMail className="w-6 h-6" />
                Informasi & Pemesanan
              </button>
            </div>
          </div>

          <div className="text-center">
            <div className="icon-background-wa mb-4">
              <img src="/whatsapp.png" alt="WhatsApp Logo" className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">WhatsApp</h3>
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

      {/* Styling for background image, icon background, and text */}
      <style jsx>{`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
        }
          
        .background-image {
          position: absolute; /* Keep this as absolute */
          inset: 0;
          z-index: -1;
          background-image: url('/bgkontak.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-color: rgba(0, 0, 0, 0.55);
          background-blend-mode: overlay;
          opacity: 1.0;
        }

        .icon-background-wa {
          background-color: rgba(0, 255, 0, 0.55);
          border-radius: 50%;
          padding: 15px;
          display: inline-block;
        }

        .icon-background-mail {
          background-color: rgba(0, 0, 255, 0.75);
          border-radius: 50%;
          padding: 15px;  
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
