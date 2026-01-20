import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGradient} />
      <div className={styles.backgroundPattern} />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Live Occupancy Data
          </div>

          <h1 className={styles.title}>Lounge smarter at London Heathrow</h1>

          <p className={styles.subtitle}>
            Real-time occupancy insights for Terminal 5 lounges. Find the perfect space to relax before your flight.
          </p>

          <div className={styles.actions}>
            <a
              href="https://apps.apple.com/app/loungebird/id6443610959"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.appStoreButton}
            >
              <svg viewBox="0 0 24 24" className={styles.appleIcon}>
                <path
                  fill="currentColor"
                  d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                />
              </svg>
              <div className={styles.appStoreText}>
                <span className={styles.appStoreSmall}>Download on the</span>
                <span className={styles.appStoreLarge}>App Store</span>
              </div>
            </a>
          </div>

          <div className={styles.platforms}>
            <span>Available on iPhone, iPad, and Mac</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.deviceShowcase}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.deviceContainer}>
            <div className={styles.ipadFrame}>
              <img src="/images/screenshots/ipad/1.png" alt="Loungebird on iPad" className={styles.ipadScreen} />
            </div>
            <div className={styles.iphoneFrame}>
              <img src="/images/screenshots/ios/1.png" alt="Loungebird on iPhone" className={styles.iphoneScreen} />
            </div>
          </div>
        </motion.div>
      </div>

      <div className={styles.scrollIndicator}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
