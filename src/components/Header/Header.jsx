import { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import profile from "../../../public/profile.png";

export default function Header({ refs }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.headerContainer}>
      <div className={styles.userSection}>
        <Image width="50" height="50" alt="profile-picture" src={profile} />
        <div className={styles.userDescription}>
          <h3>Augusto Iphar</h3>
          <p>Full-Stack Web Developer</p>
        </div>
      </div>
      <button className={styles.burgerMenu} onClick={toggleMenu}>
        ☰
      </button>
      <div
        className={`${styles.navigablesContainer} ${
          isMenuOpen ? styles.showMenu : ""
        }`}
      >
        <ul>
          <span
            onClick={() => scrollToSection(refs.aboutRef)}
            className={styles.aboutItem}
          >
            Sobre mí
          </span>
          <span
            onClick={() => scrollToSection(refs.interestsRef)}
            className={styles.interestsItem}
          >
            Intereses
          </span>
          <span
            onClick={() => scrollToSection(refs.contactFormRef)}
            className={styles.contactItem}
          >
            Contacto
          </span>
        </ul>
      </div>
    </nav>
  );
}
