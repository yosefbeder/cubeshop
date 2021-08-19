import React from 'react';
import { useState } from 'react';

interface InfoProps {
  name: string;
  price: number;
  description: string;
  available: number;
}

const Info: React.FC<InfoProps> = ({ name, price, description, available }) => {
  const [quantity, setQuantity] = useState(1);

  return <></>;
};

export default Info;
