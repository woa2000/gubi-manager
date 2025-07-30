import { HTMLAttributes, ReactNode } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'purple' | 'pink';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  // Base styles following Gubi Design System
  const baseStyles = [
    'inline-flex items-center font-medium rounded-full',
    'transition-all duration-gubi-fast ease-gubi',
  ].join(' ');

  // Size variants
  const sizeStyles = {
    sm: 'px-gubi-2 py-gubi-1 text-xs',
    md: 'px-gubi-3 py-gubi-1 gubi-caption',
    lg: 'px-gubi-4 py-gubi-2 gubi-body-2',
  };

  // Color variants using Gubi Design System colors
  const variantStyles = {
    default: 'bg-gubi-gray-100 text-gubi-gray-700 border border-gubi-gray-300',
    success: 'bg-green-100 text-green-800 border border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    error: 'bg-red-100 text-red-800 border border-red-200',
    info: 'bg-blue-100 text-blue-800 border border-blue-200',
    purple: 'bg-purple-100 text-gubi-purple border border-purple-200',
    pink: 'bg-pink-100 text-gubi-pink border border-pink-200',
  };

  const combinedClassName = [
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className,
  ].join(' ');

  return (
    <span className={combinedClassName} {...props}>
      {children}
    </span>
  );
};

export default Badge;
