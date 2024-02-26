"use server";

import { cookies } from "next/headers";
import getPb from "./getPb";

const logout = async () => {
  const pb = await getPb();

  pb.authStore.clear();

  cookies().delete("pb_auth");
};

export default logout;
