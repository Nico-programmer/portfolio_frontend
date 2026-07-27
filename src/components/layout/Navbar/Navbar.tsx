import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarButton from "./NavbarButton";
import NavbarMobile from "./NavbarMobile";

import { motion } from "framer-motion";
import useScroll from "../../../hooks/useScroll";

const Navbar = () => {
  
  const scrolled = useScroll();

  return (
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "rgba(2,6,23,0.75)"
            : "rgba(2,6,23,0)",

          backdropFilter: scrolled
            ? "blur(18px)"
            : "blur(0px)",

          boxShadow: scrolled
            ? "0 10px 30px rgba(0,0,0,.25)"
            : "0 0 0 rgba(0,0,0,0)",
        }}

        transition={{
          duration: .30
        }}

        className="
          fixed
          top-0
          left-0
          right-0
          z-50
          border-b
          border-transparent
        "
      >
      <nav
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >
        <NavbarLogo />

        <NavbarLinks />

        <>
          <NavbarButton />
          <NavbarMobile />
        </>
      </nav>
    </motion.header>
  );
};

export default Navbar;