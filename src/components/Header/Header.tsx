import React from "react";
import styles from "./Header.module.css";
import { BCPMobileIcon } from "../Icons/BCPMobileIcon";
import { BCPDesktopIcon } from "../Icons/BCPDesktopIcon";
import useMediaQuery from "../../hooks/useMediaQuery";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const isMobile = useMediaQuery("(max-width: 767px)");

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onNavigate?.(section);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          {isMobile ? <BCPMobileIcon /> : <BCPDesktopIcon />}
        </div>

        <nav className={styles.nav}>
          <button
            className={styles.navLink}
            onClick={() => handleNavClick("benefits")}
          >
            Beneficios
          </button>
          <button
            className={styles.navLink}
            onClick={() => handleNavClick("form")}
          >
            Solicita
          </button>
          <button
            className={styles.navLink}
            onClick={() => handleNavClick("form")}
          >
            Ayuda
          </button>
        </nav>
      </div>
    </header>
  );
};
