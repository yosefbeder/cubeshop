import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';

const NotAvailable = () => {
  const history = useHistory();

  return (
    <>
      <h2
        className="header-2"
        style={{ width: 'max-content', margin: '1rem auto' }}
      >
        This page isn't available at the moment
      </h2>
      <Button
        style={{ width: 'max-content', margin: '1rem auto', padding: '0 1rem' }}
        onClick={() => history.push('/products')}
      >
        Go the shop
      </Button>
    </>
  );
};

export default NotAvailable;
