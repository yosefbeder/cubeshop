import React from 'react';
import { Navbar, Footer } from '../../common/containers';
import { ProductsList } from './containers';
import classes from './shop.module.css';

const index = () => {
  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <h2 className={`header-2 ${classes.header}`}>Shop all products</h2>
        <p className={`p-1 ${classes.p}`}>
          We buy the best cubes in the world and sell them with the best prices
          in the world!
        </p>
        <p className="p-1">
          All of our products have a warranty for a full year, and can be
          replaced or returned back within 14 days of receiving the product.
        </p>
        <ProductsList />
      </main>
      <Footer />
    </>
  );
};

export default index;
