import React from 'react';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';
import './WeatherDashboard.css';

function WeatherDisplay({ weatherData, units }) {
  if (!weatherData) return null;

  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case '01d': case '01n': return <WiDaySunny />;
      case '02d': case '02n': case '03d': case '03n': case '04d': case '04n': return <WiCloudy />;
      case '09d': case '09n': case '10d': case '10n': return <WiRain />;
      case '11d': case '11n': return <WiThunderstorm />;
      case '13d': case '13n': return <WiSnow />;
      case '50d': case '50n': return <WiFog />;
      default: return <WiDaySunny />;
    }
  };

  const currentWeather = weatherData.list[0];
  const forecast = weatherData.list.filter((item, index) => index % 8 === 0).slice(1, 6);

  return (
    <div className="weather-display">
      <div className="current-weather">
        <h2>{weatherData.city.name}</h2>
        <div className="weather-icon">{getWeatherIcon(currentWeather.weather[0].icon)}</div>
        <p className="temperature">{Math.round(currentWeather.main.temp)}°{units === 'metric' ? 'C' : 'F'}</p>
        <p className="description">{currentWeather.weather[0].description}</p>
      </div>
      <div className="forecast">
        <h3>5-Day Forecast</h3>
        <div className="forecast-items">
          {forecast.map((item, index) => (
            <div key={index} className="forecast-item">
              <p>{new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</p>
              <div className="weather-icon">{getWeatherIcon(item.weather[0].icon)}</div>
              <p>{Math.round(item.main.temp)}°{units === 'metric' ? 'C' : 'F'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;