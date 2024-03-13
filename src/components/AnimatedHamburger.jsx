import { useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';

function AnimatedHamburger() {
  const [active, setActive] = useState(false);

  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      <motion.button
        onClick={() => setActive((prev) => !prev)}
        className=' relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20'
        animate={active ? 'open' : 'closed'}
      >
        <motion.span
          style={{ top: '35%', left: '50%', x: '-50%', y: '-50%' }}
          className=' absolute h-1 w-10 bg-white'
          variants={{
            open: {
              rotate: ['0deg', '0deg', '45deg'],
              top: ['35%', '50%', '50%'],
            },
            closed: {
              rotate: ['45deg', '0deg', '0deg'],
              top: ['50%', '50%', '35%'],
            },
          }}
        />
        <motion.span
          style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
          className=' absolute h-1 w-10 bg-white'
          variants={{
            open: {
              rotate: ['0deg', '0deg', '-45deg'],
            },
            closed: {
              rotate: ['-45deg', '0deg', '0deg'],
            },
          }}
        />
        <motion.span
          style={{
            bottom: '35%',
            left: 'calc(50% + 10px)',
            x: '-50%',
            y: '50%',
          }}
          className=' absolute h-1 w-5 bg-white'
          variants={{
            open: {
              bottom: ['35%', '50%', '50%'],
              opacity: 0,
            },
            close: {
              bottom: ['50%', '50%', '35%'],
              opacity: 1,
            },
          }}
        />
      </motion.button>
    </MotionConfig>
  );
}

export default AnimatedHamburger;
