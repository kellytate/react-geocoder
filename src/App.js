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
      <h1>Get Latitude and Longitude</h1>
      <section>
        <LocationForm getInfoCallback={addLocationInfo} />
        
      </section>
      <h2>Results for: {locationData.location}</h2>
      <ul>
        <li>
        Latitude: {locationData.latitude}
        </li>
        <li>
        Longitude: {locationData.longitude}
        </li>
      </ul>
    </main>
  );
}

export default App;