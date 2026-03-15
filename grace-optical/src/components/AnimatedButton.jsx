import { motion } from "framer-motion";

export default function AnimatedButton({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-brandRed text-white px-8 py-3 rounded-lg shadow"
    >
      {children}
    </motion.button>
  );
}