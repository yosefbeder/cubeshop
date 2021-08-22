import React from 'react';
import classes from './Form.module.css';
import Input from '../../../../common/components/Input';
import { FormState } from '../..';
import Select from 'react-select';
import Button from '../../../../common/components/Button';
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';
import { UseFormReturn } from 'react-hook-form';
import { OptionTypeBase } from 'react-select';

const getStripeInputOptions = (fullWidth: boolean = false) => ({
  classes: {
    invalid: 'stripe-input--invalid',
    focus: 'stripe-input--focus',
    base: `stripe-input ${fullWidth && classes['grid-item--full-width']}`,
  },
});

interface FormProps {
  formMethods: UseFormReturn<FormState>;
  isLoaded: boolean;
  isCapturingOrder: boolean;
  onSubmit: (data: FormState) => void;
  subdivisions: OptionTypeBase[];
  subdivision: OptionTypeBase | null;
  onSubdivisionChagne: (selectedValue: OptionTypeBase) => void;
  shippingOptions: OptionTypeBase[];
  shippingOption: OptionTypeBase | null;
  onShippingOptionChange: (selectedValue: OptionTypeBase) => void;
}

const Form: React.FC<FormProps> = ({
  formMethods,
  isLoaded,
  isCapturingOrder,
  subdivisions,
  subdivision,
  onSubdivisionChagne,
  shippingOptions,
  shippingOption,
  onShippingOptionChange,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods;

  return (
    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={classes['form-group']}>
        <h2 className={`header-2 ${classes['form-group__text']}`}>
          Customer information
        </h2>
        <Input
          {...register('firstName', { required: true })}
          hasError={Boolean(errors.firstName)}
          placeholder="First name"
        />

        <Input
          {...register('lastName', { required: true })}
          hasError={Boolean(errors.lastName)}
          placeholder="Last name"
        />

        <Input
          {...register('email', {
            required: true,
            pattern:
              /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
          })}
          hasError={Boolean(errors.email)}
          placeholder="Email"
          className={classes['grid-item--full-width']}
        />
        <p className={`p-2 ${classes['form-group__text']}`}>
          We'll only use your email to send your order confirmation
        </p>
      </div>

      <div className={classes['form-group']}>
        <h2 className={`header-2 ${classes['form-group__text']}`}>
          Delivery information
        </h2>
        <Input
          {...register('address', { required: true })}
          hasError={Boolean(errors.address)}
          placeholder="Address"
        />

        <Input
          {...register('city', { required: true })}
          hasError={Boolean(errors.city)}
          placeholder="City"
        />

        <Select
          placeholder="Subdivision"
          options={subdivisions}
          value={subdivision}
          onChange={onSubdivisionChagne}
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
          {...register('postalCode', {
            maxLength: 10,
            minLength: 5,
            validate: n => !Number.isNaN(Number(n)),
          })}
          hasError={Boolean(errors.postalCode)}
          placeholder="Postal code"
        />

        <Select
          placeholder="Shipping Option"
          options={shippingOptions}
          value={shippingOption}
          onChange={onShippingOptionChange}
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
          {...register('phoneNumber', {
            maxLength: 11,
            minLength: 11,
            validate: n => !Number.isNaN(Number(n)),
          })}
          hasError={Boolean(errors.phoneNumber)}
          placeholder="Phone number"
        />

        <p className={`p-2 ${classes['form-group__text']}`}>
          The only country that we can ship to at the moment is egypt
        </p>
      </div>

      <div className={classes['form-group']}>
        <h2 className={`header-2 ${classes['form-group__text']}`}>
          Payment information
        </h2>

        <CardNumberElement options={getStripeInputOptions(true)} />

        <CardExpiryElement options={getStripeInputOptions()} />

        <CardCvcElement options={getStripeInputOptions()} />

        <p className={`p-2 ${classes['form-group__text']}`}>
          This form is encrypted by stripe
        </p>
      </div>

      <Button type="submit" isLoading={!isLoaded || isCapturingOrder}>
        Place order
      </Button>
    </form>
  );
};

export default Form;
