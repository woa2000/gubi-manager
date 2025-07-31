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
    'transition-all duration-200 ease-out',
    'border border-transparent',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'min-h-[44px]', // Accessibility: minimum touch target
  ].join(' ');

  // Size variants
  const sizeStyles = {
    sm: 'px-3 py-2 text-sm rounded-md h-8', // 32px
    md: 'px-6 py-3 text-base rounded-lg h-10', // 40px  
    lg: 'px-8 py-4 text-base rounded-lg h-12', // 48px
  };

  // Variant styles using Gubi Design System colors
  const variantStyles = {
    primary: [
      'bg-[#5A439B] text-white shadow-sm',
      'hover:bg-[#4A3784] hover:shadow-md',
      'active:bg-[#4A3784] active:shadow-sm',
      'focus-visible:outline-[#5A439B]',
    ].join(' '),
    
    secondary: [
      'bg-[#E85A9B] text-white shadow-sm',
      'hover:bg-[#d14a89] hover:shadow-md',
      'active:bg-[#d14a89] active:shadow-sm', 
      'focus-visible:outline-[#E85A9B]',
    ].join(' '),
    
    tertiary: [
      'bg-transparent text-[#5A439B] border border-[#5A439B]',
      'hover:bg-[#5A439B] hover:text-white',
      'active:bg-[#4A3784] active:text-white',
      'focus-visible:outline-[#5A439B]',
    ].join(' '),
    
    destructive: [
      'bg-[#FF3B30] text-white shadow-sm',
      'hover:bg-red-600 hover:shadow-md',
      'active:bg-red-700 active:shadow-sm',
      'focus-visible:outline-[#FF3B30]',
    ].join(' '),
    
    ghost: [
      'bg-transparent text-[#3E4C59] hover:bg-[#F5F7FA]',
      'active:bg-[#CBD2D9]',
      'focus-visible:outline-[#7B8794]',
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
