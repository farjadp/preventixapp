/**
 * PAGE: About Us
 * ROUTE: /about-us
 * DESCRIPTION: Corporate philosophy & mission statement.
 * DESIGN SYSTEM: Swiss Editorial (Grid-based, Bordered, Monospace).
 */

import React from 'react';
import styles from './about-us.module.css';

export default function AboutUs() {
    // Data for the Core Values section
    const values = [
        {
            title: 'EVIDENCE_BASED',
            description: 'We do not follow wellness trends. Every product decision is backed by peer-reviewed dental science.'
        },
        {
            title: 'ENV_DESIGN',
            description: 'Willpower fails. Environment succeeds. We remove friction by changing the physical options available.'
        },
        {
            title: 'ENTERPRISE_SCALE',
            description: 'Designed for Fortune 500 compliance. We build for scale, data security, and measurable financial ROI.'
        }
    ];

    return (
        // The container creates the "Paper Document" feel with side borders
        <div className={styles.pageContainer}>

            {/* 1. Header Section: Split Layout */}
            <section className={styles.headerSection}>
                <div className={styles.headerLeft}>
                    <span className={styles.label}>// Corporate Profile</span>
                    <h1 className={styles.title}>
                        WE ENGINEER <br />
                        <span style={{ color: 'var(--dental-teal)' }}>PREVENTION.</span>
                    </h1>
                </div>
                <div className={styles.headerRight}>
                    <p className={styles.lead}>
                        Preventix is building the invisible infrastructure to eliminate preventable dental risk.
                    </p>
                </div>
            </section>

            {/* 2. Mission Grid: Three Columns with Technical Borders */}
            <section className={styles.missionGrid}>

                <div className={styles.gridItem}>
                    <div className={styles.gridIcon}>[A]</div>
                    <h3 className={styles.gridTitle}>Our Mission</h3>
                    <p className={styles.gridText}>
                        Reduce population-level cavities by reshaping the food environments where people work, learn, and commute.
                    </p>
                </div>

                <div className={styles.gridItem}>
                    <div className={styles.gridIcon}>[B]</div>
                    <h3 className={styles.gridTitle}>Why We Exist</h3>
                    <p className={styles.gridText}>
                        Dental disease is the #1 chronic condition. We focus on upstream environmental changes that produce durable outcomes.
                    </p>
                </div>

                <div className={styles.gridItem}>
                    <div className={styles.gridIcon}>[C]</div>
                    <h3 className={styles.gridTitle}>How We Operate</h3>
                    <p className={styles.gridText}>
                        We partner with insurers to deploy smart, tooth-safe retail environments. No apps, just better defaults.
                    </p>
                </div>

            </section>

            {/* 3. Values Section: Dark/Inverted Block for Contrast */}
            <section className={styles.valuesSection}>
                <div className={styles.valuesHeader}>
                    <h2 style={{ fontSize: '2rem', textTransform: 'uppercase' }}>Core Methodology</h2>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>SYS_VALUES_V1</span>
                </div>

                <div className={styles.valuesGrid}>
                    {values.map((value, index) => (
                        <div key={index} className={styles.valueCard}>
                            {/* Monospace Title for technical feel */}
                            <h4>{`0${index + 1} // ${value.title}`}</h4>
                            <p>{value.description}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}