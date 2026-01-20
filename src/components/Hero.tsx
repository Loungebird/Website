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
