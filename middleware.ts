import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

const preventedRoutes = ["/signin", "/signup"];

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  console.log("======");

  const { pathname } = request.nextUrl;

  // If logged in and trying to access signin/signup → redirect to /settings
  if (sessionCookie && preventedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/settings", request.url));
  }

  // If NOT logged in and trying to access /settings → redirect to /
  if (!sessionCookie && pathname === "/settings") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signin", "/signup", "/settings"],
};
