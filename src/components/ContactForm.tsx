import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { contactForm } from "../data/content";
import { EASE } from "../lib/motion";
import "./ContactForm.css";

type Status = "idle" | "submitting" | "success" | "error";

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  interest: contactForm.interests[0],
  message: "",
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [honey, setHoney] = useState("");

  function set<K extends keyof Fields>(key: K, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.name.trim()) next.name = "Please add your name.";
    if (!fields.email.trim()) next.email = "Please add an email.";
    else if (!emailRe.test(fields.email)) next.email = "That email looks off.";
    if (!fields.message.trim()) next.message = "Add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (honey) return; // bot
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${contactForm.deliverTo}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: fields.name,
            company: fields.company,
            email: fields.email,
            phone: fields.phone,
            interest: fields.interest,
            message: fields.message,
            _subject: `RedSun website enquiry — ${fields.interest}`,
            _template: "table",
            _captcha: "false",
          }),
        },
      );
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      setFields(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  const mailtoFallback = `mailto:${contactForm.deliverTo}?subject=${encodeURIComponent(
    `Website enquiry — ${fields.interest}`,
  )}&body=${encodeURIComponent(
    `Name: ${fields.name}\nCompany: ${fields.company}\nEmail: ${fields.email}\nPhone: ${fields.phone}\n\n${fields.message}`,
  )}`;

  return (
    <div className="cform">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="done"
            className="cform__done"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <span className="cform__done-mark" aria-hidden="true">
              ✓
            </span>
            <h3>{contactForm.success.title}</h3>
            <p>{contactForm.success.body}</p>
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => setStatus("idle")}
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            className="cform__form"
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="cform__row">
              <Field
                label="Name"
                required
                value={fields.name}
                onChange={(v) => set("name", v)}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                label="Company"
                value={fields.company}
                onChange={(v) => set("company", v)}
                autoComplete="organization"
              />
            </div>

            <div className="cform__row">
              <Field
                label="Email"
                type="email"
                required
                value={fields.email}
                onChange={(v) => set("email", v)}
                error={errors.email}
                autoComplete="email"
              />
              <Field
                label="Phone"
                type="tel"
                value={fields.phone}
                onChange={(v) => set("phone", v)}
                autoComplete="tel"
              />
            </div>

            <label className="cform__field">
              <span className="cform__label">I'm reaching out about</span>
              <select
                className="cform__input"
                value={fields.interest}
                onChange={(e) => set("interest", e.target.value)}
              >
                {contactForm.interests.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </label>

            <label className="cform__field">
              <span className="cform__label">
                Message <b>*</b>
              </span>
              <textarea
                className="cform__input cform__textarea"
                rows={5}
                value={fields.message}
                onChange={(e) => set("message", e.target.value)}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && (
                <span className="cform__error">{errors.message}</span>
              )}
            </label>

            {/* honeypot */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              className="cform__honey"
              value={honey}
              onChange={(e) => setHoney(e.target.value)}
              aria-hidden="true"
            />

            {status === "error" && (
              <p className="cform__notice">
                Couldn't send that just now. Please email us directly at{" "}
                <a href={mailtoFallback}>{contactForm.deliverTo}</a>.
              </p>
            )}

            <div className="cform__actions">
              <button
                type="submit"
                className="btn btn--solid"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Send message"}
                <span className="btn__arrow" />
              </button>
              <p className="cform__fineprint">
                We'll only use your details to reply to this enquiry.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  error,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <label className="cform__field">
      <span className="cform__label">
        {label} {required && <b>*</b>}
      </span>
      <input
        className="cform__input"
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <span className="cform__error">{error}</span>}
    </label>
  );
}
