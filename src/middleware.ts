import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  console.log("middleware");

  const isPublicPath =
    path === "/login" || path === "/register" || path === "/verifyemail";

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    console.log("middleware: redirected to base");

    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    console.log("middleware: redirected to login");
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile", "/login", "/register", "/verifyemail"],
};
