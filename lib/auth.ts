// lib/auth.ts
import Cookies from 'js-cookie';
import { User, LoginCredentials, AuthResponse, RegisterFormData } from '../types/auth';

// API Base URL
const API_BASE_URL = "https://www.errandsplus.ng/bess_api/api";

// Cookie options
const COOKIE_OPTIONS: Cookies.CookieAttributes = {
  expires: 1, // 1 day
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax'
};

/**
 * User Authentication Service
 */
const AuthService = {
  /**
   * Login user
   * @param {LoginCredentials} credentials - User credentials (email, password)
   * @returns {Promise<AuthResponse>} - Response with token and user data
   */
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      const data: AuthResponse = await response.json();
      
      if (data.status === "success" && data.data) {
        // Store auth data in localStorage and cookies
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));
        
        // Set cookies for server-side auth checks
        Cookies.set("token", data.data.token, COOKIE_OPTIONS);
        Cookies.set("user", JSON.stringify(data.data.user), COOKIE_OPTIONS);
      }
      
      return data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  /**
   * Register new user
   * @param {RegisterFormData} userData - User registration data
   * @returns {Promise<AuthResponse>} - Response with registration status
   */
  register: async (userData: RegisterFormData): Promise<AuthResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      return await response.json();
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  /**
   * Logout user
   */
  logout: (): void => {
    // Clear localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    
    // Clear cookies
    Cookies.remove("token");
    Cookies.remove("user");
    
    // Redirect to login page or home page
    window.location.href = "/login";
  },

  /**
   * Get current authenticated user
   * @returns {User|null} - User data or null if not authenticated
   */
  getCurrentUser: (): User | null => {
    // Try to get from localStorage first
    const userStr = localStorage.getItem("user");
    
    // If not in localStorage, try cookies
    if (!userStr) {
      const cookieUser = Cookies.get("user");
      return cookieUser ? JSON.parse(cookieUser) : null;
    }
    
    return JSON.parse(userStr);
  },

  /**
   * Get authentication token
   * @returns {string|null} - JWT token or null
   */
  getToken: (): string | null => {
    // Try localStorage first
    const token = localStorage.getItem("token");
    
    // If not in localStorage, try cookies
    if (!token) {
      return Cookies.get("token") || null;
    }
    
    return token;
  },

  /**
   * Check if user is authenticated
   * @returns {boolean} - True if user is authenticated
   */
  isAuthenticated: (): boolean => {
    return !!(AuthService.getToken());
  },

  /**
   * Get auth header for API requests
   * @returns {Record<string, string>} - Headers with Authorization token
   */
  getAuthHeader: (): Record<string, string> => {
    const token = AuthService.getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  },
};

export default AuthService;