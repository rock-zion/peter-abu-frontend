import { useState, useEffect } from 'react';

export default function useIntersectionObserver({
  ref,
  threshold,
  rootMargin = '0px',
}) {
  const [isVisible, setIsVisible] = useState(false);
  // implement intersection observer
  useEffect(() => {
    let options = {
      root: null,
      rootMargin,
      threshold,
    };

    let observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return {
    isVisible,
  };
}
