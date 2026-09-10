import { useRef } from "react";
import type { Variants } from "motion/react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { hero } from "../data/content";
import { ShapedPhoto } from "./ShapedPhoto";
import { SunMark } from "./SunMark";
import { EASE } from "../lib/motion";
import "./Hero.css";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const stackY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const sunY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);

  const marquee = [...hero.pills, ...hero.pills, ...hero.pills];
  const front = hero.images[0];
  const back = hero.images[1] ?? hero.images[0];

  const lineParent: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.055, delayChildren: 0.15 } },
  };
  const word: Variants = {
    hidden: { y: "112%" },
    show: { y: "0%", transition: { duration: 0.75, ease: EASE } },
  };
  const fadeParent: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.55 } },
  };
  const fade: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  const floaty = (dir: number) =>
    reduce
      ? { opacity: 1, scale: 1, y: 0 }
      : { opacity: 1, scale: 1, y: [0, dir, 0] };
  const floatyT = (delay: number, dur: number) =>
    reduce
      ? { duration: 0.7, delay, ease: EASE }
      : {
          opacity: { duration: 0.7, delay },
          scale: { duration: 0.7, delay },
          y: { duration: dur, repeat: Infinity, ease: "easeInOut" as const },
        };

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="hero__glow" aria-hidden="true" />
      <motion.div
        className="hero__sun"
        style={reduce ? undefined : { y: sunY }}
        aria-hidden="true"
      >
        <SunMark size={460} />
      </motion.div>

      <div className="hero__grid wrap">
        <div className="hero__copy">
          {hero.eyebrow && (
            <motion.span
              className="hero__eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="hero__eyebrow-dot" />
              {hero.eyebrow}
            </motion.span>
          )}

          <motion.h1
            className="hero__title"
            variants={lineParent}
            initial="hidden"
            animate="show"
          >
            {hero.headline.map((ln, i) => (
              <span className="hero__line" key={i}>
                {ln.split(" ").map((w, j) => (
                  <span className="hero__word" key={j}>
                    <motion.span className="hero__word-inner" variants={word}>
                      {w}
                    </motion.span>
                  </span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.div
            className="hero__lower"
            variants={fadeParent}
            initial="hidden"
            animate="show"
          >
            <motion.p className="hero__body body-copy" variants={fade}>
              {hero.body}
            </motion.p>
            <motion.div className="hero__actions" variants={fade}>
              <a href="#contact" className="btn btn--solid">
                {hero.cta}
                <span className="btn__arrow" />
              </a>
              <a href="#who-we-are" className="hero__link">
                See what we do
              </a>
            </motion.div>

            <motion.div className="hero__faces" variants={fade}>
              <div className="hero__faces-stack">
                {hero.images.slice(0, 4).map((img) => (
                  <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
                ))}
              </div>
              <span className="handnote">real sites, real people</span>
            </motion.div>
          </motion.div>
        </div>

        {/* DESKTOP — two angular-cut photos, stacked */}
        <motion.div
          className="hero__stack"
          style={reduce ? undefined : { y: stackY }}
        >
          <motion.div
            className="hero__stack-item hero__stack-item--back"
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={floaty(16)}
            transition={floatyT(0.4, 8)}
          >
            <ShapedPhoto src={back.src} alt={back.alt} align="center" />
          </motion.div>

          <motion.div
            className="hero__stack-item hero__stack-item--front"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={floaty(-14)}
            transition={floatyT(0.2, 7)}
          >
            <ShapedPhoto src={front.src} alt={front.alt} align="center" />
            {front.tag && (
              <span className="hero__stack-tag">
                <span className="hero__stack-tag-dot" />
                {front.tag}
              </span>
            )}
          </motion.div>
        </motion.div>

        {/* MOBILE — one angular-cut photo */}
        <motion.div
          className="hero__mphoto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <ShapedPhoto src={front.src} alt={front.alt} align="center" />
          {front.tag && (
            <span className="hero__stack-tag">
              <span className="hero__stack-tag-dot" />
              {front.tag}
            </span>
          )}
          <span className="hero__mphoto-sun" aria-hidden="true">
            <SunMark size={54} />
          </span>
        </motion.div>
      </div>

      <div className="hero__marquee" aria-hidden="true">
        <motion.div
          className="hero__marquee-track"
          animate={reduce ? undefined : { x: ["0%", "-33.333%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        >
          {marquee.map((w, i) => (
            <span key={i} className="hero__marquee-item">
              {w}
              <span className="hero__marquee-star">✳</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
