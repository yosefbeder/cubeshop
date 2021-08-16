import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'med' | 'lg';
}

const LoadingSpinner: React.FC<
  LoadingSpinnerProps &
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >
> = props => {
  const { className, size = 'med', ...divElProps } = props;

  return (
    <div
      className={`loading-spinner loading-spinner--${size} ${className}`}
      {...divElProps}
    />
  );
};

export default LoadingSpinner;
