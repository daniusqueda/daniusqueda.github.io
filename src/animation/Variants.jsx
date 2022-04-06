import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      // type: 'easeInOut',
      delayChildren: 0,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0},
  visible: { y: 0, opacity: 1 },
};

export const VariantsContainer = ({children}) => (
    <motion.div variants={container} initial="hidden" animate="visible">
        {children}
    </motion.div>
  );

export const VariantsItem = ({children}) => (
  <motion.div variants={item}>
    {children}
  </motion.div>
);