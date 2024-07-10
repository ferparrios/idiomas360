"use client";

import styles from "./Header.module.css";
import Image from "next/image";
import LOGO from "../../../../public/logo.png";
import React, { useEffect, useState } from 'react';
import { ToggleSwitch } from "../ToggleSwitch/ToggleSwitch";

type HeaderProps = {
  isDark: boolean;
  setIsDark: (bool:boolean) => void
}

export const Header = ({isDark, setIsDark}: HeaderProps) => {
  const [scrollDirection, setScrollDirection] = useState<string>("");
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
      setScrollDirection('down');
    } else if (currentScrollTop < lastScrollTop) {
      setScrollDirection('up');
    }

    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header className={`${styles.header} ${scrollDirection === "up" && styles.sticky}`}>
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
          <li>
            <ToggleSwitch setIsDark={setIsDark}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};
