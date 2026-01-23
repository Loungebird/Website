import { motion } from "framer-motion";
import BentoGrid, { type BentoItem } from "../../../components/BentoGrid";
import styles from "./Features.module.css";

const featureItems: BentoItem[] = [
  {
    title: "Live Occupancy",
    description: "Real-time occupancy, no reload required",
    image: "/images/features/live-occupancy.png",
    imageDark: "/images/features/live-occupancy-dark.png",
    size: "medium",
    theme: "gold",
  },
  {
    title: "Customization",
    description: "Custom Gauges, App Icons and more",
    image: "/images/features/customization.png",
    size: "medium",
  },

  {
    title: "Widgets",
    description: "Glanceable on your Home and Lock Screen",
    image: "/images/features/widgets.png",
    imageDark: "/images/features/widgets-dark.png",
    size: "large",
    theme: "ios26",
  },
  {
    title: "Details, Detailed",
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
    title: "Everyhere, Anytime",
    description: "Enjoy Loungebird on iPhone, iPad and Mac",
    image: "/images/features/devices.png",
    imageDark: "/images/features/devices-dark.png",
    size: "full",
  },
];

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
          <p className={styles.subtitle}>The best way to effortlessly unwind and relax before your flight</p>
        </motion.div>

        <BentoGrid items={featureItems} />
      </div>
    </section>
  );
}
