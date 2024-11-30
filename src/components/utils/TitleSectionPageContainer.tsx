'use client';

import { motion } from 'framer-motion';

const animation = {
  hide: { y: -12, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
  },
};

const TitleSectionPageContainer = ({ title }: { title: string }) => {
  return (
    <motion.div
      initial={animation.hide}
      animate={animation.show}
      transition={{ delay: 0.5 }}
    >
      <h2 className='font-bold text-4xl md:text-5xl tracking-tight mb-8 text-white text-center'>
        {title}
      </h2>
    </motion.div>
  )
}

export default TitleSectionPageContainer;