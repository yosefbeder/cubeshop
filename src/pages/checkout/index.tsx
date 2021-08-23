import React, { useState } from 'react';
import { Form, Summary } from './containers';
import classes from './checkout.module.css';
import { loadStripe, Stripe, StripeElements } from '@stripe/stripe-js';
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js';
import Layout from '../../common/containers/Layout';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useEffect } from 'react';
import { actions as bagActions } from '../../store/bag';

import { OptionTypeBase } from 'react-select';
import { useForm } from 'react-hook-form';
import { commerce } from '../../api/commerce';
import { formatPriceEGP } from '../../utils/numbers';
import { useHistory } from 'react-router-dom';

const stripePublicKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY!;

console.log(stripePublicKey);

const stripePromise = loadStripe(stripePublicKey);

const country = 'EG';

export interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  phoneNumber: string;
}

const Checkout = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const bag = useAppSelector(state => state.bag.data)!;
  const bagIsLoaded = useAppSelector(state => state.bag.status) === 'loaded';
  const [checkoutTokenId, setCheckoutTokenId] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCapturingOrder, setIsCapturingOrder] = useState(false);

  // disabling the bag
  useEffect(() => {
    dispatch(bagActions.disableBag());

    return () => {
      dispatch(bagActions.enableBag());
    };
  }, [dispatch]);

  // Form
  const formMethods = useForm<FormState>();
  const [subdivision, setSubdivision] = useState<OptionTypeBase | null>(null);
  const [subdivisions, setSubdivisions] = useState<OptionTypeBase[]>([]);
  const [shippingOption, setShippingOption] = useState<OptionTypeBase | null>(
    null,
  );
  const [shippingOptions, setShippingOptions] = useState<OptionTypeBase[]>([]);

  const onFormSubmit = async (
    stripe: Stripe | null,
    elements: StripeElements | null,
    {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      city,
      postalCode,
    }: FormState,
  ) => {
    // stripe payment handling code...

    const line_items: { [key: string]: { quantity: number } } = {};

    bag.items.forEach(({ id, quantity }) => {
      line_items[id] = {
        quantity,
      };
    });

    try {
      setIsCapturingOrder(true);

      await commerce.checkout.capture(checkoutTokenId, {
        line_items,
        customer: {
          firstname: firstName,
          lastname: lastName,
          email,
          phone: `+2${phoneNumber}`,
        },
        shipping: {
          name: `${firstName} ${lastName}`,
          street: address,
          town_city: city,
          county_state: `${country}-${subdivision!.value}`,
          country: country,
          postal_zip_code: postalCode,
        },
        fulfillment: {
          shipping_method: shippingOption!.value.id,
        },
        // ! payment isn't handled
        payment: {
          gateway: 'test_gateway',
          card: {
            number: '4242424242424242',
            expiry_month: '02',
            expiry_year: '24',
            cvc: '123',
            postal_zip_code: postalCode,
          },
        },
      });

      dispatch(bagActions.resetBag((await commerce.cart.retrieve()).id));

      setIsCapturingOrder(false);

      alert(
        '🎉 Succeeded!\nThanks for buying from us 😘.\nThe next step is to check your email 🚀.',
      );
    } catch (err) {
      setIsCapturingOrder(false);
      alert(
        '😢 Error\nSomething went wrong while capturing the order :(\nTry again later 😀',
      );
    }
    history.push('/products');
  };

  useEffect(() => {
    if (bagIsLoaded) {
      if (bag.subtotal === 0) {
        history.replace('/products');
        return;
      }

      (async () => {
        try {
          const checkoutToken = await commerce.checkout.generateToken(bag.id, {
            type: 'cart',
          });

          const subdivisions = Object.entries(
            (await commerce.services.localeListSubdivisions(country))
              .subdivisions,
          ).map(([code, key]) => ({
            label: key,
            value: code,
          }));

          const shippingOptions = checkoutToken.shipping_methods.map(
            ({ id, description: name, price: { raw: price } }) => ({
              label: `${name} - ${formatPriceEGP(price)}`,
              value: { id, price },
            }),
          );

          setSubdivisions(subdivisions);
          setShippingOptions(shippingOptions);
          setSubdivision(subdivisions[0]);
          setShippingOption(shippingOptions[0]);
          setCheckoutTokenId(checkoutToken.id);
          setIsLoaded(true);
        } catch (err) {
          alert(new Error('Something went wrong, Please refresh the page'));
        }
      })();
    }
  }, [bagIsLoaded]);

  // Summary

  return (
    <Layout>
      <main className={classes.main}>
        <h1 className={`header-1 ${classes.header}`}>Checkout</h1>
        <div className={classes.container}>
          <Elements stripe={stripePromise}>
            <ElementsConsumer>
              {({ stripe, elements }) => (
                <Form
                  {...{
                    formMethods,
                    isLoaded,
                    isCapturingOrder,
                    onSubmit: onFormSubmit.bind(null, stripe, elements),
                    subdivisions,
                    subdivision,
                    onSubdivisionChagne: selectedValue =>
                      setSubdivision(selectedValue),
                    shippingOptions,
                    shippingOption,
                    onShippingOptionChange: selectedValue =>
                      setShippingOption(selectedValue),
                  }}
                />
              )}
            </ElementsConsumer>
          </Elements>
          {bagIsLoaded && (
            <Summary
              items={bag.items}
              subtotal={bag.subtotal}
              delivery={shippingOption?.value.price}
            />
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Checkout;
