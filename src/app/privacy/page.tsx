import React from 'react';
import Section from '@/components/ui/Section';
import styles from './privacy.module.css';

export default function Privacy() {
    return (
        <>
            <Section background="white">
                <div className={styles.header}>
                    <h1>Privacy & Compliance</h1>
                    <p>Built with privacy-first principles from the ground up.</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>PIPEDA Compliant</h3>
                        <p>Our data handling practices are fully compliant with the Personal Information Protection and Electronic Documents Act (PIPEDA).</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Canadian Data Residency</h3>
                        <p>All data is hosted securely on servers located within Canada. We ensure data sovereignty for our Canadian partners.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Aggregated & Anonymized</h3>
                        <p>We analyze purchasing trends, not individuals. Data provided to employers and insurers is strictly aggregated to prevent re-identification.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>No Surveillance</h3>
                        <p>Our smart environments do not use cameras or facial recognition. We rely on point-of-sale data, respecting the user's physical privacy.</p>
                    </div>
                </div>
            </Section>
        </>
    );
}
