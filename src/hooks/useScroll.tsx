import { useRef } from 'react';

function useMoveScrool() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const move = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return { scrollRef, move };
}

export default useMoveScrool;
