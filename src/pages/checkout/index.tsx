import React from 'react';
import { Form, Summary } from './containers';
import classes from './checkout.module.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Layout from '../../common/containers/Layout';

const stripePromise = loadStripe(
  'pk_test_51JPL8oIHAJyY80XCOk8lkmZIflBnbfvZdSqPELxp0myENg9zFj57iFcXJn3sQ6EUR0F1fsOENveBYgSCD5MU1kQp00I57fCoJk',
);

const index = () => {
  return (
    <Layout>
      <main className={classes.main}>
        <h1 className={`header-1 ${classes.header}`}>Checkout</h1>
        <div className={classes.container}>
          <Elements stripe={stripePromise}>
            <Form />
          </Elements>
          <Summary />
        </div>
      </main>
    </Layout>
  );
};

export default index;
