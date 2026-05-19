import { cookies } from "next/headers";
import {
  findUserByLogin,
  checkPassword
} from "@/lib/user.service";
import { createSessionValue } from "@/lib/sessions";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { login, password } = body;

    if (!login || !password) {
      return Response.json({
        success: false,
        error: "Missing login or password",
      });
    }

    const trimmedLogin = login.trim();
    const trimmedPassword = password.trim();

    if (!trimmedLogin || !trimmedPassword) {
      return Response.json({
        success: false,
        error: "Missing login or password",
      });
    }

    const user = await findUserByLogin(trimmedLogin);

    if (!user) {
      return Response.json({
        success: false,
        error: "Invalid login or password",
      });
    }

    const isMatch = await checkPassword(trimmedPassword, user.password);

    if (!isMatch) {
      return Response.json({
        success: false,
        error: "Invalid login or password",
      });
    }

    const sessionValue = createSessionValue({
      id: user.id,
      login: user.login,
    });

    const cookieStore = await cookies();
    cookieStore.set("session", sessionValue, {
      httpOnly: true,

      sameSite: "lax",

      secure: false,

      path: "/",

      maxAge: 60 * 60 * 24 * 7,
    });

    return Response.json({
      success: true,
      user: {
        id: user.id,
        login: user.login,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return Response.json({
      success: false,
      error: "Login failed",
    });
  }
}