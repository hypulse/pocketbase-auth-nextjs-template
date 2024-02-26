"use server";

import { cookieParse } from "pocketbase";
import { cookies } from "next/headers";
import getPb from "./getPb";

const login = async (identity: string, password: string) => {
  try {
    const pb = await getPb();

    await pb.collection("users").authWithPassword(identity, password);

    // Success to login
    const cookie = pb.authStore.exportToCookie();

    const { Path, Expires, SameSite } = cookieParse(cookie);

    cookies().set("pb_auth", cookie, {
      path: Path,
      expires: new Date(Expires),
      sameSite: SameSite,
      httpOnly: true,
      secure: true,
    });
  } catch (_) {
    // Fail to login
  }
};

export default login;
