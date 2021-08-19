import React, { InputHTMLAttributes } from 'react';

interface InputProps {
  hasError?: boolean;
}

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { hasError, className, ...inputElProps } = props;

  return (
    <input
      className={`input ${hasError && 'input--invalid'} ${className}`}
      ref={ref}
      {...inputElProps}
    />
  );
});

export default Input;
