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
    'bg-gubi-white rounded-gubi-lg border border-gubi-gray-300',
    'transition-all duration-gubi-base ease-gubi',
  ].join(' ');

  // Padding variants
  const paddingStyles = {
    sm: 'p-gubi-5', // 16px
    md: 'p-gubi-6', // 24px
    lg: 'p-gubi-7', // 32px
  };

  // Variant styles
  const variantStyles = {
    default: 'shadow-gubi-1',
    elevated: 'shadow-gubi-2',
    interactive: [
      'shadow-gubi-1 cursor-pointer',
      'hover:shadow-gubi-2 hover:-translate-y-1',
      'active:shadow-gubi-1 active:translate-y-0',
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
  <div className={`mb-gubi-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle: React.FC<HTMLAttributes<HTMLHeadingElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <h3 className={`gubi-h3 text-gubi-gray-900 ${className}`} {...props}>
    {children}
  </h3>
);

const CardDescription: React.FC<HTMLAttributes<HTMLParagraphElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <p className={`gubi-body-2 text-gubi-gray-700 ${className}`} {...props}>
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
  <div className={`mt-gubi-6 pt-gubi-4 border-t border-gubi-gray-300 ${className}`} {...props}>
    {children}
  </div>
);

// Export main component and sub-components
export default Card;
export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
