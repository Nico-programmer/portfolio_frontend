import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <div
      className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        bg-slate-950
      "
    >
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 3, -3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-3xl
          bg-gradient-to-br
          from-indigo-500
          via-violet-500
          to-blue-500
          text-3xl
          font-bold
          text-white
          shadow-2xl
          shadow-indigo-500/40
        "
      >
        NP
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: .2,
        }}
        className="
          mt-8
          text-2xl
          font-bold
          text-white
        "
      >
        Cargando portafolio...
      </motion.h2>

      <motion.div
        animate={{
          scaleX: [0, 1, 0],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="
          mt-8
          h-1
          w-48
          origin-left
          rounded-full
          bg-indigo-500
        "
      />
    </div>
  );
};

export default LoadingScreen;