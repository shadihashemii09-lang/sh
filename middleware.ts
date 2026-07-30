import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const session = req.nextauth.token;

    if (pathname.startsWith("/admin")) {
      if (!session || session.role !== "ADMIN") {
        return NextResponse.rewrite(new URL("/auth/signin", req.url));
      }
    }

    if (pathname.startsWith("/business")) {
      if (!session || (session.role !== "BUSINESS_OWNER" && session.role !== "ADMIN")) {
        return NextResponse.rewrite(new URL("/auth/signin", req.url));
      }
    }

    if (pathname.startsWith("/employee")) {
      if (!session || (session.role !== "EMPLOYEE" && session.role !== "ADMIN")) {
        return NextResponse.rewrite(new URL("/auth/signin", req.url));
      }
    }

    if (pathname.startsWith("/customer") && pathname.includes("/dashboard")) {
      if (!session || session.role !== "CUSTOMER") {
        return NextResponse.rewrite(new URL("/auth/signin", req.url));
      }
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized({ token }) {
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|icons).*)",
  ],
};