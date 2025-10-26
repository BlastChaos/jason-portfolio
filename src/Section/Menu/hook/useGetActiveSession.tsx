import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);

        if (visible.length > 0) {
          const mostVisible = visible.reduce((max, entry) =>
            entry.intersectionRatio > max.intersectionRatio ? entry : max
          );
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75, 1],
      }
    );

    const timeout = setTimeout(() => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 100); // ensure DOM ready

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}
