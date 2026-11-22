import { useEffect, useState } from "react";

export function useIntersectionObserver(ref: React.RefObject<HTMLElement | null>) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isIntersecting) {
          setIsIntersecting(true);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isIntersecting, ref]);

  return isIntersecting;
}
