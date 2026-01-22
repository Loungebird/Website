import { motion } from "framer-motion";
import styles from "./Features.module.css";

interface BentoItem {
  title: string;
  description: string;
  image: string;
  imageDark?: string;
  size: string;
  theme?: string;
}

const bentoItems: BentoItem[] = [
  {
    title: "Live Occupancy",
    description: "Real-time occupancy, no reload required",
    image: "/images/features/live-occupancy.png",
    imageDark: "/images/features/live-occupancy-dark.png",
    size: "medium",
    theme: "gold",
  },
  {
    title: "Details, Detailed",
    description: "Entry requirements, opening hours, and current status",
    image: "/images/features/cutting-edge.png",
    size: "medium",
  },
  {
    title: "Widgets",
    description: "Glanceable on your Home and Lock Screen",
    image: "/images/features/widgets.png",
    size: "large",
    theme: "sky",
  },
  {
    title: "Customize Away",
    description: "Entry requirements, opening hours, and current status",
    image: "/images/features/cutting-edge.png",
    size: "medium",
  },
  {
    title: "Cutting Edge",
    description: "Support for the latest system updates and features",
    image: "/images/features/cutting-edge.png",
    size: "medium",
    theme: "night",
  },
  {
    title: "Available Everywhere",
    description: "Enjoy Loungebird on your iPhone, iPad and your Mac",
    image: "/images/screenshots/mac/1.png",
    size: "full",
  },
];

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

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="capsule">Features</span>
          <h2 className={styles.title}>Tailored Travel</h2>
          <p className={styles.subtitle}>Effortlessly find the best way to unwind and relax before your flight with Loungebird.</p>
        </motion.div>

        <motion.div
          className={styles.bentoGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {bentoItems.map((item, index) => {
            const themeClass = item.theme ? styles[`theme${item.theme.charAt(0).toUpperCase()}${item.theme.slice(1)}`] : "";
            return (
              <motion.div
                key={index}
                className={`${styles.bentoItem} ${styles[item.size]} ${themeClass}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className={styles.bentoContent}>
                  <h3 className={styles.bentoTitle}>{item.title}</h3>
                  <p className={styles.bentoDescription}>{item.description}</p>
                </div>
                <div className={styles.bentoImageWrapper}>
                  <img src={item.image} alt={item.title} className={styles.bentoImage} />
                  {item.imageDark && <img src={item.imageDark} alt={item.title} className={styles.bentoImageDark} />}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
