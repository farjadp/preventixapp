/**
 * PAGE: Team Directory
 * ROUTE: /team
 * DESIGN: Structured personnel files. No circular avatars.
 * STYLE: Swiss/Brutalist (Grid lines, Monospace accents).
 */

import React from 'react';
import styles from './team.module.css';

export default function Team() {
    // Data populated from your specific request
    const team = [
        {
            name: 'Mahnoosh Hendesi',
            role: 'Chief Executive Officer (CEO)',
            bio: 'Mahnoosh is responsible for vision, execution, and external trust. Leading the startup’s direction and coordinating the team, she ensures the product moves from idea to reality. Her focus is on keeping the company aligned, disciplined, and moving forward.'
        },
        {
            name: 'Amirhossein Rismanchian',
            role: 'Chief Operating Officer (COO)',
            bio: 'Amirhossein brings hands-on experience running real businesses. He owns operations, pilot programs, and partnerships. He is the bridge between theory and reality, ensuring ideas work on the ground in cafés and institutions.'
        },
        {
            name: 'Mahmoudreza Nematbakhsh',
            role: 'Chief Business & Strategy Officer',
            bio: 'Mahmoudreza oversees business structure, partnerships, and long-term strategy. His background in governance ensures Preventix is scalable, compliant, and financially sane, preventing growth from turning into chaos.'
        },
        {
            name: 'Hamidreza Rezaei',
            role: 'Chief Data & Systems Advisor',
            bio: 'Hamidreza guides data architecture and AI reasoning models. His strength is systems thinking and academic rigor, ensuring Preventix’s intelligence layer is defensible, explainable, and aligned with real research.'
        },
        {
            name: 'Parastoo Heydari',
            role: 'Technical Implementation Lead',
            bio: 'Parastoo handles technical execution, integrations, and IoT concepts. With a background in electrical engineering and control systems, she ensures that what Preventix promises can actually be built and maintained.'
        }
    ];

    return (
        <div className={styles.pageContainer}>
            
            {/* 1. Page Header */}
            <section className={styles.headerSection}>
                <div className={styles.headerLeft}>
                    <span className={styles.label}>// Leadership</span>
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