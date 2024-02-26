import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import getPb from "./pb/getPb";

export async function middleware(request: NextRequest) {
  // This is optional
  const response = await NextResponse.next();

  const pb = await getPb();

  if (!pb.authStore.isValid) {
    pb.authStore.clear();

    response.cookies.delete("pb_auth");
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
