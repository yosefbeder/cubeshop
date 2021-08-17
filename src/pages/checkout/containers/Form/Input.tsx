import React from 'react';
import classes from './Form.module.css';

interface InputProps {
  hasError: boolean;
  fullWidth?: boolean;
}

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & React.HTMLAttributes<HTMLInputElement>
>((props, ref) => {
  const { hasError, className, fullWidth = false, ...inputElProps } = props;

  return (
    <input
      className={`${classes.input} ${hasError && classes['input--invalid']} ${
        fullWidth && classes['input--full-width']
      } ${className}`}
      ref={ref}
      {...inputElProps}
    />
  );
});

export default Input;
