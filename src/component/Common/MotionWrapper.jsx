import { motion } from "framer-motion";

const MotionWrapper = ({ children, ...motionProps }) => (
    <motion.div
      initial={{ opacity: 0, y: 250 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, margin: "-20%" }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );

  export default MotionWrapper