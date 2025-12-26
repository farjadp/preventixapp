/**
 * PAGE: Privacy & Compliance
 * ROUTE: /privacy
 * STYLE: Legal Audit Log.
 */

import React from 'react';
import styles from './privacy.module.css';

export default function Privacy() {
    return (
        <div className={styles.pageContainer}>
            
            {/* 1. Header Section */}
            <section className={styles.headerSection}>
                <div className={styles.headerLeft}>
                    <span className={styles.label}>// Legal Framework</span>
                    <h1 className={styles.title}>
                        Data <br />
                        Governance.
                    </h1>
                </div>
                <div className={styles.headerRight}>
                    <p className={styles.lead}>
                        Built with privacy-first principles. 
                        We treat data sovereignty as a core infrastructure requirement, not a feature.
                    </p>
                    <div style={{marginTop: '20px', fontFamily: 'monospace', fontSize: '0.8rem', color: '#2a7a78'}}>
                        JURISDICTION: CANADA (CA)
                    </div>
                </div>
            </section>

            {/* 2. Compliance Grid */}
            <section className={styles.complianceGrid}>
                
                {/* Item 1: PIPEDA */}
                <div className={styles.policyCard}>
                    <div className={styles.iconBox}>[✓] COMPLIANT</div>
                    <h3 className={styles.policyTitle}>PIPEDA Ready</h3>
                    <p className={styles.policyText}>
                        Our data handling practices are fully compliant with the Personal Information Protection and Electronic Documents Act (PIPEDA).
                    </p>
                </div>

                {/* Item 2: Data Residency */}
                <div className={styles.policyCard}>
                    <div className={styles.iconBox}>[🇨🇦] SOVEREIGNTY</div>
                    <h3 className={styles.policyTitle}>Canadian Residency</h3>
                    <p className={styles.policyText}>
                        All data is hosted securely on servers located physically within Canada. We ensure zero data egress across borders.
                    </p>
                </div>

                {/* Item 3: Aggregation */}
                <div className={styles.policyCard}>
                    <div className={styles.iconBox}>[ø] ANONYMIZED</div>
                    <h3 className={styles.policyTitle}>Aggregated Data</h3>
                    <p className={styles.policyText}>
                        We analyze purchasing trends, not individuals. Data provided to employers is strictly aggregated to prevent re-identification.
                    </p>
                </div>

                {/* Item 4: No Surveillance */}
                <div className={styles.policyCard}>
                    <div className={styles.iconBox}>[X] NO_CAMERAS</div>
                    <h3 className={styles.policyTitle}>Zero Surveillance</h3>
                    <p className={styles.policyText}>
                        Our smart environments do not use cameras or facial recognition. We rely solely on point-of-sale logs, respecting physical privacy.
                    </p>
                </div>

            </section>

            {/* 3. Security Footer Strip */}
            <div className={styles.securityStrip}>
                <span>SECURE_CONNECTION: TLS 1.3 ENCRYPTED</span>
                <span>STATUS: AUDIT_PASSED</span>
            </div>

        </div>
    );
}