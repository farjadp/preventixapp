import React from 'react';
import Section from '@/components/ui/Section';
import styles from './team.module.css';

export default function Team() {
    const team = [
        {
            name: 'Sarah Chen, DDS',
            role: 'Clinical Strategy',
            bio: 'Practicing dentist with 15 years of experience in preventive care. Focused on scaling clinical insights from the chair to the cafeteria.'
        },
        {
            name: 'Michael Ross',
            role: 'Technology & Infrastructure',
            bio: 'Former systems architect for logistics networks. Building the backbone of our smart environment deployment.'
        },
        {
            name: 'Elena Silva',
            role: 'Operations & Partnerships',
            bio: 'Specialist in B2B implementation. Ensures our pilot programs run smoothly within existing corporate environments.'
        }
    ];

    return (
        <>
            <Section background="white">
                <div className={styles.header}>
                    <h1>Team</h1>
                    <p>Experts in dentistry, logistics, and data privacy.</p>
                </div>

                <div className={styles.grid}>
                    {team.map((member, index) => (
                        <div key={index} className={styles.member}>
                            <div className={styles.avatar}></div> {/* Placeholder for real photo */}
                            <h3>{member.name}</h3>
                            <div className={styles.role}>{member.role}</div>
                            <p className={styles.bio}>{member.bio}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
