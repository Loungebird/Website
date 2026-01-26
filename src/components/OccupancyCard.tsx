import { useEffect, useState } from "react";
import { motion, useSpring, useTransform, useMotionValueEvent } from "framer-motion";
import styles from "./OccupancyCard.module.css";

interface OccupancyCardProps {
  className?: string;
}

const occupancyStates = [
  { value: 23, label: "QUIET" },
  { value: 45, label: "CALM" },
  { value: 67, label: "BUSY" },
  { value: 82, label: "CROWDED" },
  { value: 34, label: "CALM" },
  { value: 91, label: "FULL" },
  { value: 56, label: "BUSY" },
  { value: 12, label: "QUIET" },
];

export default function OccupancyCard({ className }: OccupancyCardProps) {
  const [stateIndex, setStateIndex] = useState(0);
  const [displayNumber, setDisplayNumber] = useState(occupancyStates[0].value);
  const currentState = occupancyStates[stateIndex];

  // Spring animation for smooth value transitions
  const springValue = useSpring(currentState.value, {
    stiffness: 50,
    damping: 20,
  });

  // Update display number when spring value changes
  useMotionValueEvent(springValue, "change", (latest) => {
    setDisplayNumber(Math.round(latest));
  });

  // Cycle through states
  useEffect(() => {
    const interval = setInterval(() => {
      setStateIndex((prev) => (prev + 1) % occupancyStates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Update spring when state changes
  useEffect(() => {
    springValue.set(currentState.value);
  }, [currentState.value, springValue]);

  // SVG circle calculations
  const size = 180;
  const strokeWidth = 18;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Transform spring value to stroke offset
  const strokeDashoffset = useTransform(springValue, (v) => circumference - (v / 100) * circumference);

  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
      <div className={styles.card}>
        <div className={styles.gaugeContainer}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={styles.gauge}>
            {/* Background track */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              className={styles.track}
            />
            {/* Animated fill */}
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              className={styles.fill}
              strokeDasharray={circumference}
              style={{ strokeDashoffset }}
              transform={`rotate(-90 ${size / 2} ${size / 2})`}
            />
          </svg>
          <div className={styles.valueContainer}>
            <span className={styles.percentage}>{displayNumber}%</span>
            <motion.span
              className={styles.label}
              key={currentState.label}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {currentState.label}
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
}
