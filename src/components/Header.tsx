import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "../config/links";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled || isMobileMenuOpen ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src="/images/app-icon.png" alt="Loungebird" className={styles.logoIcon} />
          <span className={styles.logoText}>Loungebird</span>
        </Link>

        <nav className={styles.nav}>
          <a href="/#features" className={styles.navLink}>
            Features
          </a>
          <a
            href={links.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadButton}
          >
            Download
          </a>
        </nav>

        <button className={styles.mobileMenuButton} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            className={styles.mobileMenu}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <a href="/#features" className={styles.mobileNavLink} onClick={closeMobileMenu}>
              Features
            </a>
            <a
              href={links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileDownloadButton}
              onClick={closeMobileMenu}
            >
              Download on the App Store
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
