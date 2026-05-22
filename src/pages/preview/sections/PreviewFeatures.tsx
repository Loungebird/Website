import { motion } from "framer-motion";
import BentoGrid, { type BentoItem } from "../../../components/BentoGrid";
import styles from "./PreviewFeatures.module.css";

const previewItems: BentoItem[] = [
  {
    title: "Coming Soon",
    description: "Something new is on its way",
    size: "medium",
    theme: "gold",
  },
  {
    title: "Coming Soon",
    description: "Something big is in the works",
    size: "large",
    theme: "ios26",
  },
  {
    title: "Coming Soon",
    description: "A fresh new experience",
    size: "medium",
    theme: "spectrum",
  },
  {
    title: "Coming Soon",
    description: "More ways to stay informed",
    size: "medium",
    theme: "night",
  },
  {
    title: "Coming Soon",
    description: "Even more to look forward to",
    size: "medium",
  },
  {
    title: "And Much More",
    description: "We're always working to make Loungebird better",
    size: "full",
  },
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
