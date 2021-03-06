import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from '../../common/components/Button';

const NotFound = () => {
  const history = useHistory();

  return (
    <>
      <h2
        className="header-2"
        style={{ width: 'max-content', margin: '1rem auto' }}
      >
        404: This page doesn't exist
      </h2>
      <Button
        style={{ width: 'max-content', margin: '1rem auto', padding: '0 1rem' }}
        onClick={() => history.replace('/products')}
      >
        Go to the shop
      </Button>
    </>
  );
};

export default NotFound;
