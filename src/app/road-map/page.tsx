/**
 * PAGE: Road Map
 * ROUTE: /road-map
 * STYLE: Gantt Chart / Execution Log.
 */

import React from 'react';
import styles from './road-map.module.css';

export default function RoadMap() {
    const milestones = [
        {
            period: 'Q3 2024',
            title: 'Pilot Deployments',
            description: 'Launch pilots with enterprise campuses and early insurer partners. Validation of the core data model in live environments.',
            status: 'DONE'
        },
        {
            period: 'Q4 2024',
            title: 'Data & Reporting Layer',
            description: 'Deliver aggregate dashboards and refine risk scoring models based on pilot feedback. SOC2 compliance audit preparation.',
            status: 'DONE'
        },
        {
            period: 'H1 2025',
            title: 'Scaled Infrastructure',
            description: 'Expand to multi-site deployments. Integration with major food service vendors API for automated inventory filtering.',
            status: 'DONE'
        },
        {
            period: 'H2 2025',
            title: 'International Expansion',
            description: 'Adapt compliance and supplier network for new regions (EU/UK). Development of Version 2.0 Risk Engine.',
            status: 'ACTIVE' // Since it's Dec 2025, this is current/closing
        }
    ];

    return (
        <div className={styles.pageContainer}>
            
            {/* 1. Header Section */}
            <section className={styles.headerSection}>
                <div className={styles.headerLeft}>
                    <span className={styles.label}>// Future Outlook</span>
                    <h1 className={styles.title}>
                        Execution <br />
                        Timeline.
                    </h1>
                </div>
                <div className={styles.headerRight}>
                    <p className={styles.lead}>
                        Our phases of product and deployment growth.
                        <br />
                        Moving from validation to global scale.
                    </p>
                </div>
            </section>

            {/* 2. Timeline Grid */}
            <section className={styles.timelineWrapper}>
                {milestones.map((item, index) => (
                    <div key={index} className={styles.milestoneRow}>
                        
                        {/* Period Column */}
                        <div className={styles.periodBox}>
                            <div className={styles.periodText}>
                                {item.period.replace(' ', '_')}
                            </div>
                            
                            {/* Status Badge Logic */}
                            <div className={`
                                ${styles.statusBadge} 
                                ${item.status === 'DONE' ? styles.statusDone : ''}
                                ${item.status === 'ACTIVE' ? styles.statusActive : ''}
                            `}>
                                [{item.status}]
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className={styles.contentBox}>
                            <h3 className={styles.milestoneTitle}>{item.title}</h3>
                            <p className={styles.milestoneDesc}>{item.description}</p>
                        </div>

                    </div>
                ))}
            </section>

            {/* 3. Progress Footer */}
            <div className={styles.progressFooter}>
                <span style={{fontFamily: 'monospace', fontSize: '0.8rem'}}>TOTAL_COMPLETION</span>
                <div className={styles.progressBar}>
                    <div className={styles.progressFill}></div>
                </div>
                <span style={{fontFamily: 'monospace', fontSize: '0.8rem'}}>75%</span>
            </div>

        </div>
    );
}