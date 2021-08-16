import React from 'react';
import { Navbar } from '../../common/containers';

const index = () => {
  return (
    <>
      <Navbar />
      <h2
        className="header-2"
        style={{ width: 'max-content', margin: '1rem auto' }}
      >
        This page is still under development
      </h2>
    </>
  );
};

export default index;
