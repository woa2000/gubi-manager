import { ButtonHTMLAttributes, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'destructive' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  children: ReactNode;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  className = '',
  loading = false,
  disabled,
  ...props
}) => {
  // Base styles following Gubi Design System
  const baseStyles = [
    'inline-flex items-center justify-center font-medium',
    'transition-all duration-gubi-base ease-gubi',
    'border border-transparent',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'min-h-[44px]', // Accessibility: minimum touch target
  ].join(' ');

  // Size variants
  const sizeStyles = {
    sm: 'px-gubi-4 py-gubi-2 text-gubi-body-2 rounded-gubi-sm h-8', // 32px
    md: 'px-gubi-6 py-gubi-3 text-gubi-body-1 rounded-gubi-md h-10', // 40px  
    lg: 'px-gubi-7 py-gubi-4 text-gubi-body-1 rounded-gubi-md h-12', // 48px
  };

  // Variant styles using Gubi Design System colors
  const variantStyles = {
    primary: [
      'bg-gubi-purple text-gubi-white shadow-gubi-1',
      'hover:bg-gubi-purple-dark hover:shadow-gubi-2',
      'active:bg-gubi-purple-dark active:shadow-gubi-1',
      'focus-visible:outline-gubi-purple',
    ].join(' '),
    
    secondary: [
      'bg-gubi-pink text-gubi-white shadow-gubi-1',
      'hover:bg-[#d14a89] hover:shadow-gubi-2',
      'active:bg-[#d14a89] active:shadow-gubi-1', 
      'focus-visible:outline-gubi-pink',
    ].join(' '),
    
    tertiary: [
      'bg-transparent text-gubi-purple border-gubi-purple',
      'hover:bg-gubi-purple hover:text-gubi-white',
      'active:bg-gubi-purple-dark active:text-gubi-white',
      'focus-visible:outline-gubi-purple',
    ].join(' '),
    
    destructive: [
      'bg-gubi-error text-gubi-white shadow-gubi-1',
      'hover:bg-red-600 hover:shadow-gubi-2',
      'active:bg-red-700 active:shadow-gubi-1',
      'focus-visible:outline-gubi-error',
    ].join(' '),
    
    ghost: [
      'bg-transparent text-gubi-gray-700 hover:bg-gubi-gray-100',
      'active:bg-gubi-gray-300',
      'focus-visible:outline-gubi-gray-500',
    ].join(' '),
  };

  const combinedClassName = [
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className,
  ].join(' ');

  return (
    <button
      className={combinedClassName}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
          Carregando...
        </>
      ) : (
        <>
          {Icon && <Icon size={size === 'sm' ? 16 : 18} className="mr-2" />}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
