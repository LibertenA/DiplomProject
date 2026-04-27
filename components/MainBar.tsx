"use client";

import { useState } from "react";
import Search from "./Search";
import CartButton from "./CartButton";
import ModalWindow from "./ModalWindow";

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
        <div className="main_bar">
          <div className="header_logo">
            <img className="logo" src="/logo.png" />
            <h1 className="main_title">TechStore</h1>
          </div>

          <button className="header_catalogbtn">
            <img className="catalogbtn_icon" src="/catalogbtn.png" />
            <p className="catalogbtn_name">Каталог</p>
          </button>

          <Search />

          <div className="header_actions">
            <CartButton count={cart}/>
            
            <button className="enter_btn" onClick={openLoginModal}>
              <img src="/user.png" className="user_icon"/>
              <p>Войти</p>
            </button>
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
    )
}