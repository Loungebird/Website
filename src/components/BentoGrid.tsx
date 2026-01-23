import { motion } from "framer-motion";
import styles from "./BentoGrid.module.css";

export interface BentoItem {
  title: string;
  description: string;
  image: string;
  imageDark?: string;
  size: "small" | "medium" | "large" | "wide" | "full";
  theme?: "gold" | "night" | "ios26" | "spectrum";
}

interface BentoGridProps {
  items: BentoItem[];
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

export default function BentoGrid({ items }: BentoGridProps) {
  return (
    <motion.div
      className={styles.grid}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {items.map((item, index) => {
        const themeClass = item.theme ? styles[`theme${item.theme.charAt(0).toUpperCase()}${item.theme.slice(1)}`] : "";
        return (
          <motion.div
            key={index}
            className={`${styles.item} ${styles[item.size]} ${themeClass}`}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className={styles.content}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
            <div className={styles.imageWrapper}>
              <img src={item.image} alt={item.title} className={styles.image} />
              {item.imageDark && <img src={item.imageDark} alt={item.title} className={styles.imageDark} />}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
