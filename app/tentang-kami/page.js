// pages/tentang-kami.js
import Head from 'next/head';
import Navbar from "../../components/Navbar";
const TentangKami = () => {
  return (
    <div>
      <Navbar />
      <Head>
        <title>Tentang Kami</title>
        <meta name="description" content="Halaman Tentang Kami" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={styles.main}>
        <h1 style={styles.title}>Tentang Kami</h1>
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

export default TentangKami;
