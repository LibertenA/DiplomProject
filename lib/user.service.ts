import pool from "./db";
import bcrypt from "bcrypt";

export async function createUser(
  login: string,
  email: string,
  password: string
) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await pool.query(
    `
      INSERT INTO users (login, email, password)
      VALUES ($1, $2, $3)
      RETURNING id, login, email, created_at
    `,
    [login, email, hashedPassword]
  );

  return result.rows[0];
}

export async function findUserByEmail(email: string) {
  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );

  return result.rows[0];
}

export async function findUserByLogin(login: string) {
  const result = await pool.query(
    "SELECT * FROM users WHERE login = $1",
    [login]
  );

  return result.rows[0];
}

export async function checkPassword(
  inputPassword: string,
  hashedPassword: string
) {
  return bcrypt.compare(inputPassword, hashedPassword);
}