"use client";

import React, { ElementType, ComponentPropsWithoutRef } from "react";
import Link from "next/link";

// Define a polymorphic component type
type PolymorphicProps<E extends ElementType = ElementType, P = object> = P & {
  as?: E;
  className?: string;
} & Omit<ComponentPropsWithoutRef<E>, "as" | keyof P | "className">;

// Define the props for our button component
type ButtonOwnProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
  href?: string;
};

export type ButtonProps<E extends ElementType = "button"> = PolymorphicProps<
  E,
  ButtonOwnProps
>;

const Button = <E extends ElementType = "button">({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  as,
  href,
  ...props
}: ButtonProps<E>) => {
  // Base styles that apply to all buttons
  const baseStyles =
    "rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 text-center";

  // Variant-specific styles
  const variantStyles = {
    primary: "bg-green-700 text-white hover:bg-green-800 focus:ring-green-500",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-500",
    outline:
      "border border-green-700 text-green-700 hover:bg-green-50 focus:ring-green-500",
  };

  // Size-specific styles
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-2.5 text-lg",
  };

  // Width styles
  const widthStyles = fullWidth ? "w-full" : "";

  // Combine all styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

  // Determine the component to render
  const Component = as || ((href ? Link : "button") as ElementType);

  // If it's a Link, we need to pass href as a prop
  const componentProps =
    href && Component === Link ? { href, ...props } : props;

  return (
    <Component className={buttonStyles} {...componentProps}>
      {children}
    </Component>
  );
};

export default Button;