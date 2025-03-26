import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

// Base Card component
const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`rounded-xl overflow-hidden bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
};

// Card Header for image
interface CardImageProps {
  src: string;
  alt?: string;
  height?: string;
}

const CardImage: React.FC<CardImageProps> = ({ src, alt = 'Card image', height = 'h-48' }) => {
  return (
    <div
      className={`w-full ${height} bg-gray-200 bg-center bg-cover`}
      style={{ backgroundImage: `url(${src})` }}
      aria-label={alt}
    />
  );
};

// Card Content for body
interface CardContentProps {
  children: ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  return <div className={`p-6 flex flex-col flex-grow ${className}`}>{children}</div>;
};

// Card Badge for category labels
interface CardBadgeProps {
  label: string;
  color: "green" | "blue" | "yellow" | string;
}

const CardBadge: React.FC<CardBadgeProps> = ({ label, color }) => {
  const getBgColor = (color: string): string => {
    const colors: { [key: string]: string } = {
      green: "bg-green-100",
      blue: "bg-blue-100",
      yellow: "bg-yellow-100",
    };
    return colors[color] || "bg-gray-100";
  };

  const getTextColor = (color: string): string => {
    const colors: { [key: string]: string } = {
      green: "text-green-800",
      blue: "text-blue-800",
      yellow: "text-yellow-800",
    };
    return colors[color] || "text-gray-800";
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${getBgColor(color)} ${getTextColor(color)}`}
    >
      {label}
    </span>
  );
};

// Card Title
interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className = '' }) => {
  return <h3 className={`text-xl font-bold text-gray-900 mb-2 ${className}`}>{children}</h3>;
};

// Card Description
interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = '' }) => {
  return <p className={`text-gray-600 mb-4 flex-grow ${className}`}>{children}</p>;
};

// Card Footer
interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => {
  return <div className={`mt-auto ${className}`}>{children}</div>;
};

// Metric Card specifically for metrics display
interface MetricCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, value, label }) => {
  return (
    <Card className="flex flex-col items-center p-7 bg-[#F0FDF4]">
      <div className="flex justify-center items-center h-11 mb-4">{icon}</div>
      <div className="text-4xl font-bold text-gray-800 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </Card>
  );
};

// Project Card specifically for project displays
interface ProjectCardProps {
  title: string;
  description: string;
  amount: string;
  category: string;
  categoryColor: "green" | "blue" | "yellow";
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  amount,
  category,
  categoryColor,
  image,
}) => {
  return (
    <Card className="flex flex-col">
      <CardImage src={image} alt={title} />
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <CardBadge label={category} color={categoryColor} />
          <span className="text-gray-600">{amount}</span>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <a
          href="#"
          className="text-green-700 hover:text-green-800 transition-colors"
        >
          Learn More →
        </a>
      </CardContent>
    </Card>
  );
};

export {
  Card,
  CardImage,
  CardContent,
  CardBadge,
  CardTitle,
  CardDescription,
  CardFooter,
  MetricCard,
  ProjectCard
};
