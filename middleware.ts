import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the path of the request
  const path = request.nextUrl.pathname;

  // Paths that are considered public (no auth required)
  const publicPaths = ['/login', '/register', '/', '/about', '/contact'];
  const isPublicPath = publicPaths.includes(path) || 
                      path.startsWith('/api/') || 
                      path.includes('.') || // Static files like images
                      path.startsWith('/_next');

  // Check for the token in cookies
  const token = request.cookies.get('token')?.value;
  const isAuthenticated = !!token;

  // IMPORTANT: Only handle protected routes
  // Do NOT redirect login/register pages regardless of auth status
  if (!isPublicPath && !isAuthenticated) {
    // Redirect to login if accessing protected route without auth
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Let all other paths pass through
  return NextResponse.next();
}

// Configure which paths should trigger this middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|images/).*)',
  ],
};