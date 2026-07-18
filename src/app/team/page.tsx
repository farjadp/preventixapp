/**
 * PAGE: Team Directory
 * ROUTE: /team
 * DESIGN: Structured personnel files. No circular avatars.
 * STYLE: Swiss/Brutalist (Grid lines, Monospace accents).
 */

import React from 'react';
import styles from './team.module.css';

export default function Team() {
    // Current Preventix leadership team
    const team = [
        {
            name: 'Mahnoosh Hendesi',
            role: 'Chief Executive Officer (CEO)',
            bio: 'Mahnoosh leads Preventix’s vision, company strategy, and overall execution, keeping the organization aligned as it moves from planning to measurable impact.'
        },
        {
            name: 'Ali Abedini Nasab Mohajeri',
            role: 'Product Owner',
            bio: 'Ali guides product priorities and translates Preventix’s strategy into clear requirements, ensuring that development stays focused on user needs and business outcomes.'
        },
        {
            name: 'Batoulsadat Mousavifard',
            role: 'Director of Medical Orientation (DMO) & Research and Development (R&D)',
            bio: 'Batoulsadat directs the medical orientation and research and development activities, helping ensure that Preventix’s approach remains evidence-informed and clinically relevant.'
        },
        {
            name: 'Armin Hanafi Sahzabi',
            role: 'Chief Marketing Officer (CMO) & Frontend Developer',
            bio: 'Armin leads marketing and brand communication while contributing to frontend development, connecting Preventix’s public presence with its digital product experience.'
        },
        {
            name: 'Pouria Kheiri',
            role: 'Chief Operating Officer (COO)',
            bio: 'Pouria oversees day-to-day operations and operational planning, helping turn Preventix’s strategy into coordinated and repeatable execution.'
        }
    ];

    return (
        <div className={styles.pageContainer}>
            
            {/* 1. Page Header */}
            <section className={styles.headerSection}>
                <div className={styles.headerLeft}>
                    <span className={styles.label}>{'// Leadership'}</span>
                    <h1 className={styles.title}>
                        Operational <br />
                        Structure.
                    </h1>
                </div>
                <div className={styles.headerRight}>
                    <p className={styles.lead}>
                        A multidisciplinary team combining dental science, systems engineering, and operational rigor.
                    </p>
                </div>
            </section>

            {/* 2. Team Grid */}
            <section className={styles.teamGrid}>
                {team.map((member, index) => (
                    <div key={index} className={styles.memberCard}>
                        
                        {/* Card Header: Avatar Placeholder & ID */}
                        <div className={styles.cardHeader}>
                            <div className={styles.avatarPlaceholder}>
                                IMG_0{index + 1}
                            </div>
                            <span className={styles.indexNum}>
                                REF: MMBR_{index + 1}
                            </span>
                        </div>

                        {/* Text Content */}
                        <div>
                            <h3 className={styles.name}>{member.name}</h3>
                            <div className={styles.role}>{member.role}</div>
                            <p className={styles.bio}>{member.bio}</p>
                        </div>

                    </div>
                ))}
            </section>

        </div>
    );
}
