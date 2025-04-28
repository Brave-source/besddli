// app/providers.tsx
"use client";

import React, { ReactNode } from 'react';
import { AuthProvider } from "../context/AuthContext";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}