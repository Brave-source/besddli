// types/auth.ts

export interface User {
    id?: string;
    email: string;
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    phone?: string;
    phone_number?: string;
    gender?: string;
    nationality?: string;
    state_of_origin?: string;
    local_government?: string;
    street?: string;
    city?: string;
    province?: string;
    country?: string;
    preferred_communication?: string | string[];
    name?: string; // fallback for some API responses
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
    rememberMe?: boolean;
  }
  
  export interface RegisterFormData {
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
  
  export interface AuthResponse {
    status: string;
    message: string;
    data?: {
      token: string;
      user: User;
    };
  }
  
  export interface AuthResult {
    success: boolean;
    message?: string;
    user?: User;
    token?: string;
  }