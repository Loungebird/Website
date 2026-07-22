import { motion } from "framer-motion";
import BentoGrid, { type BentoItem } from "../../../components/BentoGrid";
import OccupancyCard from "../../../components/OccupancyCard";
import styles from "./Features.module.css";

const featureItems: BentoItem[] = [
  {
    title: "Lounge Autopilot",
    description: "Your lounge concierge. Autopilot automatically finds the best lounge for your journey, tailored in real-time",
    image: "/images/features/autopilot.webp",
    imageDark: "/images/features/autopilot-dark.webp",
    size: "large",
    theme: "autopilot",
  },
  {
    title: "Live Occupancy",
    description: "Real-time occupancy, no reload required",
    component: <OccupancyCard />,
    size: "medium",
  },
  {
    title: "Customisable",
    description: "Custom Gauges, App Icons and more",
    image: "/images/features/customization.webp",
    size: "medium",
  },
  {
    title: "Occupancy Intelligence",
    description: "Real-time crowd insights and smart predictions help you find the right lounge at the right time",
    image: "/images/features/occupancy-intel.webp",
    imageDark: "/images/features/occupancy-intel-dark.webp",
    size: "large",
    theme: "insight",
  },
  {
    title: "Cutting Edge",
    description: "Support for the latest system updates and features",
    image: "/images/features/cutting-edge.webp",
    size: "medium",
  },
  {
    title: "Always Informed",
    description: "Intelligent estimates fill the gaps when live data is unavailable",
    image: "/images/features/fallback-occupancy.webp",
    imageDark: "/images/features/fallback-occupancy-dark.webp",
    size: "medium",
  },
  {
    title: "Widgets",
    description: "Glanceable on your Home and Lock Screen",
    image: "/images/features/widgets.webp",
    imageDark: "/images/features/widgets-dark.webp",
    size: "large",
    theme: "ios26",
  },
  {
    title: "All your devices",
    description: "Enjoy Loungebird on iPhone, iPad and Mac",
    image: "/images/features/devices.webp",
    imageDark: "/images/features/devices-dark.webp",
    size: "large",
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
