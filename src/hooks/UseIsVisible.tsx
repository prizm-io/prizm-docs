import { useEffect, useState } from "react";

export default function useIsVisible<T extends Element>(
  ref: React.MutableRefObject<T>,
  offset: number = 0,
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      {
        rootMargin: `-${offset}px`,
      },
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
