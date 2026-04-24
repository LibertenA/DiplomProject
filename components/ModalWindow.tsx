"use client";

import { useState } from "react";

interface ModalWindowProps {
  mode: "login" | "register";
  onClose: () => void;
  onSwitchToRegister: () => void;
  onSwitchToLogin: () => void;
}


export default function ModalWindow({mode, onClose, onSwitchToRegister, onSwitchToLogin}: ModalWindowProps) {
    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

      function resetForm() {
        setLogin("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }
        
    async function handleRegisterSubmit(event: React.FormEvent<HTMLFormElement>) {

        event.preventDefault();

        const trimmedLogin = login.trim();
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        if (!trimmedLogin || !trimmedEmail || !trimmedPassword) {
            alert("Заполни login, email и password");
            return;
        }

        if (trimmedLogin.length < 3) {
            alert("Логин должен быть не короче 3 символов");
            return;
        }

        if (trimmedPassword.length < 8) {
            alert("Пароль должен быть не короче 8 символов");
            return;
        }

        if (trimmedPassword !== confirmPassword.trim()){
            alert("Пароли должны совпадать!");
            return;
        }
        if (!trimmedEmail.includes("@")) {
            alert("Некорректный email");
            return;
        }

        try {
            const response = await fetch("/api/register", {
                method: "POST",

                headers: {
                "Content-Type": "application/json",
                },

                body: JSON.stringify({
                login: trimmedLogin,
                email: trimmedEmail,
                password: trimmedPassword,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                console.error("HTTP error");
            }

            if (!data.success) {
                alert(data.error || "Ошибка регистрации");
                return;
            }

            alert(`Успешная регистрация, ${data.user.login}`);

            resetForm();

        } catch (error) {
            console.error("FETCH ERROR:", error);
            alert("Не удалось отправить запрос на сервер");
        }
    }

    async function handleLoginSubmit(event: React.FormEvent) {

        event.preventDefault();
        const trimmedLogin = login.trim();
        const trimmedPassword = password.trim();

        if (!trimmedLogin || !trimmedPassword) {
        alert("Заполни login и password");
        return;
        }
        try {
            const response = await fetch("/api/login", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    login,
                    password,
                }),
            });

            const data = await response.json();

            if (!data.success) {
                alert(data.error || "Ошибка входа");
                return;
            }

            alert(`Вы успешно вошли в аккаунт ${data.user.login}`);
            resetForm();
            onClose();

        } catch (error) {
            console.error("FETCH ERROR:", error);
            alert("Не удалось отправить запрос на сервер");
        }
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

                <form onSubmit={handleLoginSubmit}>
                    <input type="text" 
                            placeholder="Введите логин" 
                            value={login}
                            onChange={(event) => setLogin(event.target.value)}/>

                    <div className="input_with_icon">
                        <input type="password" 
                                placeholder="Пароль" 
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}/>
                        {/*<img src="/eye-close.png" alt="Показать или скрыть пароль" />*/}
                    </div>

                    <div className="buttons">
                        <button className="btnEnter">Войти</button>
                        <button type="button" className="switch_btn" onClick={onSwitchToRegister}>
                            Нет аккаунта? Зарегистрироваться
                        </button>
                    </div>                   
                </form>
                
            </div>
            ) : (
            <div className="modal_form">
                <h2>Зарегистрироваться</h2>

                <form onSubmit={handleRegisterSubmit}>
                    <input type="email" 
                            placeholder="Введите почту" 
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}/>
                    <input type="text" 
                            placeholder="Введите логин" 
                            value={login}
                            onChange={(event) => setLogin(event.target.value)}/>

                    <div className="input_with_icon">
                    <input type="password" 
                            placeholder="Пароль" 
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                    />
                    {/*<img src="/eye-close.png" alt="Показать или скрыть пароль" />*/}
                    </div>

                    <input type="password" 
                            placeholder="Повторите пароль" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <div className="buttons">
                        <button type="submit"  className="btnRegistr">Регистрация</button>
                        <button type="button" className="switch_btn" onClick={onSwitchToLogin}>
                            Есть аккаунт? Войти
                        </button>
                    </div>
                </form>  
            </div>
            )}
        </div>
        </div>
    );
}