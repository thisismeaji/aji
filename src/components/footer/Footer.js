"use client";

import React, { useState, useEffect } from "react";
import styles from "../footer/footer.module.css";
import Link from "next/link";
import Image from "next/image";

const socialLinks = ["instagram", "threads", "facebook", "x"];

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDarkMode(localStorage.getItem("darkMode") === "true");

      // Event listener agar footer ikut berubah saat dark mode berubah
      const handleDarkModeChange = () => {
        setDarkMode(localStorage.getItem("darkMode") === "true");
      };

      window.addEventListener("darkModeChanged", handleDarkModeChange);

      return () => {
        window.removeEventListener("darkModeChanged", handleDarkModeChange);
      };
    }
  }, []);

  return (
    <footer className={styles.footer}>
      <div>
        <ul>
          {socialLinks.map((name, index) => (
            <li key={index}>
              <Link href="/">
                <Image
                  src={`/assets/icons/${name}-${darkMode ? "dark" : "light"}.png`}
                  width={20}
                  height={20}
                  alt={name}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>© 2025 Ajisaka Kamandanu. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
