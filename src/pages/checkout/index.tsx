import React from 'react';
import { Navbar, Footer } from '../../common/containers';
import { Form, Summary } from './containers';
import classes from './checkout.module.css';

const index = () => {
  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <Form />
        <Summary />
      </main>
      <Footer />
    </>
  );
};

export default index;
