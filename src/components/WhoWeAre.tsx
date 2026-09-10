import { motion } from "motion/react";
import { whoWeAre } from "../data/content";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { EASE } from "../lib/motion";
import "./WhoWeAre.css";

export function WhoWeAre() {
  return (
    <>
      <section className="section wwa" id="who-we-are">
        <div className="wrap">
          <div className="wwa__head">
            <Reveal>
              <span className="eyebrow">{whoWeAre.eyebrow}</span>
              <h2 className="h2 wwa__title">
                who <em>we are</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead wwa__lead">{whoWeAre.lead}</p>
              <p className="body-copy wwa__body">{whoWeAre.body}</p>
            </Reveal>
          </div>

          <div className="wwa__pillars">
            {whoWeAre.pillars.map((p, i) => (
              <motion.article
                key={p.no}
                className="pillar"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                whileHover={{ y: -8 }}
              >
                <span className="pillar__no">{p.no}</span>
                <h3 className="pillar__title">{p.title}</h3>
                <p className="pillar__text">{p.text}</p>
                <span className="pillar__glow" aria-hidden="true" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink wwa-stats">
        <div className="wrap">
          <Reveal>
            <span className="kicker wwa-stats__kicker">
              RedSun in numbers
            </span>
          </Reveal>
          <div className="wwa-stats__grid">
            {whoWeAre.stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              >
                <span className="stat__value">
                  <Counter to={s.value} suffix={s.suffix} />
                </span>
                {s.unit && <span className="stat__unit">{s.unit}</span>}
                <span className="stat__label">{s.label}</span>
              </motion.div>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="body-copy wwa-stats__closing">{whoWeAre.closing}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
