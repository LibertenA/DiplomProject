"use client";

import { useState } from "react";
import Search from "./Search";
import CartButton from "./CartButton";
import ModalWindow from "./ModalWindow";

export default function Header() {
  const basket = 0;
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
    <div className="header">
      <div className="header_logo">
        <img className="logo" src="/logo.png" />
        <h1 className="main_title">TechStore</h1>
      </div>

      <Search />

      <div className="header_actions">
        <CartButton count={basket}/>
        <button className="enter_btn" onClick={openLoginModal}>Войти</button>
      </div>

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
