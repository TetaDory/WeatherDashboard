import React from "react";
import { Weather } from "../types/Weather";
import TemperatureGraph from "./TemperatureGraph";
import WeatherMap from "./WeatherMap";

interface WeatherDisplayProps {
  weather: Weather;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  const temperatureData = weather.hourly.map((temp, index) => ({
    time: new Date(temp.time * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    temp: temp.temp,
  }));

  return (
    <div className="weather-display">
      <h2>{weather.city}</h2>
      <p>Current Temperature: {weather.temperature}°C</p>
      <p>Description: {weather.description}</p>

      {/* Renders the temperature graph */}
      <TemperatureGraph data={temperatureData} />

      {/* Renders the map with city location */}
      <WeatherMap lat={weather.lat} lon={weather.lon} city={weather.city} />

      {/* weather details */}
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
