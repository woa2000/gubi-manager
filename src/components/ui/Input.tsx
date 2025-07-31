import { InputHTMLAttributes, forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  onRightIconClick?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  hint,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onRightIconClick,
  className = '',
  id,
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
  const hasError = !!error;

  // Base styles following Gubi Design System
  const baseInputStyles = [
    'w-full px-4 py-3 rounded-lg border',
    'font-gubi-base text-base',
    'transition-all duration-200 ease-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-1',
    'disabled:bg-gubi-gray-100 disabled:text-gubi-gray-500 disabled:cursor-not-allowed',
    'placeholder:text-gubi-gray-500',
  ].join(' ');

  // State styles
  const stateStyles = hasError
    ? [
        'border-gubi-error text-gubi-error',
        'focus:border-gubi-error focus:ring-red-200',
      ].join(' ')
    : [
        'border-gubi-gray-300 text-gubi-gray-900',
        'hover:border-gubi-gray-500',
        'focus:border-gubi-purple focus:ring-purple-200',
      ].join(' ');

  // Icon styles
  const iconPadding = LeftIcon ? 'pl-10' : '';
  const rightIconPadding = RightIcon ? 'pr-10' : '';

  const combinedInputClassName = [
    baseInputStyles,
    stateStyles,
    iconPadding,
    rightIconPadding,
    className,
  ].join(' ');

  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-gubi-gray-900 mb-2"
        >
          {label}
          {props.required && <span className="text-gubi-error ml-1">*</span>}
        </label>
      )}

      {/* Input Container */}
      <div className="relative">
        {/* Left Icon */}
        {LeftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LeftIcon className="h-5 w-5 text-gubi-gray-500" />
          </div>
        )}

        {/* Input */}
        <input
          ref={ref}
          id={inputId}
          className={combinedInputClassName}
          {...props}
        />

        {/* Right Icon */}
        {RightIcon && (
          <div 
            className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
              onRightIconClick ? 'cursor-pointer' : 'pointer-events-none'
            }`}
            onClick={onRightIconClick}
          >
            <RightIcon className={`h-5 w-5 ${
              hasError ? 'text-gubi-error' : 'text-gubi-gray-500'
            }`} />
          </div>
        )}
      </div>

      {/* Hint or Error Message */}
      {(hint || error) && (
        <div className="mt-2">
          {error ? (
            <p className="text-xs text-gubi-error" role="alert">
              {error}
            </p>
          ) : hint ? (
            <p className="text-xs text-gubi-gray-500">
              {hint}
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
