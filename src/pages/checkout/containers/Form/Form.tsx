import React, { useState } from 'react';
import classes from './Form.module.css';
import Input from './Input';
import Select, { OptionTypeBase } from 'react-select';
import { useForm } from 'react-hook-form';
import Button from '../../../../common/components/Button';
import { IoCarOutline } from 'react-icons/io5';
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import subdivisions from '../../../../data/EG-subdivisions';

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  phoneNumber: number;
}

const getStripeInputOptions = (fullWidth: boolean = false) => ({
  classes: {
    invalid: classes['stripe-input--invalid'],
    focus: classes['stripe-input--focus'],
    base: `${classes['stripe-input']} ${
      fullWidth && classes['stripe-input--full-width']
    }`,
  },
});

const Form = () => {
  // form inputs
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>();
  const [subdivision, setSubdivision] = useState<OptionTypeBase | null>(null);

  // stripe & loading stuff
  const [isRendered, setIsRendered] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  // submitting
  const onSubmit = (data: FormState) => {
    console.log({ ...data, subdivision });
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes['form-group']}>
        <h3 className={`header-3 ${classes['form-group__text']}`}>
          Customer information
        </h3>
        <Input
          {...register('firstName')}
          hasError={Boolean(errors.firstName)}
          placeholder="First name"
        />

        <Input
          {...register('lastName')}
          hasError={Boolean(errors.lastName)}
          placeholder="Last name"
        />

        <Input
          {...register('email')}
          hasError={Boolean(errors.email)}
          placeholder="Email"
          fullWidth
        />
        <p className={`p-2 ${classes['form-group__text']}`}>
          We'll only use your email to send your order confirmation
        </p>
      </div>

      <div className={classes['form-group']}>
        <h3 className={`header-3 ${classes['form-group__text']}`}>
          Delivery information
        </h3>
        <Input
          {...register('address')}
          hasError={Boolean(errors.email)}
          placeholder="Address"
        />

        <Input
          {...register('city')}
          hasError={Boolean(errors.email)}
          placeholder="City"
        />

        <Select
          placeholder="Subdivision"
          options={Object.entries(subdivisions).map(([code, name]) => ({
            label: name,
            value: code,
          }))}
          value={subdivision}
          onChange={selectedValue => setSubdivision(selectedValue)}
          theme={theme => ({
            ...theme,
            colors: {
              ...theme.colors,
              neutral20: 'var(--color-grey-light)',
              primary: 'var(--color-primary)',
            },
          })}
        />

        <Input
          {...register('postalCode')}
          hasError={Boolean(errors.email)}
          placeholder="Postal code"
        />

        <Input
          {...register('phoneNumber')}
          hasError={Boolean(errors.email)}
          placeholder="Phone number"
          fullWidth
        />

        <p className={`p-2 ${classes['form-group__text']}`}>
          Your phone number will be used to contact you for delivery
        </p>
      </div>

      <div className={classes['form-group']}>
        <h3 className={`header-3 ${classes['form-group__text']}`}>
          Payment information
        </h3>

        <CardNumberElement
          options={getStripeInputOptions(true)}
          onReady={() => setIsRendered(true)}
        />

        <CardExpiryElement options={getStripeInputOptions()} />

        <CardCvcElement options={getStripeInputOptions()} />

        <p className={`p-2 ${classes['form-group__text']}`}>
          This form is encrypted by stripe
        </p>
      </div>

      <Button icon={IoCarOutline} type="submit" isLoading={!isRendered}>
        Place order
      </Button>
    </form>
  );
};

export default Form;
