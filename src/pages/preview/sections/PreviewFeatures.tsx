import { motion } from "framer-motion";
import BentoGrid, { type BentoItem } from "../../../components/BentoGrid";
import styles from "./PreviewFeatures.module.css";

const previewItems: BentoItem[] = [
  {
    title: "Autopilot",
    description: "Your lounge concierge. Find the best lounge for your journey based on your status and travel habits. All in real-time.",
    size: "large",
    image: "/images/preview/autopilot.webp",
    theme: "midnight",
  },
  {
    title: "Predictive Occupancy",
    description: "Know before you go. See expected lounge occupancy hours in advance with AI-powered predictions built from real-world usage patterns.",
    size: "large",
    image: "/images/preview/predictive-occupancy.webp",
    theme: "steel",
  },
  {
    title: "Occupancy Forecast",
    description: "A fresh new experience",
    size: "large",
    theme: "spectrum",
  },
  {
    title: "Occupancy Trends",
    description: "More ways to stay informed",
    size: "large",
    theme: "night",
  },
  {
    title: "Coming Soon",
    description: "Even more to look forward to",
    size: "medium",
  }
];

export default function PreviewFeatures() {
  return (
    <section className={styles.preview}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="capsule">Preview</span>
          <h1 className={styles.title}>What&apos;s Coming Next</h1>
          <p className={styles.subtitle}>A sneak peek at what we&apos;re building for Loungebird</p>
        </motion.div>

        <BentoGrid items={previewItems} />
      </div>
    </section>
  );
}
