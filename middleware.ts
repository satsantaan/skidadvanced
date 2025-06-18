import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simple middleware for development/production without Clerk
export function middleware(request: NextRequest) {
  // Allow all routes in development mode
  // In production with Clerk, this would handle authentication

  // For now, allow all requests to pass through
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
