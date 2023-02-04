import React, { useState } from 'react';

const kDefaultFormState = '';

const LocationForm = (props) => {
  const [formField, setFormField] = useState(kDefaultFormState);

  const formSubmit = (event) => {
    event.preventDefault();
    props.getInfoCallback(formField);
    
    setFormField(kDefaultFormState);
  };

  const handleChange = (event) => {
    setFormField(event.target.value);
  };

  return (
    <section>
      <form onSubmit={formSubmit}>
        <div>
          <input
            type='text'
            name='location'
            value={formField}
            onChange={handleChange}
            ></input>
          <input type='submit' value='Search Now!'></input>
        </div>
      </form>
    </section>
  );
};
export default LocationForm;