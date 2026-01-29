import { useState } from "react";
import { motion } from "framer-motion";
import { links } from "../../../config/links";
import styles from "./Hero.module.css";

export default function Hero() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGradient} />
      <div className={styles.backgroundPattern} />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={imagesLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className={styles.title}>Lounge Smarter at LHR</h1>

          <p className={styles.subtitle}>
            The perfect pre-flight companion for luxurious lounging<br></br>at London Heathrow Terminal 5
          </p>

          <div className={styles.actions}>
            <a href={links.appStore} target="_blank" rel="noopener noreferrer" className={styles.appStoreLink}>
              <img src="/images/appstore/appstore-ios-light.svg" alt="Download on the App Store" className={styles.appStoreBadge} />
              <img src="/images/appstore/appstore-ios-dark.svg" alt="Download on the App Store" className={styles.appStoreBadgeDark} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.deviceShowcase}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={imagesLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 2.0, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="/images/hero-light.webp" alt="Loungebird on iPhone and iPad" className={styles.heroImage} onLoad={handleImageLoad} />
          <img src="/images/hero-dark.webp" alt="Loungebird on iPhone and iPad" className={styles.heroImageDark} />
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={imagesLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div animate={imagesLoaded ? { y: [0, 8, 0] } : {}} transition={{ duration: 1.5, repeat: Infinity }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
