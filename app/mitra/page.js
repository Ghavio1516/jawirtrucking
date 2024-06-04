// pages/mitra.js
import Head from 'next/head';
import Navbar from "../../components/Navbar";
const Mitra = () => {
  return (
    <div>
      <Navbar />
      <Head>
        <title>Mitra</title>
        <meta name="description" content="Halaman Mitra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={styles.main}>
        <h1 style={styles.title}>Halaman Mitra</h1>
      </main>
    </div>
  );
};

const styles = {
  main: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: '4rem',
    color: '#333',
  },
};

export default Mitra;
