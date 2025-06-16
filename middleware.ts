import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/",
    "/discovery",
    "/discovery/(.*)",
    "/care-plans",
    "/behavioral",
    "/api/webhooks/(.*)",
    "/api/payment/(.*)",
    "/sign-in",
    "/sign-up"
  ],
  // Routes that require authentication
  ignoredRoutes: [
    "/api/webhooks/(.*)",
    "/_next/(.*)",
    "/favicon.ico"
  ],
  // After sign in, redirect based on user role
  afterAuth(auth, req, evt) {
    // Handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    
    // If the user is logged in and trying to access a protected route, allow them to access it
    if (auth.userId && !auth.isPublicRoute) {
      return NextResponse.next();
    }
    
    // Allow users visiting public routes to access them
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
