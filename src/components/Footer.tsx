import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <img src="/images/app-icon.png" alt="Loungebird" className={styles.logoIcon} />
              <span className={styles.logoText}>Loungebird</span>
            </Link>
            <p className={styles.tagline}>Real-time lounge occupancy for London Heathrow Terminal 5.</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Loungebird</h4>
              <a href="/#features" className={styles.link}>
                Features
              </a>
              <a
                href="https://apps.apple.com/gb/app/loungebird/id6473727770"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Download
              </a>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Legal</h4>
              <Link to="/terms" className={styles.link}>
                Terms of Use
              </Link>
              <Link to="/privacy" className={styles.link}>
                Privacy Policy
              </Link>
              <Link to="/disclaimer" className={styles.link}>
                Disclaimer
              </Link>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Contact</h4>
              <a href="mailto:info@loungebird.app" className={styles.link}>
                info@loungebird.app
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} Loungebird. Made by{" "}
            <a href="https://sapsford.tech" target="_blank" rel="noopener noreferrer" className={styles.authorLink}>
              Merrick Sapsford
            </a>
          </p>
          <p className={styles.disclaimer}>Not affiliated with British Airways.</p>
        </div>
      </div>
    </footer>
  );
}
