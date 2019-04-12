import React from 'react';
import RentalForm from './RentalForm';

const AddRental = (props) => {
  
  const handleSubmit = data => {
    console.log(data)
  }
  
  return (
    <section id='newRental'>
      <div className='bwm-form'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 col-md-8'>
            <h1 className='page-title'>Create Rental Page</h1>
            <RentalForm onSubmit={handleSubmit} />

          </div>
        </div>
      </div>
    </section>
  );
};


export default AddRental;