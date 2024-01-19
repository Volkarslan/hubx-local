import { motion } from 'framer-motion';

export default function Circle({ color }) {
  const icon = {
    initial: {
      pathLength: 0,
      stroke: 'black',
    },
    animate: {
      pathLength: 1,
      stroke: '#0381FF',
    },
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      style={{ position: 'absolute' }}
    >
      <circle cx="28" cy="28" r="28" fill="none" />

      <motion.circle
        variants={icon}
        initial="initial"
        animate="animate"
        transition={{ duration: 1 }}
        cx="28"
        cy="28"
        r="27.5"
        stroke-opacity="0.08"
      />
    </svg>
  );
}
