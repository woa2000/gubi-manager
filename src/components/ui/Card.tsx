// src/components/ui/Card.tsx
import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'interactive';
  padding?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  className = '',
  children,
  ...props
}) => {
  // Base styles following Gubi Design System
  const baseStyles = [
    'bg-gubi-white rounded-lg border border-gubi-gray-300',
    'transition-all duration-200 ease-out',
  ].join(' ');

  // Padding variants
  const paddingStyles = {
    sm: 'p-4', // 16px
    md: 'p-6', // 24px
    lg: 'p-8', // 32px
  };

  // Variant styles
  const variantStyles = {
    default: 'shadow-sm',
    elevated: 'shadow-md',
    interactive: [
      'shadow-sm cursor-pointer',
      'hover:shadow-md hover:-translate-y-1',
      'active:shadow-sm active:translate-y-0',
    ].join(' '),
  };

  const combinedClassName = [
    baseStyles,
    paddingStyles[padding],
    variantStyles[variant],
    className,
  ].join(' ');

  return (
    <div className={combinedClassName} {...props}>
      {children}
    </div>
  );
};

// Sub-components for better composition
const CardHeader: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <h3 className={`text-xl font-semibold text-gubi-gray-900 ${className}`} {...props}>
    {children}
  </h3>
);

const CardDescription: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <p className={`text-sm text-gubi-gray-700 ${className}`} {...props}>
    {children}
  </p>
);

const CardContent: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);

const CardFooter: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={`mt-6 pt-4 border-t border-gubi-gray-300 ${className}`} {...props}>
    {children}
  </div>
);

// Export main component and sub-components
export default Card;
export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
