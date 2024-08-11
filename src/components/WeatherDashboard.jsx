import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchComponent from './SearchComponent';
import WeatherDisplay from './WeatherDisplay';
import FavoriteComponent from './FavoriteComponent';
import './WeatherDashboard.css';

function WeatherDashboard() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [units, setUnits] = useState(() => {
    const savedUnits = localStorage.getItem('units');
    return savedUnits || 'metric';
  });

  const API_KEY = 'e3e03f0e63200b569b2d72f7512547c8';

  useEffect(() => {
    const lastSearchedCity = localStorage.getItem('lastSearchedCity');
    if (lastSearchedCity) {
      setCity(lastSearchedCity);
    }
  }, []);

  useEffect(() => {
    if (city) {
      fetchWeatherData();
      localStorage.setItem('lastSearchedCity', city);
    }
  }, [city, units]);

  useEffect(() => {
    localStorage.setItem('units', units);
  }, [units]);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=${units}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
    }
  };

  const toggleUnits = () => {
    setUnits(prevUnits => prevUnits === 'metric' ? 'imperial' : 'metric');
  };

  return (
    <div className="weather-dashboard">
      <h1>Weather Watch</h1>
      <SearchComponent setCity={setCity} />
      <button onClick={toggleUnits} className="toggle-units">
        Switch to {units === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>
      <WeatherDisplay weatherData={weatherData} units={units} />
      <FavoriteComponent 
        favorites={favorites} 
        setFavorites={setFavorites} 
        setCity={setCity}
        currentCity={city}
      />
    </div>
  );
}

export default WeatherDashboard;