'use client';

import React, { useState } from 'react';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import styles from './contact.module.css';

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitted(true);
    }

    return (
        <>
            <Section background="white">
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h1>Pilot Partnerships</h1>
                        <p>
                            We are currently accepting inquiries for pilot programs with insurers and large-scale employers for Q3 2024.
                        </p>
                    </div>

                    {!submitted ? (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.field}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" required />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="org">Organization</label>
                                <input type="text" id="org" required />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="email">Work Email</label>
                                <input type="email" id="email" required />
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="type">Organization Type</label>
                                <select id="type" required>
                                    <option value="">Select...</option>
                                    <option value="employer">Employer</option>
                                    <option value="insurance">Insurance Provider</option>
                                    <option value="university">University / Campus</option>
                                    <option value="investor">Investor</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={4} required></textarea>
                            </div>

                            <div className={styles.submit}>
                                <Button type="submit" variant="primary">Submit Inquiry</Button>
                            </div>
                        </form>
                    ) : (
                        <div className={styles.success}>
                            <h3>Thank you for your interest.</h3>
                            <p>Our team will review your inquiry and get back to you within 2-3 business days.</p>
                        </div>
                    )}
                </div>
            </Section>
        </>
    );
}
