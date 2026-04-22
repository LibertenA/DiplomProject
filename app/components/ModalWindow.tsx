"use client";

import { useState } from "react";

interface ModalWindowProps {
  mode: "login" | "register";
  onClose: () => void;
  onSwitchToRegister: () => void;
  onSwitchToLogin: () => void;
}


export default function ModalWindow({mode, onClose, onSwitchToRegister, onSwitchToLogin}: ModalWindowProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    async function handleSubmit(event: React.FormEvent) {

    event.preventDefault();

    const response = await fetch("/api/register", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),

    });

    const data = await response.json();

    if (!response.ok) {
      console.error("HTTP error");
    }

    alert("Успех" + {data});

  }
    return (
        <div className="modal_overlay" onClick={onClose}>
        <div className="modal_window" onClick={(event) => event.stopPropagation()}>
            <button className="modal_close" onClick={onClose}>
            ×
            </button>

            {mode === "login" ? (
            <div className="modal_form">
                <h2>Войти в аккаунт</h2>

                <input type="text" placeholder="Введите логин" />

                <div className="input_with_icon">
                <input type="password" placeholder="Пароль" />
                {/*<img src="/eye-close.png" alt="Показать или скрыть пароль" />*/}
                </div>

                <div className="buttons">
                <button className="btnEnter">Войти</button>
                <button type="button" className="switch_btn" onClick={onSwitchToRegister}>
                    Нет аккаунта? Зарегистрироваться
                </button>
                </div>
            </div>
            ) : (
            <div className="modal_form">
                <h2>Зарегистрироваться</h2>

                <input type="email" placeholder="Введите почту" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}/>
                <input type="text" placeholder="Введите логин" />

                <div className="input_with_icon">
                <input type="password" placeholder="Пароль" 
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
          />
                {/*<img src="/eye-close.png" alt="Показать или скрыть пароль" />*/}
                </div>

                <input type="password" placeholder="Повторите пароль" />

                <div className="buttons">
                <button type="submit"  className="btnRegistr">Регистрация</button>
                <button type="button" className="switch_btn" onClick={onSwitchToLogin}>
                    Есть аккаунт? Войти
                </button>
                </div>
            </div>
            )}
        </div>
        </div>
    );
}