import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextareaField from '../../shared/form/TextareaField';
import InputField from '../../shared/form/InputField';
import ErrorField from '../../shared/form/ErrorField';

const RentalForm = props => {
  const { handleSubmit, pristine, submitting, valid, options, errors } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="title" label="Title" className="form-control" component={InputField} />
      <Field name="description" label="Description" rows="6" className="form-control" component={TextareaField} />

      <Field name="dailyRate"  label="Daily Rate" className="form-control" symbol="$" component={InputField} />

      <button className="btn btn-primary" type="submit" disabled={!valid || pristine || submitting}>
        Add Rental
      </button>

    </form>
  );
};

export default reduxForm({
  form: 'rentalForm',
})(RentalForm);
