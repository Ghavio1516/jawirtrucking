// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                <Link href="/">Jawir Trucking</Link>
                <p className={styles.subBrand}>Jawa Timur Trucking</p>
            </div>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/">Beranda</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/mitra">Mitra</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/tentang-kami">Tentang Kami</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
