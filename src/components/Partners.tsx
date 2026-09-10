import { motion } from "motion/react";
import { partners } from "../data/content";
import { Reveal } from "./Reveal";
import { EASE } from "../lib/motion";
import "./Partners.css";

export function Partners() {
  return (
    <section className="section section--warm partners" id="partners">
      <div className="wrap">
        <div className="partners__head">
          <Reveal>
            <span className="eyebrow">Trusted network</span>
            <h2 className="h2 partners__title">
              {partners.title[0]} <em>{partners.title[1]}</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="body-copy partners__intro">{partners.intro}</p>
          </Reveal>
        </div>

        <div className="partners__grid">
          {partners.list.map((p, i) => (
            <motion.div
              key={p.name}
              className="partner"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07, ease: EASE }}
            >
              {p.logo ? (
                <img
                  className="partner__logo"
                  src={p.logo}
                  alt={p.name}
                  loading="lazy"
                />
              ) : (
                <span className="partner__name">{p.name}</span>
              )}
              <span className="partner__caption">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
