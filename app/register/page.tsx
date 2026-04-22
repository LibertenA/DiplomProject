"use client";

import { useState } from "react";

export default function RegisterPage() {
    
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

    console.log("WIN");
    console.log(data);

  }

  return (
    <div>

      <h1>Register</h1>

      <form onSubmit={handleSubmit}>

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">
          Register
        </button>

      </form>

    </div>
  );
}