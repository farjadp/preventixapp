import React from 'react';
import Section from '@/components/ui/Section';
import styles from './who-its-for.module.css';

export default function WhoItsFor() {
    const segments = [
        {
            title: 'Employers',
            description: 'Healthy employees are productive employees. Dental issues are a leading cause of lost work hours.',
            benefits: [
                'Reduce absenteeism due to dental emergencies',
                'Lower long-term health insurance premiums',
                'Demonstrate commitment to employee wellbeing'
            ]
        },
        {
            title: 'Insurance Providers',
            description: 'Move from paying for repairs to investing in prevention. Our data proves risk reduction.',
            benefits: [
                'Access real-time consumption data (aggregated)',
                'Validate lower-risk pools for premium adjustments',
                'Direct cost savings on major restorative procedures'
            ]
        },
        {
            title: 'Universities & Campuses',
            description: 'Create a "safe haven" food environment for students, fostering lifelong healthy habits.',
            benefits: [
                'Differentiate campus dining experience',
                'Support student health initiatives',
                'Easy integration with existing meal plans'
            ]
        }
    ];

    return (
        <>
            <Section background="white">
                <div className={styles.header}>
                    <h1>Who It's For</h1>
                    <p>Partnering with organizations to drive systemic change.</p>
                </div>

                <div className={styles.segments}>
                    {segments.map((segment, index) => (
                        <div key={index} className={styles.segment}>
                            <h2>{segment.title}</h2>
                            <p className={styles.description}>{segment.description}</p>
                            <div className={styles.benefitsTitle}>Key Benefits</div>
                            <ul className={styles.benefits}>
                                {segment.benefits.map((benefit, i) => (
                                    <li key={i}>{benefit}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
