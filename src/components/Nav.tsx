import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { nav } from "../data/content";
import "./Nav.css";

const items = [{ label: "Home", href: "#hero" }, ...nav];
const spyIds = items
  .filter((i) => i.href.startsWith("#"))
  .map((i) => i.href.slice(1));

const toPath = (href: string) => (href.startsWith("#") ? `/${href}` : href);

export function Nav({ minimal = false }: { minimal?: boolean }) {
  const { pathname, hash } = useLocation();
  const [active, setActive] = useState("#hero");
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1181px)").matches
      : true,
  );

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 16));

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1181px)");
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (minimal || pathname !== "/") return;
    const sections = spyIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [minimal, pathname]);

  useEffect(() => {
    if (pathname === "/" && hash) setActive(hash);
  }, [pathname, hash]);

  const isActive = (href: string) =>
    href.startsWith("#")
      ? pathname === "/" && active === href
      : pathname === href;

  return (
    <motion.header
      className="nav"
      data-minimal={minimal}
      data-scrolled={scrolled}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner wrap">
        <Link to="/" className="nav__logo" aria-label="RedSun Agrochem home">
          <img src="/images/redsun-logo.png" alt="RedSun Agrochem (BD) Ltd" />
        </Link>

        {minimal ? (
          <Link to="/" className="nav__back">
            <span aria-hidden="true">←</span> Back to site
          </Link>
        ) : isDesktop ? (
          <nav className="nav__pill" aria-label="Primary">
            {items.map((item) => (
              <Link
                key={item.href}
                to={toPath(item.href)}
                className="nav__link"
              >
                {isActive(item.href) && (
                  <motion.span
                    className="nav__indicator"
                    layoutId="nav-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="nav__link-text">{item.label}</span>
              </Link>
            ))}
          </nav>
        ) : (
          <Link to="/contact" className="nav__cta">
            Contact
            <span className="nav__cta-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
        )}
      </div>
    </motion.header>
  );
}
