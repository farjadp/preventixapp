import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                
                {/* Logo Area */}
                <Link href="/" className={styles.logo}>
                    Preventix
                    <span className={styles.versionTag}>SYS_V2.0</span>
                </Link>

                {/* Desktop Navigation */}
                <div className={styles.links}>
                    <Link href="/about-us" className={styles.link}>About Us</Link>

                    <div className={styles.menuItem}>
                        <Link href="/product" className={styles.link}>
                            Product
                            <span className={styles.caret}>▾</span>
                        </Link>
                        <div className={styles.submenu}>
                            <Link href="/feature" className={styles.subLink}>Feature</Link>
                            <Link href="/road-map" className={styles.subLink}>Road Map</Link>
                            <Link href="/how-it-works" className={styles.subLink}>How It Works</Link>
                        </div>
                    </div>

                    <Link href="/pricing" className={styles.link}>Price</Link>
                    <Link href="/contact" className={styles.link}>Contact Us</Link>
                    <Link href="/team" className={styles.link}>Team</Link>
                </div>

                {/* CTA & Mobile Logic */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* دکمه را فقط در دسکتاپ نشان می‌دهیم یا می‌توانیم نگه داریم */}
                    <Link href="/demo" className={`${styles.ctaButton} hidden-mobile`}>
                        Deploy System
                    </Link>
                    
                    <div className={styles.mobileMenuBtn}>
                        ≡
                    </div>
                </div>
                
            </div>
        </nav>
    );
}
