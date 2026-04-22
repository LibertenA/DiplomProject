export interface SessionUser {
  id: number;
  login: string;
}

/*
  Эта функция принимает объект пользователя
  и превращает его в строку, которую можно положить в cookie
*/
export function createSessionValue(user: SessionUser) {
  const json = JSON.stringify(user);
  // превращаем объект в JSON-строку

  const base64 = Buffer.from(json).toString("base64");
  // кодируем строку в base64
  // это не защита, а просто упаковка

  return base64;
}

/*
  Эта функция делает обратную операцию:
  берёт строку из cookie
  и пытается превратить её обратно в объект
*/
export function readSessionValue(sessionValue: string): SessionUser | null {
  try {
    const json = Buffer.from(sessionValue, "base64").toString("utf-8");
    // декодируем base64 обратно в JSON-строку

    const data = JSON.parse(json);
    // превращаем JSON-строку обратно в объект

    /*
      Мини-проверка формы объекта.
      Это полезно, чтобы не доверять cookie слепо.
    */
    if (
      typeof data === "object" &&
      data !== null &&
      typeof data.id === "number" &&
      typeof data.login === "string"
    ) {
      return data;
    }

    return null;
  } catch {
    // если cookie битая или поддельная
    return null;
  }
}