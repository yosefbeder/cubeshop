import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps {
  children: string;
  icon: IconType;
  variant?: 'contained' | 'outlined';
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> =
  props => {
    const {
      children,
      icon: Icon,
      variant = 'contained',
      isLoading = false,
      className,
      ...buttonElProps
    } = props;

    return (
      <button
        {...buttonElProps}
        className={`button button--${variant} ${className}`}
      >
        {isLoading ? (
          <LoadingSpinner className="button__loading-spinner" />
        ) : (
          <>
            <div className="button__text">{children}</div>
            <Icon className="button__icon" />
          </>
        )}
      </button>
    );
  };

export default Button;
