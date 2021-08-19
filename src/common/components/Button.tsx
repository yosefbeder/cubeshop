import React, { ButtonHTMLAttributes } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps {
  children: string;
  variant?: 'contained' | 'outlined';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> =
  props => {
    const {
      children,
      variant = 'contained',
      isLoading = false,
      className,
      disabled,
      ...buttonElProps
    } = props;

    return (
      <button
        {...buttonElProps}
        className={`button button--${variant} ${className}`}
        disabled={isLoading}
      >
        {isLoading ? (
          <LoadingSpinner className="button__loading-spinner" />
        ) : (
          children
        )}
      </button>
    );
  };

export default Button;
