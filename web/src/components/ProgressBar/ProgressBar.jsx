import { motion, useAnimation } from 'framer-motion';

const ProgressBar = ({ arraySize, currentIndex }) => {
  const progress = (currentIndex / arraySize) * 100; // Calculate the progress percentage

  // Create animation controls
  const controls = useAnimation();

  // Use Framer Motion to animate the progress bar when currentIndex changes
  React.useEffect(() => {
    // Use Framer Motion to animate the progress bar when currentIndex changes
    controls.start({ width: `${progress}%` });
  }, [currentIndex, controls, progress]);

  return (
    <div className="px-6 rounded-lg">
       <div className="w-full h-4 bg-gray-300 my-6 rounded-lg">
      <motion.div
        className="h-full bg-[#693D97] rounded-lg"
        initial={{ width: '0%' }}
        animate={controls}
        transition={{ duration: 0.5 }}
      />
    </div>
    </div>

  );
};

export default ProgressBar;
