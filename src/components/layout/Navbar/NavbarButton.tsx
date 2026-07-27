import { Download } from "lucide-react";

import { motion } from "framer-motion";

const NavbarButton = () => {
  return (
    <motion.a
      whileHover={{
        scale:1.05
      }}

      whileTap={{
        scale:.97
      }}
      
      href="/cv.pdf"
      download
      className="
        hidden
        items-center
        gap-2
        rounded-xl
        border
        border-indigo-500
        px-5
        py-3
        text-sm
        font-medium
        text-white
        transition-all
        duration-300
        hover:bg-indigo-500
        hover:shadow-lg
        hover:shadow-indigo-500/30
        lg:flex
      "
    >
      <Download size={18} />

      Descargar CV
    </motion.a>
  );
};

export default NavbarButton;