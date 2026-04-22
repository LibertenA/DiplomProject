import {
  findUserByLogin,
  checkPassword
} from "@/lib/user.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { login, password } = body;

    const user = await findUserByLogin(login);

    if (!user) {
      return Response.json({
        success: false,
        error: "Invalid login or password",
      });
    }

    const isMatch = await checkPassword(password, user.password);

    if (!isMatch) {
      return Response.json({
        success: false,
        error: "Invalid login or password",
      });
    }

    return Response.json({
      success: true,
      user: {
        id: user.id,
        login: user.login,
        email: user.email,
      },
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: "Login failed",
    });
  }
}