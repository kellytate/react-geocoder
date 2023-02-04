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
        <h2>Get Location Info</h2>
        <div>
          <label>Location name:</label>
          <input
            type='text'
            name='location'
            value={formField}
            onChange={handleChange}
            ></input>
        </div>
        <div>
          <input type='submit' value='Get Info'></input>
        </div>
      </form>
    </section>
  );
};
export default LocationForm;