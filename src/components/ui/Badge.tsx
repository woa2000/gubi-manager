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
    'transition-all duration-150 ease-out',
  ].join(' ');

  // Size variants
  const sizeStyles = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-2 text-sm',
  };

  // Color variants using Gubi Design System colors
  const variantStyles = {
    default: 'bg-[#F5F7FA] text-[#7B8794] border border-[#CBD2D9]',
    success: 'bg-green-100 text-green-800 border border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border border-yellow-200',
    error: 'bg-red-100 text-red-800 border border-red-200',
    info: 'bg-blue-100 text-blue-800 border border-blue-200',
    purple: 'bg-purple-100 text-[#5A439B] border border-purple-200',
    pink: 'bg-pink-100 text-[#E85A9B] border border-pink-200',
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
