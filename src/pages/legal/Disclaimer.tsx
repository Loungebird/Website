import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './LegalPage.module.css';

export default function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Disclaimer
        </motion.h1>
      </div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.container}>
          <p>
            Loungebird is not affiliated, associated, endorsed by, or in any way officially connected
            with British Airways, any of its subsidiaries or its affiliates. All product and company
            names are the registered trademarks of their original owners. The use of any trade name
            or trademark is for identification and reference purposes only and does not imply any
            association with the trademark holder of their product brand.
          </p>

          <h2>Data Accuracy</h2>
          <p>
            The occupancy data displayed in Loungebird is provided for informational purposes only.
            While we strive to provide accurate and up-to-date information, we cannot guarantee the
            accuracy, completeness, or reliability of the data at any given time.
          </p>

          <h2>No Warranty</h2>
          <p>
            The information and services provided by Loungebird are provided "as is" without any
            warranties of any kind, either express or implied. We do not warrant that the service
            will be uninterrupted, timely, secure, or error-free.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            In no event shall Loungebird be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of or related to your use of the
            application.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Disclaimer, please contact us at:{' '}
            <a href="mailto:info@loungebird.app">info@loungebird.app</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
