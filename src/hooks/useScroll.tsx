import { useRef } from 'react';

const useScroll = () => {
  const scrollRef = useRef<HTMLElement>(null);
  const move = () => {
    if (!scrollRef.current) return;
    scrollRef.current?.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  };

  return [scrollRef, move];
};

export default useScroll;
