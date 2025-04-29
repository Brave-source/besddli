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

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<AuthResult>;
  register: (userData: RegisterFormData) => Promise<AuthResult>;
  logout: () => void;
  isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

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
      // Check for saved user and token in localStorage
      const savedUser = localStorage.getItem("user");
      const savedToken = localStorage.getItem("token");

      console.log("Found in localStorage:", { 
        hasUser: !!savedUser, 
        hasToken: !!savedToken 
      });

      if (savedUser && savedToken) {
        try {
          const parsedUser = JSON.parse(savedUser);
          console.log("Successfully parsed user:", { email: parsedUser.email });
          setUser(parsedUser);
        } catch (err) {
          console.error("Error parsing saved user:", err);
          // Clear invalid data
          localStorage.removeItem("user");
          localStorage.removeItem("token");
        }
      } else {
        // If either is missing, clear both to maintain consistency
        if (savedUser || savedToken) {
          console.log("Inconsistent auth state, clearing storage");
          localStorage.removeItem("user");
          localStorage.removeItem("token");
        }
      }
      
      console.log("Auth initialization complete");
      setLoading(false);
    };

    initAuth();
  }, []);

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
      });

      const data = await response.json();
      console.log("Login API response status:", data.status);

      if (data.status === "success" && data.data) {
        // Store auth data
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));

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
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    
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
    
    const token = localStorage.getItem("token");
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