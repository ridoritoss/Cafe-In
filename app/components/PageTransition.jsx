"use client";

import { motion, AnimatePresence } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const pageTransition = {
  duration: 0.5,
  ease: "easeInOut",
};

export default function PageTransition({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={children.key || Math.random()}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
        className="page-transition"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
