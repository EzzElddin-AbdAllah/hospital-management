import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const secret = process.env.NEXTAUTH_SECRET;

  const token = await getToken({ req, secret });

  if (!token || token.role !== "admin") {
    return new NextResponse(
      JSON.stringify({
        message: "You are not authorized to access this resource.",
      }),
      {
        status: 403,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/admin/:path*",
};
