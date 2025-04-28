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
    
    const initAuth = () => {
      console.log("Initializing auth state...");
      // Check for saved user and token in localStorage
      const savedUser = localStorage.getItem("user");
      const savedToken = localStorage.getItem("token");
      
      console.log("Initial auth check:", { 
        hasUser: !!savedUser, 
        hasToken: !!savedToken 
      });

      if (savedUser && savedToken) {
        try {
          setUser(JSON.parse(savedUser));
          console.log("User loaded from localStorage");
        } catch (err) {
          console.error("Error parsing saved user:", err);
          // Clear invalid data
          localStorage.removeItem("user");
          localStorage.removeItem("token");
        }
      } else {
        // If either is missing, clear both to maintain consistency
        if (savedUser || savedToken) {
          console.log("Inconsistent auth state, clearing...");
          localStorage.removeItem("user");
          localStorage.removeItem("token");
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  // Login method
  const login = async (credentials: LoginCredentials): Promise<AuthResult> => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://www.errandsplus.ng/bess_api/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        }
      );

      const data = await response.json();

      if (data.status === "success" && data.data) {
        // Store auth data
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));

        setUser(data.data.user);

        return {
          success: true,
          user: data.data.user,
          token: data.data.token,
        };
      } else {
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
    try {
      setLoading(true);

      const response = await fetch(
        "https://www.errandsplus.ng/bess_api/api/register",
        {
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
        }
      );

      const data = await response.json();

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
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/login";
  };

  // Check if user is authenticated - with improved safety
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

  // Only render children after loading is complete
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