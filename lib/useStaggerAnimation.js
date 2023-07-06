import { useAnimate, stagger } from 'framer-motion';
import { useEffect } from 'react';

export default function useStaggerAnimation(isOpen) {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const menuAnimations = [
      [
        '.animate-stagger',
        isOpen && {
          transform: 'translateX(0%)',
          opacity: 1,
          filter: 'blur(0px)',
        },
        { duration: 0.7, delay: stagger(0.1, { startDelay: 0.15 }) },
      ],
    ];

    animate([...menuAnimations]);
  }, [isOpen]);
  return scope;
}
