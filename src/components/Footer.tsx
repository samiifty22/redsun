import { Link } from "react-router-dom";
import { contact } from "../data/content";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <img src="/images/redsun-logo.png" alt="RedSun Agrochem (BD) Ltd" />
          <span className="footer__motto">Rise to Enlighten</span>
        </div>

        <div className="footer__cols">
          {contact.offices.map((o) => (
            <div key={o.label} className="footer__col">
              <span className="footer__label">{o.label}</span>
              <p>{o.address}</p>
            </div>
          ))}
          <div className="footer__col">
            <span className="footer__label">Reach us</span>
            <Link to="/contact" className="footer__cta">
              Send a message →
            </Link>
            {contact.emails.map((e) => (
              <a key={e} href={`mailto:${e}`}>
                {e}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap footer__bar">
        <span>© 2026 RedSun Agrochem (BD) Ltd. All rights reserved.</span>
        <span>Established 2017 · Dhaka · Dubai — DIFC</span>
      </div>
    </footer>
  );
}
