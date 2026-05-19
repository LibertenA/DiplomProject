export interface SessionUser {
  id: number;
  login: string;
}

export function createSessionValue(user: SessionUser) {
  const json = JSON.stringify(user);

  const base64 = Buffer.from(json).toString("base64");

  return base64;
}

export function readSessionValue(sessionValue: string): SessionUser | null {
  try {
    const json = Buffer.from(sessionValue, "base64").toString("utf-8");

    const data = JSON.parse(json);
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
    return null;
  }
}