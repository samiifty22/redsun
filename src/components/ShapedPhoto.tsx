import { useId } from "react";

/**
 * A photo clipped to RedSun's angular-cut "marker" silhouette — flat rounded
 * top, sides straight, bottom tapering to a rounded point. Rendered as inline
 * SVG so the corners stay crisp and the white outline hugs the shape.
 */
const SHAPE =
  "M 33 5 H 307 Q 335 5 335 33 V 238 Q 335 252 327 265 L 186 383 Q 170 398 154 383 L 13 265 Q 5 252 5 238 V 33 Q 5 5 33 5 Z";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** vertical crop anchor */
  align?: "top" | "center" | "bottom";
};

const YMAP = { top: "Min", center: "Mid", bottom: "Max" } as const;

export function ShapedPhoto({ src, alt, className, align = "center" }: Props) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      className={className}
      viewBox="0 0 340 400"
      role="img"
      aria-label={alt}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id={`clip-${id}`}>
          <path d={SHAPE} />
        </clipPath>
      </defs>
      <image
        href={src}
        x="0"
        y="0"
        width="340"
        height="400"
        preserveAspectRatio={`xMidY${YMAP[align]} slice`}
        clipPath={`url(#clip-${id})`}
      />
      <path
        d={SHAPE}
        fill="none"
        stroke="var(--paper)"
        strokeWidth="7"
        strokeLinejoin="round"
      />
    </svg>
  );
}
