/**
 * PAGE: How It Works
 * ROUTE: /how-it-works
 * STYLE: Industrial Process Log.
 */

import React from 'react';
import styles from './how-it-works.module.css';

export default function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'Deploy Infrastructure',
            description: 'We install Preventix-certified food and beverage points in workplaces. This replaces standard vending machines with our intelligent supply chain nodes.'
        },
        {
            number: '02',
            title: 'Curate Defaults',
            description: 'Every item is verified non-cariogenic. We flip the choice architecture: users physically cannot make a "bad" dental choice, so willpower is not required.'
        },
        {
            number: '03',
            title: 'Log Patterns',
            description: 'Our system tracks purchasing data anonymously. We measure exactly what is consumed, when, and how frequently to establish a risk baseline.'
        },
        {
            number: '04',
            title: 'Report & Optimize',
            description: 'Insurers and employers receive monthly actuarial reports showing sugar reduction and projected dental claim savings.'
        }
    ];

    return (
        <div className={styles.pageContainer}>
            
            {/* 1. Header Section */}
            <section className={styles.headerSection}>
                <div className={styles.headerLeft}>
                    <span className={styles.label}>// Operational Flow</span>
                    <h1 className={styles.title}>
                        System <br />
                        Logic.
                    </h1>
                </div>
                <div className={styles.headerRight}>
                    <p className={styles.lead}>
                        A seamless integration of health infrastructure into daily environments.
                        <br /><br />
                        <span style={{fontFamily: 'monospace', fontSize: '0.85rem'}}>STATUS: AUTOMATED</span>
                    </p>
                </div>
            </section>

            {/* 2. Process Steps */}
            <section className={styles.stepsWrapper}>
                {steps.map((step, index) => (
                    <div key={index} className={styles.stepRow}>
                        
                        {/* Column 1: Huge Number */}
                        <div className={styles.stepNumberBox}>
                            {step.number}
                        </div>

                        {/* Column 2: Content */}
                        <div className={styles.stepContent}>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDesc}>{step.description}</p>
                        </div>
                    </div>
                ))}
            </section>
            
            {/* Optional: Bottom Call to Action strip */}
            <div style={{
                padding: '40px', 
                textAlign: 'center', 
                background: '#1a1a1a', 
                color: 'white',
                fontFamily: 'monospace'
            }}>
                END_OF_PROCESS // READY FOR DEPLOYMENT
            </div>

        </div>
    );
}