import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Navbar from "../components/Navbar";

export default function Page() {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
        <meta name="description" content="Halaman Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.mainContent}>
        <div className={styles.backgroundContainer}>
          <main className={styles.main}>
            <h1 className={styles.title}>Halaman Home <br /> Anjay</h1>
          </main>
          <div className={styles.background}>
            <img
              src="/peta.png"
              alt="Descriptive text for screen readers"
              className={styles.backgroundImage}
            />
          </div>
        </div>
      </div>
      <div className={styles.armadaSection}>
        <h2>Armada Kami</h2>
        <div className={styles.imageRow}>
          <div className={styles.armadaImageContainer}>
            <img src="/carry.png" alt="Image 1 Title" className={styles.armadaImage} />
            <p className={styles.armadaTitle}>Image 1 Title</p>
          </div>
          <div className={styles.armadaImageContainer}>
            <img src="/carry.png" alt="Image 2 Title" className={styles.armadaImage} />
            <p className={styles.armadaTitle}>Image 2 Title</p>
          </div>
          <div className={styles.armadaImageContainer}>
            <img src="/carry.png" alt="Image 3 Title" className={styles.armadaImage} />
            <p className={styles.armadaTitle}>Image 3 Title</p>
          </div>
          <div className={styles.armadaImageContainer}>
            <img src="/carry.png" alt="Image 4 Title" className={styles.armadaImage} />
            <p className={styles.armadaTitle}>Image 4 Title</p>
          </div>
          <div className={styles.armadaImageContainer}>
            <img src="/carry.png" alt="Image 5 Title" className={styles.armadaImage} />
            <p className={styles.armadaTitle}>Image 5 Title</p>
          </div>
          <div className={styles.armadaImageContainer}>
            <img src="/carry.png" alt="Image 6 Title" className={styles.armadaImage} />
            <p className={styles.armadaTitle}>Image 6 Title</p>
          </div>
        </div>
      </div>
    </div>
  );
}
