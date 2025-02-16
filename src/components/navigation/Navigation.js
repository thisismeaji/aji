"use client";

import { useState, useEffect } from "react";
import Styles from "../navigation/navigation.module.css";
import Image from "next/image";

export default function Navigation() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <nav className={Styles.nav}>
      <div
        className={`${Styles.toggleContainer} ${darkMode ? Styles.dark : ""}`}
        onClick={() => setDarkMode(!darkMode)}
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
