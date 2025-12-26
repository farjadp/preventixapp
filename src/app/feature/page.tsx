/**
 * PAGE: Feature / System Capabilities
 * ROUTE: /feature
 * STYLE: Technical Spec Sheet (Zero-gap grid, numbered items).
 */

import React from 'react';
import styles from './feature.module.css';

export default function Feature() {
    const features = [
        {
            title: 'Tooth-Safe Catalog',
            description: 'A continuously updated product list scored for cariogenic risk. We replace high-sugar inventory with validated safe alternatives.'
        },
        {
            title: 'Smart Vending Controls',
            description: 'Automated inventory rules that block high-risk items by default. The system physically prevents restocking of non-compliant items.'
        },
        {
            title: 'Environment Audits',
            description: 'Baseline risk analysis of current food environments before deployment. We map every snack point in your facility.'
        },
        {
            title: 'Population Dashboards',
            description: 'Aggregate insights on purchasing behavior and sugar exposure trends. HR gets monthly reports on risk reduction.'
        },
        {
            title: 'Partner Enablement',
            description: 'Vendor onboarding, compliance checks, and ongoing performance reviews. We handle the supply chain complexity.'
        },
        {
            title: 'Privacy by Design',
            description: 'Anonymous reporting with zero personal identifiers stored or shared. Compliant with GDPR and corporate privacy standards.'
        }
    ];

    return (
        <div className={styles.pageContainer}>
            
            {/* 1. Header Section */}
            <section className={styles.headerSection}>
                <div className={styles.headerLeft}>
                    <span className={styles.label}>// System Capabilities</span>
                    <h1 className={styles.title}>
                        Prevention <br />
                        At Scale.
                    </h1>
                </div>
                <div className={styles.headerRight}>
                    <p className={styles.lead}>
                        Tools that make dental health automatic. <br />
                        No behavior change required.
                    </p>
                </div>
            </section>

            {/* 2. Features Spec Grid */}
            <section className={styles.gridContainer}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.card}>
                        <div>
                            {/* Numbering: 01, 02, etc. */}
                            <div className={styles.cardIndex}>
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                        </div>
                        <p className={styles.cardDesc}>{feature.description}</p>
                    </div>
                ))}
            </section>

        </div>
    );
}