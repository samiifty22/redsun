import { motion, useReducedMotion } from "motion/react";

type SunMarkProps = {
  size?: number;
  className?: string;
};

/**
 * Decorative animated version of the RedSun sun icon:
 * concentric rings with a slow-rotating ring of rays.
 */
export function SunMark({ size = 320, className }: SunMarkProps) {
  const reduce = useReducedMotion();
  const rays = Array.from({ length: 8 });

  return (
    <motion.svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
      initial={reduce ? undefined : { rotate: 0 }}
      animate={reduce ? undefined : { rotate: 360 }}
      transition={{ duration: 90, ease: "linear", repeat: Infinity }}
    >
      <g>
        {rays.map((_, i) => (
          <motion.polygon
            key={i}
            points="100,4 112,46 88,46"
            fill="var(--sun-red)"
            transform={`rotate(${i * 45} 100 100)`}
            initial={reduce ? undefined : { opacity: 0.35 }}
            animate={reduce ? undefined : { opacity: [0.35, 0.9, 0.35] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              delay: i * 0.22,
              ease: "easeInOut",
            }}
          />
        ))}
      </g>
      <circle cx="100" cy="100" r="46" fill="var(--sun-red)" />
      <circle cx="100" cy="100" r="33" fill="var(--sun-orange)" />
      <circle cx="100" cy="100" r="20" fill="var(--sun-gold)" />
      <motion.circle
        cx="100"
        cy="100"
        r="9"
        fill="#fff3c4"
        initial={reduce ? undefined : { scale: 1 }}
        animate={reduce ? undefined : { scale: [1, 1.25, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
