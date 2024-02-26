import { cookies } from "next/headers";
import PocketBase from "pocketbase";

const getPb = async () => {
  const pb = new PocketBase(process.env.PB_URL);

  if (cookies().has("pb_auth")) {
    const cookie = cookies().get("pb_auth")!.value;

    pb.authStore.loadFromCookie(cookie);

    try {
      if (pb.authStore.isValid) {
        await pb.collection("users").authRefresh({
          requestKey: null,
        });
      }
    } catch (_) {
      pb.authStore.clear();
    }
  }

  return pb;
};

export default getPb;
