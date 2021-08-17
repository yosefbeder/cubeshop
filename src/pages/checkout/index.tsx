import React from 'react';
import { Navbar, Footer } from '../../common/containers';
import { Form, Summary } from './containers';
import classes from './checkout.module.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(
  'pk_test_51JPL8oIHAJyY80XCOk8lkmZIflBnbfvZdSqPELxp0myENg9zFj57iFcXJn3sQ6EUR0F1fsOENveBYgSCD5MU1kQp00I57fCoJk',
);

const index = () => {
  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <h2 className={`header-2 ${classes.header}`}>Checkout</h2>
        <div className={classes.container}>
          <Elements stripe={stripePromise}>
            <Form />
          </Elements>
          <Summary />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default index;
