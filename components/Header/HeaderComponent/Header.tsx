"use client";

import styles from "./Header.module.css";
import TopBar from "../TopBar";
import MainBar from "../MainBar";

export default function Header() {
  return (
    <header className={styles.header}>
      <TopBar />
      <MainBar />
    </header>
  );
}
