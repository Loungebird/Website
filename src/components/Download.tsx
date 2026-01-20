import { motion } from 'framer-motion';
import styles from './Download.module.css';

export default function Download() {
  return (
    <section className={styles.download}>
      <div className={styles.backgroundGlow} />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.iconWrapper}>
            <img
              src="/images/app-icon.png"
              alt="Loungebird"
              className={styles.appIcon}
            />
          </div>

          <h2 className={styles.title}>
            Ready to Lounge<br />
            <span className={styles.titleAccent}>Smarter?</span>
          </h2>

          <p className={styles.subtitle}>
            Download Loungebird free on the App Store.
            Available for iPhone, iPad, and Mac.
          </p>

          <a
            href="https://apps.apple.com/app/loungebird/id6443610959"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.appStoreButton}
          >
            <svg viewBox="0 0 24 24" className={styles.appleIcon}>
              <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className={styles.appStoreText}>
              <span className={styles.appStoreSmall}>Download on the</span>
              <span className={styles.appStoreLarge}>App Store</span>
            </div>
          </a>

          <div className={styles.features}>
            <div className={styles.feature}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Free to download</span>
            </div>
            <div className={styles.feature}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>No account required</span>
            </div>
            <div className={styles.feature}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Privacy focused</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
