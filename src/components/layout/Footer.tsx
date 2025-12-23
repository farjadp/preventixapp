import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            
            {/* CTA Section: جعبه‌ای و مشخص */}
            <div className={styles.ctaRow}>
                <div className={styles.ctaText}>
                    <h2>Deploy Infrastructure</h2>
                    <p style={{fontFamily: 'monospace', color: '#555'}}>
                        Target: Enterprise & Insurance Providers
                    </p>
                </div>
                <Link href="/contact" className={styles.ctaButton}>
                    Start Pilot Program →
                </Link>
            </div>

            {/* Links Grid: جدولی و منظم */}
            <div className={styles.linksGrid}>
                
                {/* Col 1 */}
                <div className={styles.column}>
                    <span className={styles.colHeader}>INDEX_01</span>
                    <nav className={styles.linkList}>
                        <Link href="/platform">Risk Engine</Link>
                        <Link href="/methodology">Methodology</Link>
                        <Link href="/api">API Access</Link>
                    </nav>
                </div>

                {/* Col 2 */}
                <div className={styles.column}>
                    <span className={styles.colHeader}>INDEX_02</span>
                    <nav className={styles.linkList}>
                        <Link href="/about">Corporate</Link>
                        <Link href="/careers">Careers</Link>
                        <Link href="/contact">Locations</Link>
                    </nav>
                </div>

                {/* Col 3 */}
                <div className={styles.column}>
                    <span className={styles.colHeader}>DOCUMENTS</span>
                    <nav className={styles.linkList}>
                        <Link href="/whitepaper">Whitepaper</Link>
                        <Link href="/clinical-trials">Clinical Trials</Link>
                        <Link href="/compliance">HIPAA / ISO</Link>
                    </nav>
                </div>

                {/* Col 4 */}
                <div className={styles.column}>
                    <span className={styles.colHeader}>LEGAL</span>
                    <nav className={styles.linkList}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                        <Link href="/sla">SLA Agreement</Link>
                    </nav>
                </div>

            </div>

            {/* Bottom Technical Row */}
            <div className={styles.bottomRow}>
                <div>
                    © {currentYear} PREVENTIX INC.
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <span className={styles.statusDot}></span>
                    SYSTEM OPERATIONAL
                </div>
            </div>

        </footer>
    );
}