// src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import {
  WeatherContainer,
  Input,
  Button,
  WeatherInfo,
  Dropdown,
} from './WeatherStyled';

const API_KEY = '0bdfac883192067d1c60f2bf4e4b6944';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const Weather = () => {
  // ... (Same as previous code)

  return (
    <WeatherContainer>{/* ... (Same as previous code) */}</WeatherContainer>
  );
};

export default Weather;
