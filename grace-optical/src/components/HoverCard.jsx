import { motion } from "framer-motion";

export default function HoverCard({ children }) {
  return (
    <motion.div
      whileHover={{
        y: -14,
        scale: 1.04,
        boxShadow: "0px 35px 80px rgba(0,0,0,0.22)",
      }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 14,
      }}
      className="cursor-pointer will-change-transform"
    >
      {children}
    </motion.div>
  );
}