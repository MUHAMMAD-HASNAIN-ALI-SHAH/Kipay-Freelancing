import { useEffect, useState } from 'react';

const MOBILE_MAX_WIDTH = 768;

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= MOBILE_MAX_WIDTH);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}