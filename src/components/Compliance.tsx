import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { compliance } from "../data/content";
import { Reveal } from "./Reveal";
import { EASE } from "../lib/motion";
import "./Compliance.css";

export function Compliance() {
  const trackRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 65%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <section className="section section--ink compliance" id="compliance">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">{compliance.eyebrow}</span>
          <span className="kicker compliance__label">{compliance.label}</span>
          <h2 className="h2 compliance__title">
            {compliance.title[0]} <em>{compliance.title[1]}</em>
          </h2>
        </Reveal>

        <div className="timeline__wrap">
          <div className="timeline__rail" aria-hidden="true">
            <motion.span
              className="timeline__fill"
              style={{ scaleX: progress, scaleY: progress }}
            />
          </div>

          <ol className="timeline" ref={trackRef}>
            {compliance.milestones.map((m, i) => (
            <motion.li
              key={m.year}
              className="milestone"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -12% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
            >
              <span className="milestone__node" />
              <span className="milestone__year">{m.year}</span>
              <h3 className="milestone__title">{m.title}</h3>
              <p className="milestone__text">{m.text}</p>
            </motion.li>
            ))}
          </ol>
        </div>

        <Reveal delay={0.1}>
          <div className="licensed">
            <span className="licensed__badge">{compliance.licensed.title}</span>
            <div className="licensed__items">
              {compliance.licensed.items.map((it) => (
                <span key={it} className="licensed__item">
                  {it}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
