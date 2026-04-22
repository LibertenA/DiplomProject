import { createUser } from "@/lib/user.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { login, email, password } = body;

    if (!login || !email || !password) {
      return Response.json({
        success: false,
        error: "Missing fields",
      });
    }

    const user = await createUser(login, email, password);

    return Response.json({
      success: true,
      user: {
        id: user.id,
        login: user.login,
        email: user.email,
      },
    });
  } catch (error: any) {
    if (error.code === "23505") {
      return Response.json({
        success: false,
        error: "Login or email already exists",
      });
    }
    
    return Response.json({
      success: false,
      error: "Registration failed",
    });
  }
}