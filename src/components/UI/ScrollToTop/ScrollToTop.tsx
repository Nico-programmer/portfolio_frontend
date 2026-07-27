import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: 30,
          }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: .95,
          }}
          onClick={scrollTop}
          className="
            fixed
            bottom-8
            right-8
            z-50
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-indigo-600
            text-white
            shadow-xl
            shadow-indigo-600/40
            transition-colors
            hover:bg-indigo-500
          "
        >
          <ChevronUp size={26} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;