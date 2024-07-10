"use client";

import { useEffect, useState } from "react";
import styles from "./ToggleSwitch.module.css";

type ToggleSwitchProps = {
  setIsDark: (bool:boolean) => void
}

export const ToggleSwitch = ({setIsDark}: ToggleSwitchProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    setIsDark(event.target.checked);
  }

  return (
    <>
      <label htmlFor="theme" className={styles.theme}>
        <span className={styles["theme__toggle-wrap"]}>
          <input
            id="theme"
            className={styles.theme__toggle}
            type="checkbox"
            role="switch"
            name="theme"
            value="dark"
            onChange={handleChange}
          />
          <span className={styles.theme__fill}></span>
          <span className={styles.theme__icon}>
            <span className={styles["theme__icon-part"]}></span>
            <span className={styles["theme__icon-part"]}></span>
            <span className={styles["theme__icon-part"]}></span>
            <span className={styles["theme__icon-part"]}></span>
            <span className={styles["theme__icon-part"]}></span>
            <span className={styles["theme__icon-part"]}></span>
            <span className={styles["theme__icon-part"]}></span>
            <span className={styles["theme__icon-part"]}></span>
            <span className={styles["theme__icon-part"]}></span>
          </span>
        </span>
      </label>
    </>
  );
};
