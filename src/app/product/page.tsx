/**
 * PAGE: Product Strategy
 * ROUTE: /product
 * STYLE: Strategic Roadmap (Evolutionary Grid).
 */

import React from 'react';
import styles from './product.module.css';

export default function Product() {
    return (
        <div className={styles.pageContainer}>
            
            {/* 1. Header Section */}
            <section className={styles.headerSection}>
                <div className={styles.headerLeft}>
                    <span className={styles.label}>// Roadmap</span>
                    <h1 className={styles.title}>
                        Product <br />
                        Evolution.
                    </h1>
                </div>
                <div className={styles.headerRight}>
                    <p className={styles.lead}>
                        From data validation to infrastructure scale. 
                        A phased approach to building a cavity-free future.
                    </p>
                </div>
            </section>

            {/* 2. Phases Grid */}
            <section className={styles.roadmapGrid}>
                
                {/* Phase 1 */}
                <div className={styles.phaseCard}>
                    <div className={styles.phaseLabel}>
                        PHASE_01 // DATA_LAYER
                        <span className={styles.phaseStatus}>VALIDATION</span>
                    </div>
                    <h2 className={styles.phaseTitle}>Consumer App</h2>
                    <p className={styles.phaseDesc}>
                        Focused on learning. The app acts as a sensor, helping individuals identify safe foods while building our proprietary database of cariogenicity.
                    </p>
                    <ul className={styles.featureList}>
                        <li>Food scanning & lookup API</li>
                        <li>Personalized risk scoring model</li>
                        <li>Data collection for infrastructure planning</li>
                    </ul>
                </div>

                {/* Phase 2 */}
                <div className={styles.phaseCard}>
                    <div className={styles.phaseLabel}>
                        PHASE_02 // INFRASTRUCTURE
                        <span className={styles.phaseStatus} style={{background: 'var(--ink-black)', color:'white'}}>CORE_PRODUCT</span>
                    </div>
                    <h2 className={styles.phaseTitle}>Smart Environment</h2>
                    <p className={styles.phaseDesc}>
                        The core of Preventix. Scaling impact by physically altering food environments in offices, schools, and institutions.
                    </p>
                    <ul className={styles.featureList}>
                        <li>Smart vending integration</li>
                        <li>Automated inventory filtering</li>
                        <li>Population-level risk dashboard</li>
                    </ul>
                </div>

            </section>

            {/* 3. Strategy Rationale (Dark Mode) */}
            <section className={styles.strategySection}>
                <div className={styles.strategyTitle}>
                    Strategic <br /> Memo
                </div>
                <div className={styles.strategyText}>
                    <p>
                        <strong>Why this approach?</strong> <br /><br />
                        Behavior change is difficult and unreliable. By starting with an app, we validate our data models and understand user preferences. 
                        We then transition to infrastructure, where we remove the burden of choice entirely—making the healthy option the default option in controlled environments.
                    </p>
                    <div style={{marginTop: '20px', fontFamily: 'monospace', fontSize: '0.8rem', opacity: 0.6}}>
                        REF: EXECUTION_STRATEGY_DOC_V2
                    </div>
                </div>
            </section>

        </div>
    );
}