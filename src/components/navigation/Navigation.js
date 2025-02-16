"use client";

import { useState, useEffect } from "react";
import Styles from "../navigation/navigation.module.css";
import Image from "next/image";

export default function Navigation() {
  // Ambil mode dari localStorage saat pertama kali load
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true"; 
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString()); // Simpan sebagai string "true" atau "false"
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <nav className={Styles.nav}>
      <div
        className={`${Styles.toggleContainer} ${darkMode ? Styles.dark : ""}`}
        onClick={toggleDarkMode}
      >
        <span className={Styles.icon}>
          <Image
            src="/assets/icons/light-mode.png"
            width={24}
            height={24}
            alt="Light Mode"
          />
        </span>
        <div
          className={`${Styles.toggleCircle} ${
            darkMode ? Styles.moveRight : ""
          }`}
        />
        <span className={Styles.icon}>
          <Image
            src="/assets/icons/dark-mode.png"
            width={24}
            height={24}
            alt="Dark Mode"
          />
        </span>
      </div>
      <div className={Styles.menuShare}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
