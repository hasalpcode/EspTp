import React, { useState } from 'react';

function WeatherForm() {
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&exclude={daily}&appid=852e2d73bbd06732bd91ee035c2255f6&units=metric`);
      const data = await response.json();

      // Handle the data as needed
      setWeatherData(data);
    } catch (error) {
      // Handle errors
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Latitude:
          <input
            type="text"
            className='form-control'
            value={lat}
            onChange={(e) => setLat(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Longitude:
          <input
            type="text"
            className='form-control'
            value={long}
            onChange={(e) => setLong(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <button className='btn btn-dark' type="submit">Get Weather Data</button>
      </form>

      {weatherData && (
        <div>
          <h2>Weather Data</h2>
          {/* Display weather data here */}
          <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default WeatherForm;
