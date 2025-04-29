"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id?: string;
  email: string;
  first_name?: string;
  last_name?: string;
  name?: string;
  phone?: string;
  phone_number?: string;
}

interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

interface RegisterFormData {
  first_name: string;
  middle_name: string;
  last_name: string;
  dob: string;
  gender: string;
  nationality: string;
  state_of_origin: string;
  lga: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  street: string;
  city: string;
  province: string;
  country: string;
  preferred_modes: string[];
}

interface AuthResult {
  success: boolean;
  message?: string;
  user?: User;
  token?: string;
}

interface TokenData {
  token: string;
  expiresAt: number; // Unix timestamp
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<AuthResult>;
  register: (userData: RegisterFormData) => Promise<AuthResult>;
  logout: () => void;
  isAuthenticated: () => boolean;
  refreshToken: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

// Token storage with encryption helper (basic)
const TokenStorage = {
  // Store token with expiration (default 1 day if not specified)
  setToken: (token: string, rememberMe = false): void => {
    try {
      const expiresAt = Date.now() + (rememberMe ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000);
      const tokenData: TokenData = { token, expiresAt };
      
      // For better security, we'd use HttpOnly cookies set by the server
      // This is a fallback when that's not possible
      sessionStorage.setItem("authToken", JSON.stringify(tokenData));
      
      // Only store in localStorage for "remember me"
      if (rememberMe) {
        localStorage.setItem("authToken", JSON.stringify(tokenData));
      }
    } catch (err) {
      console.error("Error storing token:", err);
    }
  },
  
  // Get token from storage (checks expiration)
  getToken: (): string | null => {
    try {
      // Try sessionStorage first (current session)
      let tokenData = sessionStorage.getItem("authToken");
      
      // If not in session, try localStorage (remember me)
      if (!tokenData) {
        tokenData = localStorage.getItem("authToken");
      }
      
      if (!tokenData) return null;
      
      const { token, expiresAt } = JSON.parse(tokenData) as TokenData;
      
      // Check if token is expired
      if (Date.now() > expiresAt) {
        // Clean up expired token
        TokenStorage.clearToken();
        return null;
      }
      
      return token;
    } catch (err) {
      console.error("Error retrieving token:", err);
      return null;
    }
  },
  
  // Clear token from all storages
  clearToken: (): void => {
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("authToken");
  }
};

// User storage helper
const UserStorage = {
  setUser: (user: User): void => {
    try {
      sessionStorage.setItem("authUser", JSON.stringify(user));
    } catch (err) {
      console.error("Error storing user:", err);
    }
  },
  
  getUser: (): User | null => {
    try {
      const userData = sessionStorage.getItem("authUser");
      return userData ? JSON.parse(userData) : null;
    } catch (err) {
      console.error("Error retrieving user:", err);
      return null;
    }
  },
  
  clearUser: (): void => {
    sessionStorage.removeItem("authUser");
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Initialize auth state on component mount
  useEffect(() => {
    // This ensures the auth check runs only in browser, not during SSR
    if (typeof window === 'undefined') {
      setLoading(false);
      return;
    }
    
    const initAuth = async () => {
      console.log("AuthContext initializing...");
      
      // Get token and check if it's valid
      const token = TokenStorage.getToken();
      const savedUser = UserStorage.getUser();

      console.log("Found in storage:", { 
        hasUser: !!savedUser, 
        hasToken: !!token 
      });

      if (token && savedUser) {
        // Optionally validate token with your API here
        setUser(savedUser);
      } else {
        // Clear any inconsistent state
        TokenStorage.clearToken();
        UserStorage.clearUser();
      }
      
      console.log("Auth initialization complete");
      setLoading(false);
    };

    initAuth();
  }, []);

  // Token refresh method
  const refreshToken = async (): Promise<boolean> => {
    const token = TokenStorage.getToken();
    if (!token) return false;
    
    try {
      const response = await fetch("/api/refresh-token", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      });
      
      const data = await response.json();
      
      if (data.status === "success" && data.data.token) {
        // Update token with new one
        TokenStorage.setToken(data.data.token);
        return true;
      } else {
        // If refresh failed, logout
        logout();
        return false;
      }
    } catch (error) {
      console.error("Token refresh error:", error);
      return false;
    }
  };

  // Login method
  const login = async (credentials: LoginCredentials): Promise<AuthResult> => {
    console.log("Login attempt with:", credentials.email);
    try {
      setLoading(true);

      // Use API proxy to avoid CORS issues
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
        // Include credentials to allow cookies to be sent/received
        credentials: "include"
      });

      const data = await response.json();
      console.log("Login API response status:", data.status);

      if (data.status === "success" && data.data) {
        // Store auth data
        TokenStorage.setToken(data.data.token, credentials.rememberMe);
        UserStorage.setUser(data.data.user);

        console.log("Login successful, setting user:", { email: data.data.user.email });
        setUser(data.data.user);
        
        return {
          success: true,
          user: data.data.user,
          token: data.data.token,
        };
      } else {
        console.log("Login failed:", data.message);
        return {
          success: false,
          message: data.message || "Login failed",
        };
      }
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        message: "Network error. Please try again.",
      };
    } finally {
      setLoading(false);
    }
  };

  // Register method
  const register = async (userData: RegisterFormData): Promise<AuthResult> => {
    console.log("Registration attempt for:", userData.email);
    try {
      setLoading(true);

      // Use API proxy to avoid CORS issues
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: userData.first_name,
          middle_name: userData.middle_name,
          last_name: userData.last_name,
          dob: userData.dob,
          gender: userData.gender,
          nationality: userData.nationality,
          state_of_origin: userData.state_of_origin,
          lga: userData.lga,
          email: userData.email,
          phone: userData.phone,
          password: userData.password,
          street: userData.street,
          city: userData.city,
          province: userData.province,
          country: userData.country,
          preferred_modes: userData.preferred_modes,
        }),
        // Include credentials to allow cookies to be set
        credentials: "include"
      });

      const data = await response.json();
      console.log("Registration API response:", data.status);

      return {
        success: data.status === "success",
        message: data.message,
        user: data.data?.user,
      };
    } catch (error) {
      console.error("Registration error:", error);
      return {
        success: false,
        message: "Network error. Please try again.",
      };
    } finally {
      setLoading(false);
    }
  };

  // Logout method
  const logout = (): void => {
    console.log("Logging out user");
    
    // Clear token and user from storage
    TokenStorage.clearToken();
    UserStorage.clearUser();
    setUser(null);
    
    // Call logout endpoint (optional, to invalidate token on server)
    fetch("/api/logout", {
      method: "POST",
      credentials: "include"
    }).catch(err => console.error("Logout API error:", err));
    
    // Use direct navigation to avoid router issues
    if (typeof window !== 'undefined') {
      window.location.href = "/login";
    }
  };

  // Check if user is authenticated
  const isAuthenticated = (): boolean => {
    // Safety check for SSR
    if (typeof window === 'undefined') {
      return false;
    }
    
    const token = TokenStorage.getToken();
    const authState = !!user && !!token;
    
    console.log("Authentication check:", { 
      hasUser: !!user, 
      hasToken: !!token,
      userEmail: user?.email || 'none',
      isAuthenticated: authState 
    });
    
    return authState;
  };

  // Auth context value
  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated,
    refreshToken
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;