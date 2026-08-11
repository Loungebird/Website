import { useEffect } from "react";
import { motion } from "framer-motion";
import legalStyles from "../legal/LegalPage.module.css";
import styles from "./Press.module.css";

export default function Press() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={legalStyles.page}>
      <div className={legalStyles.hero}>
        <motion.h1
          className={legalStyles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Press
        </motion.h1>
      </div>

      <motion.div
        className={legalStyles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={legalStyles.container}>
          <h2>About Loungebird</h2>
          <p>
            Loungebird is the perfect pre-flight companion for travellers visiting the lounges at London Heathrow Terminal 5. 
            Designed to make every moment before departure more enjoyable; it brings useful lounge information together in 
            a simple, beautifully crafted experience.
          </p>
          <p>
            Whether planning ahead or already at the airport, Loungebird helps travellers get the best possible pre-departure experience.
          </p>

          <h2>Press Kit</h2>
          <p>Featuring high-resolution screenshots and iconography.</p>
          <div className={styles.assetGrid}>
            <a href="https://assets.loungebird.app/press/v3/presskit.zip" download className={styles.assetCard}>
              <img src="/images/app-icon.png" alt="Loungebird app icon" className={styles.assetIcon} />
              <span className={styles.assetInfo}>
                <span className={styles.assetName}>Press Kit</span>
                <span className={styles.assetMeta}>ZIP</span>
              </span>
              <svg
                className={styles.assetDownloadIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12" />
                <path d="M7 10l5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
            </a>
          </div>

          <h2>Enquiries</h2>
          <div className={styles.contactCard}>
            <p style={{ marginBottom: 0 }}>
              For further enquires, please get in touch at{" "}
              <a href="mailto:info@loungebird.app">info@loungebird.app</a>.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
