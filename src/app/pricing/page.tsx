/**
 * PAGE: Pricing
 * ROUTE: /pricing
 * STYLE: Invoice / Estimate Layout.
 */

import React from 'react';
import styles from './pricing.module.css';

export default function Pricing() {
    const plans = [
        {
            name: 'Pilot',
            price: 'DEPLOY_COST_ONLY',
            description: 'Short-term deployment for data validation and stakeholder alignment. Perfect for single-site testing.',
            features: [
                'Single site rollout',
                '3-Month Duration',
                'Baseline Risk Audit',
                'Monthly Performance PDF'
            ]
        },
        {
            name: 'Enterprise',
            price: 'ANNUAL_LICENSING',
            description: 'Full infrastructure deployment with vendor management and compliance support.',
            features: [
                'Multi-location coverage',
                'Real-time Admin Dashboard',
                'Vendor Onboarding & Training',
                'Dedicated Account Manager',
                'Quarterly ROI Review'
            ],
            featured: true // This triggers the Dark Mode card
        },
        {
            name: 'Network',
            price: 'CUSTOM_QUOTE',
            description: 'Regional or national expansions with API access and raw data export capabilities.',
            features: [
                'Unlimited Locations',
                'Raw Data API Access',
                'White-label Reporting',
                'Custom Integration Logic',
                '24/7 SLA Support'
            ]
        }
    ];

    return (
        <div className={styles.pageContainer}>
            
            {/* 1. Header Section */}
            <section className={styles.headerSection}>
                <div className={styles.headerLeft}>
                    <span className={styles.label}>// Deployment Costs</span>
                    <h1 className={styles.title}>
                        Transparent <br />
                        Pricing.
                    </h1>
                </div>
                <div className={styles.headerRight}>
                    <p className={styles.lead}>
                        Aligned to deployment scale and outcomes.
                        <br />
                        <span style={{fontFamily: 'monospace', fontSize: '0.8rem'}}>CURRENCY: USD / CAD</span>
                    </p>
                </div>
            </section>

            {/* 2. Pricing Grid */}
            <section className={styles.pricingGrid}>
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`${styles.planCard} ${plan.featured ? styles.featured : ''}`}
                    >
                        {/* Header of the Card */}
                        <div className={styles.planHeader}>
                            <h3 className={styles.planName}>{plan.name}</h3>
                            <div className={styles.priceLabel}>{plan.price}</div>
                        </div>

                        {/* Description */}
                        <p className={styles.planDesc}>{plan.description}</p>

                        {/* Features List */}
                        <ul className={styles.featureList}>
                            {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className={styles.featureItem}>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* Action Button */}
                        <button className={styles.selectButton}>
                            {plan.featured ? 'Start Deployment' : 'Request Info'}
                        </button>
                    </div>
                ))}
            </section>
            
            {/* Footer Note */}
            <div style={{
                padding: '20px', 
                textAlign: 'center', 
                fontFamily: 'monospace', 
                fontSize: '0.8rem',
                color: '#666'
            }}>
                * ALL PLANS INCLUDE HIPAA-COMPLIANT DATA HANDLING.
            </div>

        </div>
    );
}