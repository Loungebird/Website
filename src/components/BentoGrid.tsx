import { type ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./BentoGrid.module.css";

export interface BentoItem {
  title: string;
  description: string;
  image?: string;
  imageDark?: string;
  component?: ReactNode;
  size: "small" | "medium" | "large" | "wide" | "full";
  theme?: "gold" | "night" | "ios26" | "spectrum" | "midnight" | "steel" | "autopilot" | "insight";
  hideOnSingleColumn?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
  shouldAnimate?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function BentoGrid({ items, shouldAnimate = true }: BentoGridProps) {
  return (
    <motion.div
      className={styles.grid}
      variants={containerVariants}
      initial={shouldAnimate ? "hidden" : false}
      whileInView={shouldAnimate ? "visible" : undefined}
      animate={shouldAnimate ? undefined : "visible"}
      viewport={{ once: true, margin: "-100px" }}
    >
      {items.map((item, index) => {
        const themeClass = item.theme ? styles[`theme${item.theme.charAt(0).toUpperCase()}${item.theme.slice(1)}`] : "";
        const hideSingleColumnClass = item.hideOnSingleColumn ? styles.hideOnSingleColumn : "";
        return (
          <motion.div
            key={index}
            className={`${styles.item} ${styles[item.size]} ${themeClass} ${hideSingleColumnClass}`}
            variants={itemVariants}
          >
            <div className={styles.content}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
            <div className={styles.imageWrapper}>
              {item.component ? (
                item.component
              ) : item.image ? (
                <>
                  <img src={item.image} alt={item.title} className={styles.image} />
                  {item.imageDark && <img src={item.imageDark} alt={item.title} className={styles.imageDark} />}
                </>
              ) : null}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
