import React from 'react';

interface IconButtonProps {
  hasBadge?: boolean;
  size?: 'sm' | 'med' | 'lg';
}

const IconButton: React.FC<
  IconButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = props => {
  const {
    children,
    className,
    hasBadge = false,
    size = 'med',
    ...buttonElProps
  } = props;

  return (
    <button
      {...buttonElProps}
      className={`icon-button icon-button--${size} ${className}`}
    >
      {children}
      {hasBadge && <div className="icon-button__badge" />}
    </button>
  );
};

export default IconButton;
