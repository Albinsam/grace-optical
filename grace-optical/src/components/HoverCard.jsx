import { motion } from "framer-motion";

export default function HoverCard({ children }) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.03,
        boxShadow: "0px 25px 60px rgba(0,0,0,0.18)",
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 18,
      }}
      className="cursor-pointer"
    >
      {children}
    </motion.div>
  );
}