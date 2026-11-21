import { useEffect, useState } from "react";

/** Extra room below the fixed menu before a section counts as active. */
const ACTIVATION_MARGIN_PX = 24;

/** The menu height, read from <html>'s scroll-padding (scroll-pt-menu). */
const getMenuOffset = () =>
  parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;

/**
 * Scroll-spy: the active section is the last one whose top has passed just
 * below the fixed menu. Unlike intersection ratios, this has exactly one
 * answer per scroll position, so the highlight never flickers between
 * sections, even ones taller than the viewport.
 */
export default function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (sectionIds.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const activationLine = getMenuOffset() + ACTIVATION_MARGIN_PX;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= activationLine) {
          current = id;
        }
      }
      // At the very bottom, short last sections can never reach the offset.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = sectionIds[sectionIds.length - 1];
      setActiveSection(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
