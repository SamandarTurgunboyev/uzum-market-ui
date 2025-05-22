import React, { useEffect } from 'react';

const useCloser = (
  ref: React.RefObject<HTMLElement>,
  closeFunction: () => void,
  scrollClose: boolean = true,
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        closeFunction();
      }
    }

    function handleScroll() {
      if (scrollClose) {
        closeFunction();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [ref, closeFunction, scrollClose]); // ✅ required deps
};

export default useCloser;
