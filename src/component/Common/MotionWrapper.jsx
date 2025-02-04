import { motion } from "framer-motion";

const MotionWrapper = ({ children, onceData, ...motionProps }) => (
    <motion.div
      initial={{ opacity: 0, y: 250 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: onceData, margin: `0px 0px -10%  0px` }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );

  export default MotionWrapper