import { motion } from "framer-motion";
<h2 class=""></h2>
const AnimatedTitle = ({ title }) => {
  return (
    <div className="flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="tmb-4 text-4xl tracking-tight font-extrabold text-[#35B8DF]"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-1 bg-[#35B8DF] mb-6"
      ></motion.div>
    </div>
  );
};

export default AnimatedTitle;
