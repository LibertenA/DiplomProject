"use client";

import { useState } from "react";
import Search from "../SearchComponent";
import CartButton from "../CartButtonComponent";
import ModalWindow from "../ModalWindow";
import styles from "./MainBar.module.css";

export default function MainBar() {
  const cart = 0;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"login" | "register">("login");

  function openLoginModal() {
    setModalMode("login");
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function switchToRegister() {
    setModalMode("register");
  }

  function switchToLogin() {
    setModalMode("login");
  }

  return (
    <div className={styles.mainBar}>
      <div className={styles.headerLogo}>
        <h1 className={styles.mainTitle}>online:store</h1>
      </div>

      <button className={styles.headerCatalogBtn}>
        <img
          className={styles.catalogBtnIcon}
          src="/catalogbtn.png"
          alt="catalog"
        />
        <span className={styles.catalogBtnName}>Каталог</span>
      </button>

      <Search />
      <CartButton count={cart} />

      <button className={styles.enterBtn} onClick={openLoginModal}>
        <img src="/user.png" className={styles.userIcon} alt="user" />
        <span className={styles.enterBtnText}>Войти</span>
      </button>

      {isModalOpen && (
        <ModalWindow
          mode={modalMode}
          onClose={closeModal}
          onSwitchToRegister={switchToRegister}
          onSwitchToLogin={switchToLogin}
        />
      )}
    </div>
  );
}
