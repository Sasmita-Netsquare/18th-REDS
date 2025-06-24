import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UsePinScrollOptions {
  start?: string;
  endOffset?: number;
  pinSpacing?: boolean;
  scrub?: boolean;
}

export const usePinScroll = (
  triggerRef: React.RefObject<HTMLElement>,
  {
    start = "top top+=130",
    endOffset = 100,
    pinSpacing = false,
    scrub = false,
    disabled = false,
  }: UsePinScrollOptions & { disabled?: boolean } = {}
) => {
  useEffect(() => {
    if (!triggerRef.current || disabled) return; 

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start,
        end: () => `+=${(triggerRef.current?.offsetHeight ?? 0) + endOffset}`,
        pin: true,
        pinSpacing,
        scrub,
      });
    }, triggerRef);

    return () => ctx.revert();
  }, [triggerRef, start, endOffset, pinSpacing, scrub, disabled]);
};
