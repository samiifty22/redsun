import { useEffect } from "react";
import { motion } from "motion/react";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { contact, contactForm } from "../data/content";
import { EASE } from "../lib/motion";
import "./ContactPage.css";

export function ContactPage() {
  useEffect(() => {
    document.title = "Contact — RedSun Agrochem (BD) Ltd";
    return () => {
      document.title =
        "RedSun Agrochem (BD) Ltd — Building supply chains that build Bangladesh";
    };
  }, []);

  return (
    <>
      <Nav minimal />
      <main className="formpage">
        <div className="wrap formpage__grid">
          <motion.aside
            className="formpage__aside"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="eyebrow">{contactForm.eyebrow}</span>
            <h1 className="formpage__title">
              {contactForm.title.map((line, i) => (
                <span key={i}>{line} </span>
              ))}
            </h1>
            <p className="formpage__intro body-copy">{contactForm.intro}</p>

            <div className="formpage__contacts">
              {contact.offices.map((o) => (
                <div key={o.label} className="formpage__block">
                  <span className="formpage__block-label">{o.label}</span>
                  <p>{o.address}</p>
                </div>
              ))}
              <div className="formpage__block">
                <span className="formpage__block-label">Email</span>
                {contact.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`}>
                    {e}
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
