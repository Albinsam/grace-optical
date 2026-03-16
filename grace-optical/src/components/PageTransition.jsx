import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 60 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.02, y: -60 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{ minHeight: "100vh" }}
    >
      {children}
    </motion.div>
  );
}