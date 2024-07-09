import styles from "./Header.module.css";
import Image from "next/image";
import LOGO from "../../../../public/logo.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles["nav"]}>
        <Image src={LOGO} alt="Idiomas 360 Logo Image" width={85} height={55} />
        <ul className={styles["nav__items"]}>
          <li className={styles["nav__item"]}>
            <a href="#home">Inicio</a>
          </li>
          <li className={styles["nav__item"]}>
            <a href="#about">Nosotros</a>
          </li>
          <li className={styles["nav__item"]}>
            <a href="#contact">Contacto</a>
          </li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};
