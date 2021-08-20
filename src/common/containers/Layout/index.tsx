import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useAppSelector } from '../../../hooks/redux';

const Layout: React.FC = ({ children }) => {
  const bag = useAppSelector(state => state.bag.data);
  const bagIsLoaded = useAppSelector(state => state.bag.status) === 'loaded';

  return bagIsLoaded ? (
    <>
      <Navbar bagItems={bag!.items} subtotal={bag!.subtotal} />
      {children}
      <Footer />
    </>
  ) : null;
};

export default Layout;
