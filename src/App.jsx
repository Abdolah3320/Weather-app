// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Add this import
import './index.css'; // Import the CSS file

const API_KEY = '0bdfac883192067d1c60f2bf4e4b6944';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const Weather = () => {
  const [city, setCity] = useState('');
  const [temperatureUnit, setTemperatureUnit] = useState('K');
  const [weatherData, setWeatherData] = useState(null);

  const convertTemperature = (temp) => {
    switch (temperatureUnit) {
      case 'C':
        return `${(temp - 273.15).toFixed(2)} °C`;
      case 'F':
        return `${((temp - 273.15) * (9 / 5) + 32).toFixed(2)} °F`;
      default:
        return `${temp.toFixed(2)} K`;
    }
  };

  const getWeather = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
        },
      });

      console.log('Weather API Response:', response.data);

      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="input"
      />
      <select
        value={temperatureUnit}
        onChange={(e) => setTemperatureUnit(e.target.value)}
        className="dropdown"
      >
        <option value="K">Kelvin</option>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
      </select>
      <button onClick={getWeather} className="button">
        Get Weather
      </button>

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {convertTemperature(weatherData.main.temp)}</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
