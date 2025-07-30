import { HTMLAttributes, ReactNode } from 'react';
import { AlertCircle, CheckCircle, Info, XCircle, X } from 'lucide-react';

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'warning' | 'error' | 'info';
  title?: string;
  children: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  dismissible = false,
  onDismiss,
  className = '',
  ...props
}) => {
  // Icon mapping
  const icons = {
    success: CheckCircle,
    warning: AlertCircle,
    error: XCircle,
    info: Info,
  };

  const Icon = icons[variant];

  // Variant styles following Gubi Design System
  const variantStyles = {
    success: {
      container: 'bg-green-50 border-green-200 text-green-800',
      icon: 'text-green-600',
      title: 'text-green-900',
    },
    warning: {
      container: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      icon: 'text-yellow-600',
      title: 'text-yellow-900',
    },
    error: {
      container: 'bg-red-50 border-red-200 text-red-800',
      icon: 'text-red-600',
      title: 'text-red-900',
    },
    info: {
      container: 'bg-blue-50 border-blue-200 text-blue-800',
      icon: 'text-blue-600',
      title: 'text-blue-900',
    },
  };

  const styles = variantStyles[variant];

  // Base styles
  const baseStyles = [
    'border border-l-4 rounded-gubi-md p-gubi-4',
    'transition-all duration-gubi-base ease-gubi',
    styles.container,
  ].join(' ');

  const combinedClassName = [baseStyles, className].join(' ');

  return (
    <div className={combinedClassName} role="alert" {...props}>
      <div className="flex items-start">
        {/* Icon */}
        <div className="flex-shrink-0">
          <Icon className={`h-5 w-5 ${styles.icon}`} />
        </div>

        {/* Content */}
        <div className="ml-gubi-3 flex-1">
          {title && (
            <h4 className={`gubi-body-1 font-medium mb-gubi-1 ${styles.title}`}>
              {title}
            </h4>
          )}
          <div className="gubi-body-2">
            {children}
          </div>
        </div>

        {/* Dismiss Button */}
        {dismissible && onDismiss && (
          <div className="ml-gubi-3 flex-shrink-0">
            <button
              type="button"
              className={`inline-flex rounded-gubi-md p-1.5 hover:bg-black/5 transition-colors duration-gubi-fast ${styles.icon}`}
              onClick={onDismiss}
              aria-label="Fechar alerta"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;
