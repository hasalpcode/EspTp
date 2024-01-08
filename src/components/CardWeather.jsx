import React from 'react';

function formatTime(timestamp) {
  const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${hours}h ${minutes}min ${seconds}s`;
}

function CardWeather({ name, temperature, description, main, sunrise, sunset, img, lon, lat }) {
  const formattedSunrise = formatTime(sunrise);
  const formattedSunset = formatTime(sunset);

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        <div
          className="card"
          style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '70vh' }}
        >
          <h2 className="ml-auto mr-4 mt-3 mb-0">{name}</h2>
          <p className="ml-auto mr-4 mb-0 med-font">Main: {main}</p>
          <p className="ml-auto mr-4 mb-0 med-font">Description: {description}</p>
          <br />
          <h1 className="ml-auto mr-4 large-font">{temperature}&#176;</h1>
          <p className="ml-auto float-start mr-4 mb-0 med-font">
            <b>Sunrise</b>: {formattedSunrise}
          </p>
          <p className="ml-auto float-start mr-4 mb-0 med-font">
            <b>Sunset</b>: {formattedSunset}
          </p>

          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardWeather;
