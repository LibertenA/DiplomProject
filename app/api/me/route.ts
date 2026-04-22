import { cookies } from "next/headers";
import { readSessionValue } from "@/lib/sessions";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session");
    /*
      get("session") вернёт объект cookie или undefined,
      если cookie нет
    */

    if (!sessionCookie) {
      return Response.json({
        success: false,
        user: null,
      });
    }

    const user = readSessionValue(sessionCookie.value);
    // пытаемся декодировать cookie

    if (!user) {
      return Response.json({
        success: false,
        user: null,
      });
    }

    return Response.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("ME ERROR:", error);

    return Response.json({
      success: false,
      user: null,
    });
  }
}