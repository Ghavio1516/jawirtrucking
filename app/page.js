import Head from 'next/head';
import Navbar from "../components/Navbar";
import Image from 'next/image'; // Import Image from next/image

export default function Page() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
        <meta name="description" content="Halaman Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="relative flex-1">
        <div className="absolute inset-0 z-0">
          <Image
            src="/peta.png"
            alt="Descriptive text for screen readers"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="relative flex justify-center items-center h-screen z-10">
          <h1 className="text-4xl text-red-500 text-center" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Menyambung Jawa Timur <br /> Satu <br /> per Satu Rek!
          </h1>
        </div>
      </div>
      <div className="w-full p-5 bg-white">
        <h2 className="text-center font-bold mb-2">Armada Kami</h2>
        <div className="flex flex-wrap justify-around">
          <div className="flex flex-col items-center w-full sm:w-[calc(100%-20px)] md:w-[calc(50%-20px)] lg:w-[calc(33.3%-20px)] mb-5">
            <img src="/pickup.png" alt="Pickup" className="w-full h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">Pickup</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[calc(100%-20px)] md:w-[calc(50%-20px)] lg:w-[calc(33.3%-20px)] mb-5">
            <img src="/blindvan.jpg" alt="Blind Van" className="w-full h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">Blind Van</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[calc(100%-20px)] md:w-[calc(50%-20px)] lg:w-[calc(33.3%-20px)] mb-5">
            <img src="/pickup.png" alt="Pickup" className="w-full h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">Pickup</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[calc(100%-20px)] md:w-[calc(50%-20px)] lg:w-[calc(33.3%-20px)] mb-5">
            <img src="/pickup.png" alt="Pickup" className="w-full h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">Pickup</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[calc(100%-20px)] md:w-[calc(50%-20px)] lg:w-[calc(33.3%-20px)] mb-5">
            <img src="/pickup.png" alt="Pickup" className="w-full h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">Pickup</p>
          </div>
          <div className="flex flex-col items-center w-full sm:w-[calc(100%-20px)] md:w-[calc(50%-20px)] lg:w-[calc(33.3%-20px)] mb-5">
            <img src="/pickup.png" alt="Pickup" className="w-full h-auto object-cover mb-2" />
            <p className="text-center font-bold mb-2">Pickup</p>
          </div>
        </div>
      </div>
    </div>
  );
}
