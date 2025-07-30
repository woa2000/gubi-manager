import { HTMLAttributes } from 'react';

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'error' | 'purple' | 'pink';
  showLabel?: boolean;
  label?: string;
  animated?: boolean;
}

const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  size = 'md',
  variant = 'default',
  showLabel = false,
  label,
  animated = false,
  className = '',
  ...props
}) => {
  // Calculate percentage
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  // Size styles
  const sizeStyles = {
    sm: 'h-1',
    md: 'h-2', 
    lg: 'h-3',
  };

  // Variant styles using Gubi Design System colors
  const variantStyles = {
    default: 'bg-gubi-light-blue',
    success: 'bg-gubi-success',
    warning: 'bg-gubi-warning',
    error: 'bg-gubi-error',
    purple: 'bg-gubi-purple',
    pink: 'bg-gubi-pink',
  };

  // Base container styles
  const containerStyles = [
    'w-full bg-gubi-gray-100 rounded-full overflow-hidden',
    sizeStyles[size],
  ].join(' ');

  // Progress bar styles
  const progressStyles = [
    'h-full transition-all duration-gubi-slow ease-gubi rounded-full',
    variantStyles[variant],
    animated ? 'animate-pulse' : '',
  ].join(' ');

  return (
    <div className={`${className}`} {...props}>
      {/* Label */}
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-gubi-2">
          <span className="gubi-body-2 font-medium text-gubi-gray-900">
            {label || 'Progresso'}
          </span>
          {showLabel && (
            <span className="gubi-caption text-gubi-gray-700">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      {/* Progress Container */}
      <div 
        className={containerStyles}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-label={label || `Progresso: ${Math.round(percentage)}%`}
      >
        {/* Progress Bar */}
        <div
          className={progressStyles}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
