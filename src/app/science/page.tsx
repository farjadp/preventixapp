import React from 'react';
import Section from '@/components/ui/Section';
import styles from './science.module.css';

export default function Science() {
    return (
        <>
            <Section background="white">
                <div className={styles.header}>
                    <h1>Science & Prevention</h1>
                    <p>Evidence-based approaches to dental health.</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.block}>
                        <h3>The Environmental Hypothesis</h3>
                        <p>
                            Traditional dentistry focuses on treating disease after it occurs (reactive) or relying on individual willpower for prevention (behavioral).
                            Preventix operates on the "Environmental Hypothesis": that the most effective way to reduce dental risk is to curate the options available in daily life.
                        </p>
                    </div>

                    <div className={styles.block}>
                        <h3>Clinical Oversight</h3>
                        <p>
                            Our selection criteria for "tooth-safe" foods are developed in collaboration with leading cariologists and dental researchers.
                            We utilize pH levels, fermentable carbohydrate content, and texture analysis to classify risk.
                        </p>
                    </div>

                    <div className={styles.block}>
                        <h3>Long-Term Risk Reduction</h3>
                        <p>
                            By substituting high-risk snacks with low-risk alternatives in high-frequency environments (like offices), we aim to significantly lower the cumulative acid attack duration on enamel over time.
                        </p>
                    </div>

                    <div className={styles.disclaimer}>
                        <p>
                            <strong>Note:</strong> Preventix provides infrastructure and environmental modification. We do not provide medical advice, diagnosis, or treatment.
                            Always consult with a qualified dental professional.
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
}
