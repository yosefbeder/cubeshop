import React from 'react';
import Layout from '../../common/containers/Layout';
import { ProductsList } from './containers';
import classes from './shop.module.css';

const Shop = () => {
  return (
    <Layout>
      <main className={classes.main}>
        <h1 className={`header-1 ${classes.header}`}>Shop all products</h1>
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
    </Layout>
  );
};

export default Shop;
