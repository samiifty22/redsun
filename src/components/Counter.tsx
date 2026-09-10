import { useEffect, useRef, useState } from "react";
import {
  animate,
  useInView,
  useReducedMotion,
} from "motion/react";

type CounterProps = {
  to: number;
  suffix?: string;
  /** compact large numbers, e.g. 255000 -> "255,000" */
  format?: (n: number) => string;
};

const defaultFormat = (n: number) =>
  Number.isInteger(n) ? n.toLocaleString("en-US") : n.toFixed(1);

export function Counter({ to, suffix = "", format = defaultFormat }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) {
      setDisplay(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return (
    <span ref={ref}>
      {format(display)}
      {suffix}
    </span>
  );
}
