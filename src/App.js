import { useState } from 'react';
import './App.css';
import LocationForm from './components/LocationForm';
import axios from 'axios';

const LOCATIONIQ_KEY = 'pk.e2c3741ca1fe2c411a785e86f979ec48';

function App() {
  const [locationData, setLocationData] = useState(
      [{
          location: '',
          latitude: '',
          longitude: '',
      }]
  );
  
  const addLocationInfo = (locationName) => {
    setLocationData({location: locationName})

    return axios
      .get('https://us1.locationiq.com/v1/search.php',
      {
        params: {
          key: LOCATIONIQ_KEY,
          q: locationName,
          format: 'json'
        }
      })
      .then( (response) => {
        
        console.log('success');
        setLocationData({location: locationName, latitude: response.data[0].lat, longitude: response.data[0].lon})
      })
      .catch( (error) => {
        console.log('error');
      });
  };
  
  return (
    <main>
      <h1>Get Location Info</h1>
      <section>
        <LocationForm getInfoCallback={addLocationInfo} />
        
      </section>
      <p>Results for: {locationData.location}</p>
      <p>Latitude: {locationData.latitude}</p>
      <p>Longitude: {locationData.longitude}</p>
    </main>
  );
}

export default App;