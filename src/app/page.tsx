import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    // کل سایت داخل این فریم قرار می‌گیرد تا جمع و جور باشد
    <div className="main-frame">

      {/* 1. Navbar (Simple & Bordered) */}
      <nav style={{
        borderBottom: '2px solid #1a1a1a',
        padding: '20px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontWeight: '900', fontSize: '1.5rem', letterSpacing: '-1px' }}>PREVENTIX.</div>
        <div style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}>EST. 2025 // CA</div>
      </nav>

      {/* 2. Hero Split Screen */}
      <div className={`${styles.gridContainer} ${styles.borderBottom}`}>

        {/* Left: Text */}
        <div className={`${styles.paddingBox} ${styles.borderRight}`}>
          <span className={styles.heroTag}>System Status: Active</span>
          <h1 className={styles.heroTitle}>
            DESIGN THE <br />
            ENVIRONMENT. <br />
            <span style={{ color: 'var(--dental-teal)' }}>FIX THE TEETH.</span>
          </h1>
          <p className={styles.heroLead}>
            An infrastructure-first approach to dental risk. We redesign food choices so health happens automatically.
          </p>
          <Link href="/contact" className={styles.btnPrimary}>
            VIEW PILOT DATA
          </Link>
        </div>

        {/* Right: Abstract "Blueprint" Visualization */}
        <div className={styles.patternBox}>
          <div className={styles.dataCard}>
            <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '10px', fontWeight: 'bold' }}>
              RISK_MONITOR_LOG
            </div>
            <div className={styles.dataRow}>
              <span>Sugar Intake</span>
              <span className={styles.dataVal}>-24%</span>
            </div>
            <div className={styles.dataRow}>
              <span>Cariogenic Index</span>
              <span className={styles.dataVal}>LOW</span>
            </div>
            <div className={styles.dataRow}>
              <span>Participation</span>
              <span className={styles.dataVal}>100%</span>
            </div>
            <div className={styles.dataRow}>
              <span>Intervention Type</span>
              <span className={styles.dataVal}>PASSIVE</span>
            </div>
            <div style={{ marginTop: '15px', fontSize: '0.7rem', color: '#666' }}>
              *Data aggregated from 50+ enterprise cafeterias.
            </div>
          </div>
        </div>
      </div>

      {/* 3. Ticker Strip */}
      <div className={styles.tickerStrip}>
        NO APPS REQUIRED  ///  NO BEHAVIOR TRACKING  ///  HIPAA COMPLIANT INFRASTRUCTURE  ///  REDUCING COST PER CLAIM
      </div>

      {/* 4. Three Column Features */}
      <div className={styles.tripleGrid}>

        <div className={styles.featureBox}>
          <div className={styles.featureNum}>01</div>
          <h3 className={styles.featureTitle}>Curated Defaults</h3>
          <p className={styles.featureText}>
            We audit and adjust the food supply chain in your facility. The "easy" grab-and-go option becomes the tooth-safe option.
          </p>
        </div>

        <div className={styles.featureBox}>
          <div className={styles.featureNum}>02</div>
          <h3 className={styles.featureTitle}>Zero Friction</h3>
          <p className={styles.featureText}>
            Employees don't need to download an app or log meals. The intervention is invisible and part of the physical space.
          </p>
        </div>

        <div className={styles.featureBox}>
          <div className={styles.featureNum}>03</div>
          <h3 className={styles.featureTitle}>Measurable ROI</h3>
          <p className={styles.featureText}>
            We track purchasing patterns and correlate them with dental claims data to prove cost reduction quarterly.
          </p>
        </div>

      </div>

      {/* 5. Footer Area */}
      <footer style={{ padding: '40px', background: '#f9f9f9', borderTop: '2px solid #1a1a1a' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Ready to deploy?</h2>
            <p style={{ maxWidth: '300px', fontSize: '0.9rem', color: '#555' }}>
              Preventix partners with major insurers and Fortune 500 campuses.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <a href="mailto:hello@preventix.com" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>hello@preventix.com</a>
            <div style={{ marginTop: '10px', fontSize: '0.8rem', color: '#888' }}>
              © 2025 Preventix Inc.
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}