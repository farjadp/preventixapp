import React from 'react';
import Section from '@/components/ui/Section';
import styles from './how-it-works.module.css';

export default function HowItWorks() {
    const steps = [
        {
            number: '01',
            title: 'Deploy Smart Environments',
            description: 'We install Preventix-certified food and beverage points in workplaces and campuses. These replace standard vending or cafeteria sections.'
        },
        {
            number: '02',
            title: 'Curated Tooth-Safe Options',
            description: 'Every item available is verified to be non-cariogenic (tooth-safe). Users physically cannot make a "bad" dental choice in this environment.'
        },
        {
            number: '03',
            title: 'Anonymous Behavior Logging',
            description: 'Our system tracks purchasing patterns without identifying individuals. We measure what is consumed, when, and how frequently.'
        },
        {
            number: '04',
            title: 'Measurable Insights',
            description: 'Insurers and employers receive reports on sugar reduction and risk profile improvements across their population.'
        }
    ];

    return (
        <div className={styles.container}>
            <Section background="white">
                <div className={styles.header}>
                    <h1>How It Works</h1>
                    <p>A seamless integration of health and infrastructure.</p>
                </div>

                <div className={styles.steps}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.step}>
                            <div className={styles.number}>{step.number}</div>
                            <div className={styles.content}>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
