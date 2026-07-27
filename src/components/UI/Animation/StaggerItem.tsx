import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface StaggerItemProps {
  children: ReactNode;
}

const StaggerItem = ({
  children,
}: StaggerItemProps) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 35,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default StaggerItem;