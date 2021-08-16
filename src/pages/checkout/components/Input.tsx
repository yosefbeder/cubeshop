import React from 'react';

interface InputProps {
  error: string;
}

const Input: React.FC<React.HTMLAttributes<HTMLInputElement>> = () => {
  return <input />;
};

export default Input;
