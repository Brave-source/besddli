"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, FormEvent, ChangeEvent, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

// Create a client component that uses searchParams
function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, isAuthenticated, loading, user } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);

  // Debug: Log auth state
  useEffect(() => {
    console.log("Auth state in Login:", {
      loading,
      user,
      token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
      isAuthenticated: isAuthenticated(),
      authChecked
    });
  }, [loading, user, isAuthenticated, authChecked]);

  // Check if user is coming from registration and authentication status
  useEffect(() => {
    // Only run after auth has finished loading
    if (!loading) {
      // Check for registration success
      const registered = searchParams.get("registered");
      if (registered === "true") {
        setSuccess("Registration successful! Please login with your credentials.");
      }
      
      // If already authenticated, redirect to dashboard
      if (isAuthenticated()) {
        console.log("Already authenticated, redirecting to dashboard");
        router.push("/dashboard");
      }
      
      setAuthChecked(true);
    }
  }, [searchParams, router, isAuthenticated, loading]);

  // Skip rendering until authentication is checked
  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        <div className="ml-3 text-gray-700">Checking authentication...</div>
      </div>
    );
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormLoading(true);
    setError("");
    setSuccess("");

    try {
      const result = await login({
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe
      });

      if (result.success) {
        router.push("/dashboard");
      } else {
        setError(result.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
      console.error("Login error:", err);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/login-bg.png"
          alt="Login Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Login Modal */}
      <div className="bg-white bg-opacity-80 p-6 sm:p-8 rounded-xl shadow-lg z-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Login
        </h1>

        {/* Error/Success message display */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
            {success}
          </div>
        )}

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800 placeholder-gray-500"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded cursor-pointer"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-gray-800"
              >
                Remember me
              </label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm text-green-600 hover:text-green-500"
            >
              Forgot your password?
            </Link>
          </div>

          <div>
            <button
              type="submit"
              disabled={formLoading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-green-400"
            >
              {formLoading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        {/* Divider with "Or" */}
        <div className="mt-6 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white bg-opacity-80 text-gray-500">
              Or
            </span>
          </div>
        </div>

        {/* Social Login Options */}
        <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
          {/* Google */}
          <button
            type="button"
            className="bg-white p-2 rounded-md shadow-sm flex justify-center items-center hover:bg-gray-50"
          >
            <span className="sr-only">Sign in with Google</span>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          </button>

          {/* Apple */}
          <button
            type="button"
            className="bg-white p-2 rounded-md shadow-sm flex justify-center items-center hover:bg-gray-50"
          >
            <span className="sr-only">Sign in with Apple</span>
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"
                fill="#000000"
              />
            </svg>
          </button>

          {/* Facebook */}
          <button
            type="button"
            className="bg-white p-2 rounded-md shadow-sm flex justify-center items-center hover:bg-gray-50"
          >
            <span className="sr-only">Sign in with Facebook</span>
            <svg
              className="h-6 w-6"
              fill="#1877F2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don`t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-green-600 hover:text-green-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// Main Page Component with Suspense
export default function Login() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
        <div className="ml-3 text-gray-700">Loading...</div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}