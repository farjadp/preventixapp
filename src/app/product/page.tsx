import React from 'react';
import Section from '@/components/ui/Section';
import styles from './product.module.css';

export default function Product() {
    return (
        <>
            <Section background="white">
                <div className={styles.header}>
                    <h1>Our Product Strategy</h1>
                    <p>A phased approach to building a cavity-free future.</p>
                </div>

                <div className={styles.phases}>
                    <div className={styles.phase}>
                        <div className={styles.phaseLabel}>Phase 1</div>
                        <h2>Consumer Application</h2>
                        <p className={styles.phaseDesc}>
                            Focused on learning and validation. The app helps individuals identify tooth-safe foods and builds our initial database of cariogenicity.
                        </p>
                        <ul className={styles.features}>
                            <li>Food scanning and lookup</li>
                            <li>Personalized risk scoring</li>
                            <li>Data collection for infrastructure planning</li>
                        </ul>
                    </div>

                    <div className={`${styles.phase} ${styles.phasePrimary}`}>
                        <div className={styles.phaseLabel}>Phase 2</div>
                        <h2>Infrastructure & Environment</h2>
                        <p className={styles.phaseDesc}>
                            The core of Preventix. Scaling impact by physically altering food environments in offices, schools, and institutions.
                        </p>
                        <ul className={styles.features}>
                            <li>Smart vending and cafe integration</li>
                            <li>Automated inventory filtering</li>
                            <li>Population-level risk dashboard for admins</li>
                        </ul>
                    </div>
                </div>
            </Section>

            <Section background="gray">
                <div className={styles.rationale}>
                    <h3>Why this Phased Approach?</h3>
                    <p>
                        Behavior change is hard. By starting with an app, we validate our data and understand user preferences.
                        We then transition to infrastructure, where we remove the burden of choice entirely—making the healthy option the only option available in controlled environments.
                    </p>
                </div>
            </Section>
        </>
    );
}
