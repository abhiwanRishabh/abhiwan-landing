"use client";

import { useState } from "react";
import styles from "./modal.module.css";
import { gravesend, helvetica } from "@/app/font/Fonts";
import { Facebook, Instagram, InstagramIcon } from "lucide-react";
export default function ContactUsModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("SALES@ABHIWAN.COM");
    alert("Email copied to clipboard!");
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          {/* Left Section */}
          <div className={styles.leftSection}>
            <div className={styles.textContent}>
              <h2
                className={`${styles.heading} ${gravesend.className} ${helvetica.className}`}
              >
                LEVEL UP YOUR
                <br />
                ONLINE EXPERIENCE
              </h1>
              <p className={styles.subheading}>
                Fill out the form to discover tailored solutions and
                opportunities that will help you succeed.
              </p>

              <div className={styles.socialIcons}>
                <div className={styles.socialIcon}>
                  <Facebook size={20} className="cursor-pointer" />
                </div>
                <div className={styles.socialIcon}>
                  <InstagramIcon size={20} className="cursor-pointer" />
                </div>
                <div className={styles.socialIcon}>
                  <svg
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    strokeWidth={2}
                    fill="#fff"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className={styles.astronautContainer}>
              <img
                src="/astronaut.png"
                alt="Astronaut riding rocket"
                className={styles.astronautImage}
              />
            </div>
          </div>

          {/* Right Section */}
          <div className={styles.rightSection}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                <img src="/abhiwan.png" alt="ABHIWAN Logo" />
              </div>
            </div>

            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <span>DROP A LINE</span>
                <button onClick={copyEmail} className={styles.copyButton}>
                  COPY EMAIL{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-copy-icon lucide-copy"
                  >
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                  </svg>
                </button>
              </div>

              <div className={styles.emailDisplay}>SALES@ABHIWAN.COM</div>

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      NAME *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.textarea}
                  ></textarea>
                </div>

                <div className={styles.buttonContainer}>
                  <button type="submit" className={styles.submitButton}>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className={styles.signupText}>
              <h2 className={gravesend.className}>SIGN UP TO GET</h2>
              <h2
                className={`${styles.startedText} ${gravesend.className}`}
                style={{
                  backgroundImage:
                    "radial-gradient(29.33% 491.94% at 48.17% 57.85%, #D227FC 0%, #2C72FF 100%)",
                  color: "transparent",
                  backgroundClip: "text",
                }}
              >
                STARTED
              </h2>
            </div>
          </div>

          {/* Close Button */}
          <button onClick={onClose} className={styles.closeButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
