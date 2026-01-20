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

          <div className={styles.actions}>
            <a
              href="https://apps.apple.com/app/loungebird"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.appStoreLink}
            >
              <img
                src="/images/appstore/appstore-ios-light.svg"
                alt="Download on the App Store"
                className={styles.appStoreBadge}
              />
              <img
                src="/images/appstore/appstore-ios-dark.svg"
                alt="Download on the App Store"
                className={styles.appStoreBadgeDark}
              />
            </a>
            <a
              href="https://apps.apple.com/app/loungebird"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.appStoreLink}
            >
              <img
                src="/images/appstore/appstore-macos-light.svg"
                alt="Download on the Mac App Store"
                className={styles.appStoreBadge}
              />
              <img
                src="/images/appstore/appstore-macos-dark.svg"
                alt="Download on the Mac App Store"
                className={styles.appStoreBadgeDark}
              />
            </a>
          </div>

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
