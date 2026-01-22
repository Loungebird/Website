import { motion } from "framer-motion";
import styles from "./Features.module.css";

const bentoItems = [
  {
    title: "Live Occupancy",
    description: "See real-time capacity for all Terminal 5 lounges at a glance",
    image: "/images/screenshots/ios/1.png",
    size: "large",
  },
  {
    title: "Detailed Insights",
    description: "Entry requirements, opening hours, and current status",
    image: "/images/screenshots/ios/2.png",
    size: "medium",
  },
  {
    title: "Dark Mode",
    description: "Beautiful in any lighting condition",
    image: "/images/screenshots/ios/3.png",
    size: "medium",
  },
  {
    title: "Widgets",
    description: "Glanceable information on your Home and Lock Screen",
    image: "/images/screenshots/ios/4.png",
    size: "wide",
  },
  {
    title: "Mac App",
    description: "Native experience on macOS",
    image: "/images/screenshots/mac/1.png",
    size: "full",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
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
          <p className={styles.subtitle}>Every pixel considered. Every interaction refined.</p>
        </motion.div>

        <motion.div
          className={styles.bentoGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {bentoItems.map((item, index) => (
            <motion.div key={index} className={`${styles.bentoItem} ${styles[item.size]}`} variants={itemVariants}>
              <div className={styles.bentoContent}>
                <h3 className={styles.bentoTitle}>{item.title}</h3>
                <p className={styles.bentoDescription}>{item.description}</p>
              </div>
              <div className={styles.bentoImageWrapper}>
                <img src={item.image} alt={item.title} className={styles.bentoImage} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
