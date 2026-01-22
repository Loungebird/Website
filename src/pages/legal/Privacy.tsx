import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './LegalPage.module.css';

export default function Privacy() {
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
          Privacy Policy
        </motion.h1>
      </div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.container}>
          <h2>Intro</h2>
          <p>
            We want to be transparent about how your data is used, because that is what we expect
            from services we use. We appreciate your trust and handle your data with utmost care. By
            using our services you accept this privacy policy.
          </p>
          <p>No private information is required to use Loungebird.</p>

          <h2>What We Collect</h2>
          <p>Loungebird does not collect any personal data.</p>

          <h2>Analytics</h2>
          <p>
            The Loungebird app collects anonymous statistics during usage, such as the percentage of
            users who use a particular feature. This is used to help us improve the app.
          </p>
          <p>This analytics data is completely anonymous at all times.</p>

          <h2>Ads</h2>
          <p>Loungebird collects nothing for, or related to, advertisements.</p>

          <h2>How Information is Used</h2>
          <p>
            We use the information we collect to operate and improve our website, apps, and customer
            support.
          </p>
          <p>
            We do not share personal information with outside parties except to the extent necessary
            to accomplish Loungebird's functionality.
          </p>
          <p>
            We may disclose your information in response to subpoenas, court orders, or other legal
            requirements; to exercise our legal rights or defend against legal claims; to
            investigate, prevent, or take action regarding illegal activities, suspected fraud or
            abuse, violations of our policies; or to protect our rights and property.
          </p>
          <p>
            In the future, we may sell to, buy, merge with, or partner with other businesses. In such
            transactions, user information may be among the transferred assets.
          </p>

          <h2>How We Protect Information</h2>
          <p>
            We implement numerous security measures to help keep your information secure. For
            instance, all communication within the app requires HTTPS.
          </p>

          <h2>Children's Online Privacy Protection Act Compliance</h2>
          <p>
            We never collect or maintain information at our website from those we actually know are
            under 13, and no part of our website is structured to attract anyone under 13.
          </p>

          <h2>Information for European Union Customers</h2>
          <p>
            By using our services and providing your information, you authorize us to collect, use,
            and store your information outside of the European Union.
          </p>

          <h2>International Transfers of Information</h2>
          <p>
            Information may be processed, stored, and used outside of the country in which you are
            located. Data privacy laws vary across jurisdictions, and different laws may be
            applicable to your data depending on where it is processed, stored, or used.
          </p>

          <h2>Future Changes</h2>
          <p>
            We can and likely will update our privacy policy in the future. Visit this page to be
            aware of the policy you are agreeing to by using our services.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, you can email us at:{' '}
            <a href="mailto:info@loungebird.app">info@loungebird.app</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
