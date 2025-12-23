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
                    <Link href="/methodology" className={styles.link}>[01] Methodology</Link>
                    <Link href="/data" className={styles.link}>[02] Data</Link>
                    <Link href="/pricing" className={styles.link}>[03] Pricing</Link>
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