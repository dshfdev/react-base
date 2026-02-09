import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timeout = setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [hash]);

  return null;
};
