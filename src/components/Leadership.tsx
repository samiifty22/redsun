import type { CSSProperties } from "react";
import { motion } from "motion/react";
import { leadership } from "../data/content";
import { Reveal } from "./Reveal";
import { EASE } from "../lib/motion";
import "./Leadership.css";

function initials(name: string) {
  const parts = name.replace(/[.,]/g, "").split(" ").filter(Boolean);
  return (parts[0][0] + (parts[parts.length - 1][0] ?? "")).toUpperCase();
}

// per-card accent bar on the floating name label
const ACCENTS = [
  "var(--orange)",
  "#e8b23b",
  "#3e9c6b",
  "var(--ink)",
  "#3b6fe8",
  "#c9500f",
  "#7c5ce8",
];

export function Leadership() {
  return (
    <section className="section leadership" id="leadership">
      <div className="wrap">
        <header className="leadership__head">
          <Reveal>
            <span className="eyebrow">The people</span>
            <h2 className="h2 leadership__title">
              experience behind <em>the mandate.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="body-copy leadership__intro">{leadership.intro}</p>
            <ul className="leadership__tags">
              {leadership.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </Reveal>
        </header>

        <div className="leadership__grid">
          {leadership.people.map((p, i) => (
            <motion.article
              key={p.name}
              className="member"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -6% 0px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: EASE }}
            >
              <div className="member__media">
                {p.image ? (
                  <img
                    className="member__photo"
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                  />
                ) : (
                  <span
                    className="member__photo member__photo--fallback"
                    aria-hidden="true"
                  >
                    {initials(p.name)}
                  </span>
                )}
              </div>

              <div
                className="member__label"
                style={
                  { "--accent": ACCENTS[i % ACCENTS.length] } as CSSProperties
                }
              >
                <h3 className="member__name">{p.name}</h3>
                <span className="member__role">{p.role}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
