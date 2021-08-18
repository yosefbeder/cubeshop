import React from 'react';

interface IconButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary';
}

const IconButton: React.FC<
  IconButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = props => {
  const { children, className, variant, ...buttonElProps } = props;

  return (
    <button
      {...buttonElProps}
      className={`icon-button icon-button--${variant} ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
