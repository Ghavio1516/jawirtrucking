// pages/tentang-kami.js
import Head from 'next/head';
import Navbar from "../../components/Navbar";
import Image from 'next/image'; 
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';

const TentangKami = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
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
            src="/KandangTruck1.jpg"
            alt="Descriptive text for screen readers"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="relative flex flex-col justify-center items-center h-screen z-10">
          <h1 className="text-5xl font-bold text-center mb-6" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            TENTANG KAMI
          </h1>
          <p className="text-4xl text-red-500 text-center px-10 md:px-20 lg:px-40" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Di JAWIR TRUCKING, kami berdedikasi untuk melayani masyarakat Jawa Timur dengan sistem digitalisasi yang inovatif. Sebagai perusahaan trucking yang bangga berasal dari Jawa Timur, kami hadir untuk menjembatani kebutuhan dan penawaran, menciptakan koneksi yang lebih baik antara pelanggan dan pengemudi. Terinspirasi oleh kemajuan di provinsi-provinsi terdepan di Indonesia, kami berkomitmen untuk membawa kemajuan yang sama ke Jawa Timur. Dengan semangat gotong royong dan dedikasi untuk kesejahteraan bersama, kami percaya bahwa dengan menghubungkan lebih banyak permintaan dan penawaran, kita dapat berkontribusi pada perekonomian Jawa Timur yang lebih baik dan lebih kuat. Bersama JAWIR TRUCKING, kita membangun masa depan yang lebih cerah untuk semua.
            <br/><br/> <br/>  #IndonesiaMaju #JawaTimurMaju #JawirManis😋
          </p>
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

export default TentangKami;
