// web/src/components/Drawer.js
import React from 'react';
import { motion } from 'framer-motion';
import useWindowSize from 'src/utils/useWindowSize';
const Drawer = ({ children, isOpen, onClose, position }) => {
  const { width, height } = useWindowSize();
  const variants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
      },
    },
    closed: {
      x: position === 'right' ? '100%' : '-100%',
    },
  };

  return (
    <motion.div
      className="fixed top-0 bottom-0 z-50 w-64 bg-[#111827] overflow-y-auto h-screen"
      style={{
        x: isOpen ? 0 : position === 'right' ? '100%' : '-100%',
      }}
      variants={variants}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
    >
      <div className="p-4">

      </div>
      <div className="p-4">{children}</div>
    </motion.div>
  );
};

export default Drawer;
