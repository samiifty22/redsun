import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { contact } from "../data/content";
import { Reveal } from "./Reveal";
import { SunMark } from "./SunMark";
import { EASE } from "../lib/motion";
import "./Contact.css";

export function Contact() {
  return (
    <section className="section section--ink contact" id="contact">
      <div className="contact__sun" aria-hidden="true">
        <SunMark size={520} />
      </div>

      <div className="wrap contact__inner">
        <div className="contact__lede">
          <Reveal>
            <span className="eyebrow">{contact.sub}</span>
            <h2 className="h2 contact__title">
              {contact.title[0]} <em>{contact.title[1]}</em>
            </h2>
            <p className="lead contact__cta-line">{contact.cta}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="contact__actions">
              <Link to="/contact" className="btn btn--solid">
                Start a conversation <span className="btn__arrow" />
              </Link>
            </div>
          </Reveal>
        </div>

        <motion.div
          className="contact__details"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {contact.offices.map((o) => (
            <div key={o.label} className="contact__block">
              <span className="contact__block-label">{o.label}</span>
              <p>{o.address}</p>
            </div>
          ))}

          <div className="contact__block">
            <span className="contact__block-label">Email</span>
            {contact.emails.map((e) => (
              <a key={e} href={`mailto:${e}`}>
                {e}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
