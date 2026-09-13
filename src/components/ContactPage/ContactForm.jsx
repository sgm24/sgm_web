'use client';

import { useEffect, useRef, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const fieldLabels = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  subject: "Subject",
  message: "Message",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const namePattern = /^[\p{L}][\p{L}\s.'-]*$/u;
const phonePattern = /^[+\d][\d\s().-]{6,39}$/;

function validateField(name, value) {
  const trimmedValue = value.trim();

  if (!trimmedValue) return `${fieldLabels[name]} is required.`;
  if (name === "name" && (!namePattern.test(trimmedValue) || trimmedValue.length < 2)) return "Enter a valid name.";
  if (name === "name" && trimmedValue.length > 120) return "Name must be 120 characters or fewer.";
  if (name === "email" && (!emailPattern.test(trimmedValue) || trimmedValue.length > 254)) return "Enter a valid email address.";
  if (name === "phone" && (!phonePattern.test(trimmedValue) || trimmedValue.replace(/\D/g, "").length < 7)) return "Enter a valid phone number.";
  if (name === "phone" && trimmedValue.length > 40) return "Phone must be 40 characters or fewer.";
  if (name === "subject" && trimmedValue.length < 3) return "Subject must be at least 3 characters.";
  if (name === "subject" && trimmedValue.length > 200) return "Subject must be 200 characters or fewer.";
  if (name === "message" && trimmedValue.length < 10) return "Message must be at least 10 characters.";
  if (name === "message" && trimmedValue.length > 5000) return "Message must be 5,000 characters or fewer.";

  return "";
}

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const triggerRef = useRef(null);
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    nameInputRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") closeForm();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeForm() {
    setIsOpen(false);
    setFieldErrors({});
    setStatus({ type: "idle", message: "" });
    triggerRef.current?.focus();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));

    if (fieldLabels[name]) {
      setFieldErrors((currentErrors) => ({ ...currentErrors, [name]: validateField(name, value) }));
    }
  }

  function handleBlur(event) {
    const { name, value } = event.target;
    if (!fieldLabels[name]) return;

    setFieldErrors((currentErrors) => ({ ...currentErrors, [name]: validateField(name, value) }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const errors = Object.keys(fieldLabels).reduce((currentErrors, fieldName) => {
      const error = validateField(fieldName, form[fieldName]);
      if (error) currentErrors[fieldName] = error;
      return currentErrors;
    }, {});

    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus({ type: "submitting", message: "Sending your message..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "We could not send your message.");
      }

      setForm(initialForm);
  setFieldErrors({});
      setStatus({ type: "success", message: "Thanks. Your message has been received." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "We could not send your message.",
      });
    }
  }

  return (
    <div className="contact-form-shell">
      <button
        ref={triggerRef}
        className="contact-form-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="contact-form"
        onClick={() => {
          if (isOpen) {
            closeForm();
          } else {
            setIsOpen(true);
          }
        }}
      >
        Contact us via form
      </button>

      {isOpen && (
        <div className="contact-form-backdrop" onMouseDown={closeForm}>
          <form
            className="contact-form"
            id="contact-form"
            onSubmit={handleSubmit}
            onMouseDown={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-form-title"
          >
            <div className="contact-form-header">
              <p className="contact-form-heading" id="contact-form-title">Send us a message</p>
              <button className="contact-form-close" type="button" onClick={closeForm} aria-label="Close contact form">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="contact-form-fields">
              <label className="contact-form-honeypot" aria-hidden="true">
                Website
                <input name="website" tabIndex="-1" autoComplete="off" value={form.website || ""} onChange={handleChange} />
              </label>
              <label>
                Name
                <input ref={nameInputRef} name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} required autoComplete="name" aria-invalid={Boolean(fieldErrors.name)} aria-describedby="name-error" />
                {fieldErrors.name && <span className="contact-form-field-error" id="name-error">{fieldErrors.name}</span>}
              </label>
              <label>
                Email
                <input name="email" type="email" value={form.email} onChange={handleChange} onBlur={handleBlur} required autoComplete="email" aria-invalid={Boolean(fieldErrors.email)} aria-describedby="email-error" />
                {fieldErrors.email && <span className="contact-form-field-error" id="email-error">{fieldErrors.email}</span>}
              </label>
              <label>
                Phone
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} onBlur={handleBlur} required autoComplete="tel" aria-invalid={Boolean(fieldErrors.phone)} aria-describedby="phone-error" />
                {fieldErrors.phone && <span className="contact-form-field-error" id="phone-error">{fieldErrors.phone}</span>}
              </label>
              <label>
                Subject
                <input name="subject" type="text" value={form.subject || ""} onChange={handleChange} onBlur={handleBlur} required autoComplete="off" aria-invalid={Boolean(fieldErrors.subject)} aria-describedby="subject-error" />
                {fieldErrors.subject && <span className="contact-form-field-error" id="subject-error">{fieldErrors.subject}</span>}
              </label>
              <label className="contact-form-message">
                Message
                <textarea name="message" value={form.message} onChange={handleChange} onBlur={handleBlur} required rows="5" aria-invalid={Boolean(fieldErrors.message)} aria-describedby="message-error" />
                {fieldErrors.message && <span className="contact-form-field-error" id="message-error">{fieldErrors.message}</span>}
              </label>
            </div>
            <button className="contact-form-submit" type="submit" disabled={status.type === "submitting"}>
              {status.type === "submitting" ? "Sending..." : "Send message"}
            </button>
            {status.message && (
              <p className={`contact-form-status contact-form-status-${status.type}`} role="status">
                {status.message}
              </p>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
