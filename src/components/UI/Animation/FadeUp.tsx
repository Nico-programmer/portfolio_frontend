import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
}

const FadeUp = ({
  children,
  delay = 0,
  duration = 0.6,
  distance = 40,
}: FadeUpProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: distance,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;